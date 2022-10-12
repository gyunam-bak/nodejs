import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};

export default App;