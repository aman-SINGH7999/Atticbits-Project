
import './App.css';
import Login from './components/Login';
import { Dashboard } from './components/Dashboard';
import DummyList from './components/DummyList';
import {Route, Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import PageNotFound from './components/PageNotFound';

function App() {
  const user = useSelector(selectUser);


  return (
    <>
    <Routes>
      {user ? <Route path='/dashboard' element={<Dashboard />} /> : <Route path='/login' element={<Login />} />}
      {user ? <Route path='/dummy-list' element={<DummyList />} /> : <Route path='/login' element={<Login />} />}
      {!user ? <Route path='/login' element={<Login />} /> : <Route path='/dashboard' element={<Dashboard />} />}
      {user ? <Route path='*' element={<PageNotFound />} /> : <Route path='/login' element={<Login />} />}
    </Routes>
    </>
  );
}

export default App;
