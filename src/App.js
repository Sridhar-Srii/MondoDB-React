import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Form from './pages/Form';
import Read from './pages/Read.js';
import Update from './pages/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;