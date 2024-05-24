import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import FindStore from './pages/FindStore';
import GiftCards from './pages/GiftCards';
import Menu from './pages/Menu';
import Rewards from './pages/Rewards';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="*" element={<MainPage/>} />
          <Route path='menu' element={<Menu/>}/>
          <Route path='rewards' element={<Rewards/>}/>
          <Route path='giftCards' element={<GiftCards/>}/>
          <Route path='findStore' element={<FindStore/>}/>
        </Routes>
      <Header/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
