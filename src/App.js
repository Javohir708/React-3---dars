// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Socialinfo from './components/socialinfo/Socialinfo';
import Trade from './components/trade/Trade';
import iphone16Pro from './assets/Figure.svg'
import iphonePro from './assets/iphone.svg'
import watch from './assets/WATCH.svg'
import watchfitnes from './assets/social.svg'
import ipad from './assets/ipad.svg'
import mac from './assets/mac.svg'
import smartWatch from './assets/SWatch.svg'
import tradeImg from './assets/trade.svg'
import card from './assets/card.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero title="iPhone 16 Pro" info="Hello, Apple Intelligence." url={iphone16Pro} btn={"Learn more"} buy={<div style={{ color: "dodgerblue", }}>Buy</div>}/>
      <Hero title="iPhone 16" info="Hello, Apple Intelligence." url={iphonePro} btn={"Learn more"} buy={<div style={{ color: "#fff", }}>Buy</div>}/>
      <Hero title={<div style={{ color: "#000" }}>WATCH</div>}  info={<div style={{ color: "#000" }}>SERIES 10</div>}  url={watch} btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Buy</div>}/>
      <div className='social-wrapper'>
      <Socialinfo title="Fitness+" info="Fitness for everyone. Personalized for you." url={watchfitnes}  btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>Try it free</div>}/>
      <Socialinfo title="iPad air" info="Two sizes. Faster chip. Does it all." url={ipad}  btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>buy</div>}/>
      <Socialinfo title={<div style={{ color: "#fff" }}>MacBook Pro</div>}  info={<div style={{ color: "#fff" }}>A work of smart.</div>} url={mac}  btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>buy</div>}/>
      <Socialinfo title={<div style={{ color: "#fff" }}>Watch</div>} about={<div style={{ color: "orange" }}>ULTRA 2</div>} info={<div style={{ color: "#fff" }}>A work of smart.</div>} url={smartWatch}  btn={"Learn more"} buy={<div style={{ color: "dodgerblue" }}>buy</div>}/>
      </div>
      <div className='trade-wrapper'>
      <Trade title="Trade In" info="Get $180–$650 in credit when you trade in iPhone 12 or higher.2" btn={"Get your estimate"} url={tradeImg} buy={<div style={{ color: "dodgerblue" }}>Buy</div>}/>
      <Trade title="Card" info="Get up to 3% Daily Cash back with every purchase." btn={"Learn more"} url={card} buy={<div style={{ color: "dodgerblue" }}>Apply now</div>}/>
      </div>
    </div>
  );
}

export default App;
