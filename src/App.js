import './App.css';
import Container from './component/Container';
import Footer from './component/Footer';
import Header from './component/Header';
import {
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
