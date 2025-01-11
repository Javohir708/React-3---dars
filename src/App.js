// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import iphone16Pro from './assets/Figure.svg'
import iphonePro from './assets/iphone.svg'
import watch from './assets/WATCH.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero title="iPhone 16 Pro" info="Hello, Apple Intelligence." url={iphone16Pro} btn={"Learn more"} buy={<div style={{ color: "dodgerblue", }}>Buy</div>}/>
      <Hero title="iPhone 16" info="Hello, Apple Intelligence." url={iphonePro} btn={"Learn more"} buy={<div style={{ color: "#fff", }}>Buy</div>}/>
      <Hero title={<div style={{ color: "#000" }}>WATCH</div>}  info={<div style={{ color: "#000" }}>SERIES 10</div>}  url={watch} btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Buy</div>}/>
    </div>
  );
}

export default App;
