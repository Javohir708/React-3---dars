import React from 'react'
import './Hero.scss'

const Hero = ({title, info, url, btn, buy}) => {
  return (
    <section style={{background: `url(${url}) no-repeat center/cover`}} className='hero'>
        <div className='container'>
            <div className='hero__content'>
                <h2>{title}</h2>
                <p>{info}</p>
            <div className='info'>
                <button className='learn-btn'>{btn}</button>
                <button className='buy-btn'>{buy}</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero