import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Bio } from './pages/Bio';
import { Main } from './pages/Main';

export function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routers */}
        <Route path="/" element={<Main/>} />
        <Route path="/profile" element={<Bio/>} />
      </Routes>
    </BrowserRouter>
  );
}