
import './App.css';
import Navbar from './components/Navbar';
import MainApp from './components/MainApp.js';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <main className="App-main">
      <MainApp />
      </main>
      <footer className="App-footer">
      <Footer />
      </footer>
    </div>
  );
}

export default App;
