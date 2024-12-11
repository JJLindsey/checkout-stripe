import Navigation from './components/Navigation';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Store from './pages/Store'
import { Box } from '@mui/material'
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation />
        <Box sx={{ml: 4, pt: 10}}>
        <Routes>
          <Route index element={<Store/>} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
        </Box>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
