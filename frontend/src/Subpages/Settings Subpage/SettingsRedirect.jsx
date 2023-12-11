import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SettingsRedirect = () => {
  const [key, setKey] = useState(0); // Add a unique key

  const navigate = useNavigate();

  // Memoize the navigate function
  const memoizedNavigate = useMemo(() => navigate, [navigate]);

  useEffect(() => {
    // Redirect to the "drugs" route when this component is mounted
    memoizedNavigate('/user/settings/personal');
  }, [memoizedNavigate]);

  const location = useLocation();

  // Whenever the location changes, increase the key to trigger remount
  useEffect(() => {
    setKey(key + 1);
  }, [location]);

  return (
    <>
    </>
  );
};

export default SettingsRedirect;
