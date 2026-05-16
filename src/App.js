import './App.css';
import AuthModal from './Components/Auth/authModal';
import Header from './Components/Header';
import Profile from './page/profile';
import Shop from './page/shop';


import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="App">
      <Header onProfileClick={() => setShowAuth(true)} />

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {showAuth && (
        <AuthModal onClose={() => setShowAuth(false)} />
      )}
    </div>
  );
}

export default App;