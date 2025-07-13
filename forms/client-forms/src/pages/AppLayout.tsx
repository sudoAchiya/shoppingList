import { Navbar } from '@sikur/ui';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MenuIcon, AirforceLogo } from '@/assets/icons';
import { FormRouteWrapper } from '@/components/FormRouteWrapper';
import { useSurveyContext } from '@/context/SurveyContext/SurveyContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AppNavbar = () => {
  const { form } = useSurveyContext();
  return (
    <Navbar
      MenuIcon={MenuIcon}
      Logo={AirforceLogo}
      systemNote="סודי אישי לאחר מילוי"
      surveyTitle={form?.object.title}
      surveyYear={form?.object.year}
    />
  );
};

export const AppLayout = () => {
  return (
    <>
      <AppNavbar />
      <ScrollToTop />
      <Routes>
        <Route path="/works/:workId" element={<FormRouteWrapper />} />
      </Routes>
    </>
  );
};
