import React from 'react'
import "./Socialinfo.scss"

const Socialinfo = ({title, about, info, url, btn, buy}) => {
  return (
    <section className='social'>
            <div className='social__content-wrapper'>
            <div style={{background: `url(${url}) no-repeat center/cover`}} className='social__content'>
                <h2>{title}</h2>
                <h4>{about}</h4>
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

export default Socialinfo