import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  writeBatch,
} from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db, auth, provider, app } from '../firebase';

interface Item {
  id: string;
  name: string;
}

interface List {
  id: string;
  name: string;
}

export default function ShoppingList() {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [lists, setLists] = useState<List[]>([]);
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [newItem, setNewItem] = useState('');
  const [newListName, setNewListName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');

  // Auth state
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
  if (!user) return;

  const q = query(collection(db, 'lists'), where('pendingInvites', 'array-contains', user.email));

  const unsub = onSnapshot(q, async (snapshot) => {
    const batch = writeBatch(db);

    snapshot.docs.forEach((docSnap) => {
      const listRef = doc(db, 'lists', docSnap.id);
      batch.update(listRef, {
        members: arrayUnion(user.uid),
        pendingInvites: arrayRemove(user.email),
      });
    });

    await batch.commit();
  });

  return () => unsub();
}, [user]);


  // Load items for selected list
  useEffect(() => {
    if (!selectedListId) return;

    const q = query(
      collection(db, 'shoppingList'),
      where('listId', '==', selectedListId)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const loadedItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setItems(loadedItems);
    });

    return () => unsub();
  }, [selectedListId]);

  const createList = async () => {
    if (!user || !newListName.trim()) return;

    const docRef = await addDoc(collection(db, 'lists'), {
      name: newListName.trim(),
      members: [user.uid],
    });

    setSelectedListId(docRef.id);
    setNewListName('');
  };

  const addItem = async () => {
    if (newItem.trim() && selectedListId) {
      await addDoc(collection(db, 'shoppingList'), {
        name: newItem.trim(),
        listId: selectedListId,
      });
      setNewItem('');
    }
  };

  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, 'shoppingList', id));
  };

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const inviteUserByEmail = async () => {
  if (!inviteEmail || !selectedListId) return;

  const listRef = doc(db, 'lists', selectedListId);
  await updateDoc(listRef, {
    pendingInvites: arrayUnion(inviteEmail.trim()),
  });

  alert(`Invitation sent to ${inviteEmail}`);
  setInviteEmail('');
};


  return (
    <div>
      <h2>🛒 Shopping List</h2>

      {!user ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign out</button>

          <h3>🔗 Lists</h3>
          <select
            value={selectedListId ?? ''}
            onChange={(e) => setSelectedListId(e.target.value)}
          >
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            ))}
          </select>

          <div>
            <input
              placeholder="New list name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <button onClick={createList}>Create List</button>
          </div>

          <div>
            <input
              placeholder="Invite user by email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
            />
            <button onClick={inviteUserByEmail}>Invite</button>
          </div>

          {selectedListId && (
            <>
              <h3>Items in list</h3>
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add item"
              />
              <button onClick={addItem}>Add</button>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.name}
                    <button onClick={() => deleteItem(item.id)}>❌</button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
