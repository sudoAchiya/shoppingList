import '@/App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '@/context/AuthContext/AuthContextProvider';
import { SurveyProvider } from '@/context/SurveyContext/SurveyContextProvider';
import { AppLayout } from '@/pages/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <SurveyProvider>
          <AppLayout />
        </SurveyProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
