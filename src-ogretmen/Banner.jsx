import React from 'react'
import './Banner.css'
import BannerFoto from './img/banner-foto.png'

function Banner({title,image}) {
  return (
    <>
    <section id="banner" className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{title}</h1>
                    <p>Web tasarım, Grafik tasarımı, Dijital Pazarlama</p>
                    <button className='btn btn-primary'>Teklif Alın</button>
                    <button className='btn btn-outline-primary'>İletişim</button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={BannerFoto} alt=''/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner