import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
    <Header />
    <Form />
    <Footer/>
    </div>
  );
}

export default App;
