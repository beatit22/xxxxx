import React from 'react'
import './Banner.css'

function Banner({title}) {
  return (
    <section id="banner" className='py-5'>
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <h1>{title}</h1>
            <p>Yazılım</p>
            <p>Grafik tasarım</p>
            <p>Dijital pazarlama</p>
            
            <button className="btn btn-primary">Teklif Alın</button>
              <button className="btn btn-outline-primary">Teklif Verin</button>
          </div>

          <div className="col-md-6 text-center">
            {/* Buraya görsel ekleyebilirsin */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
