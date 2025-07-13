import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const addUserToListByEmail = functions.https.onCall(
  async (data: any, context: any) => {
    try {
      const { listId, email } = data;

      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be signed in');
      }

      if (!listId || !email) {
        throw new functions.https.HttpsError('invalid-argument', 'listId and email are required');
      }

      const userRecord = await admin.auth().getUserByEmail(email);
      const uidToAdd = userRecord.uid;

      const listRef = admin.firestore().collection('lists').doc(listId);
      await listRef.update({
        members: admin.firestore.FieldValue.arrayUnion(uidToAdd),
      });

      return { success: true };
    } catch (error: any) {
      console.error('🔥 Internal error in addUserToListByEmail:', error);
      throw new functions.https.HttpsError('internal', error.message ?? 'Internal error');
    }
  }
);
