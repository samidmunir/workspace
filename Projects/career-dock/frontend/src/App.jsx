import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;