import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routers */}
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}