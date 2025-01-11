// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import iphone16Pro from './assets/Figure.svg'
import iphonePro from './assets/iphone.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero title="iPhone 16 Pro" info="Hello, Apple Intelligence." url={iphone16Pro} btn={"Learn more"} buy={"Buy"}/>
      <Hero title="iPhone 16" info="Hello, Apple Intelligence." url={iphonePro} btn={"Learn more"} buy={"Buy"}/>
    </div>
  );
}

export default App;
