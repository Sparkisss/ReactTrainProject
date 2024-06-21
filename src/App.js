import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import FindStore from './pages/FindStore';
import GiftCards from './pages/GiftCards';
import Store from './pages/Store';
import Rewards from './pages/Rewards';
import MainPage from './pages/MainPage';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage';
import { Context } from './index';
import { useContext } from 'react';

function App() {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <div className="App">      
      <BrowserRouter>
      <Header/>
        <Routes>
          {user.isAuth && <Route path='store/admin' element={<Admin/>}/>}
          {user.isAuth && <Route path='store/basket' element={<Basket/>}/>}
          {
            <>
              <Route path="*" element={<MainPage/>} />
              <Route path='store' element={<Store/>}/>
              <Route path='rewards' element={<Rewards/>}/>
              <Route path='giftCards' element={<GiftCards/>}/>
              <Route path='findStore' element={<FindStore/>}/>
              <Route path='auth' element={<Auth/>}/>
              <Route path='store/device/:id' element={<DevicePage/>}/>
            </>
          }          
        </Routes>
      <Header/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
