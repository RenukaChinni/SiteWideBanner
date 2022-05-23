import { Header, Sidebar, Banner } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { Candidates, Home, Interviews, Library, Settings } from 'modules';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from 'store/slices';

import styles from './App.module.css';

export const App = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (user.error) {
    return <div>There was an issue loading the app. Please contact support with this error: {user.error}</div>
  }

  if (user.isLoading || !user.id) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.layout}>
      <Banner />
      <Header />
      <Sidebar />
      <main className={styles.content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/library' element={<Library />} />
          <Route path='/interviews' element={<Interviews />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
};
