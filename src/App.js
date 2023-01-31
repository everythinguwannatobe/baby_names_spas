import logo from './logo.svg';
import './App.css';
import BabyDashboard from './components/BabyDashboard';
import RegisterPanel from './components/RegisterPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
