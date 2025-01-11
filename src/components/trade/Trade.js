import React from 'react'
import "./Trade.scss"

const Trade = ({title, info, btn, url, buy}) => {
  return (
    <section className='trade'>
        <div className='trade__wrapper'>
            <div style={{background: `url(${url}) no-repeat center/cover`}} className='trade__content'>
                <h2>{title}</h2>
                <p>{info}</p>
                <div className='global-btn'>
                <button className='global-learn-btn'>{btn}</button>
                <button className='global-buy-btn'>{buy}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trade