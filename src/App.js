import './App.css';
import Header from './Components/Header';
import AuthModal from './Components/Auth/authModal';

function App() {
  return (
    <div className="App">
      <Header />
      <AuthModal onClose={() => console.log('close')} />
    </div>
  );
}

export default App;