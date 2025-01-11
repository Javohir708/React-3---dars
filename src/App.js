// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Socialinfo from './components/socialinfo/Socialinfo';
import iphone16Pro from './assets/Figure.svg'
import iphonePro from './assets/iphone.svg'
import watch from './assets/WATCH.svg'
import watchfitnes from './assets/social.svg'
import ipad from './assets/ipad.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero title="iPhone 16 Pro" info="Hello, Apple Intelligence." url={iphone16Pro} btn={"Learn more"} buy={<div style={{ color: "dodgerblue", }}>Buy</div>}/>
      <Hero title="iPhone 16" info="Hello, Apple Intelligence." url={iphonePro} btn={"Learn more"} buy={<div style={{ color: "#fff", }}>Buy</div>}/>
      <Hero title={<div style={{ color: "#000" }}>WATCH</div>}  info={<div style={{ color: "#000" }}>SERIES 10</div>}  url={watch} btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Buy</div>}/>
      <Socialinfo title="Fitness+" info="Fitness for everyone. Personalized for you." fitnes={watchfitnes} btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Try it free</div>}/>
      <Socialinfo title="Fitness+" info="Fitness for everyone. Personalized for you." fitnes={watchfitnes} btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Try it free</div>}/>
    </div>
  );
}

export default App;
