
import './App.css';
import Login from './components/Login';
import { Dashboard } from './components/Dashboard';
import DummyList from './components/DummyList';
import {Route, Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import PageNotFound from './components/PageNotFound';
import Dashboard2 from './components2/Dashboard'

function App() {
  
  const user = useSelector(selectUser);

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard2 />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dummy-list' element={<DummyList />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
