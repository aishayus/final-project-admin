import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const url = 'https://final-project-bd-1.onrender.com'
  return (
    <>
      <ToastContainer />
        <Navbar />
        <hr />
        <div className='flex max-padd-container'>
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Add url={url} />}/>
            <Route path='/list' element={<List url={url} />}/>
            <Route path='/orders' element={<Orders url={url} />}/>
          </Routes>
        </div>
    </>
  )
}