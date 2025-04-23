import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import JobDetail from './pages/JobDetail.jsx';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Navbar />
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/record/:id' element={<JobDetail />} />
      </Routes>
    </>
  );
}

export default App;