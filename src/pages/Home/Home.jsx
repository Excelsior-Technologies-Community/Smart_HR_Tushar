import React from 'react'
import './Home.css'
import Card from '../Cards'
import cardData from '../../data/cardData'
import UseCase from './useCase'
import useCaseData from '../../data/useCaseData'

const Home = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="d-flex justify-content-between align-items-center px-4">
    <a className="navbar-brand text-decoration-none text-light" href="#">
      <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="" />
    </a>
    <button type="button" className=" btn-buy">Buy now</button>

  </div>
</nav>
    <div className='for-bg '>

<div className="main-nav">
  <nav className="container navbar navbar-2 navbar-expand-lg bg-light rounded-3">
    <div className="container-fluid">
      <a className="navbar-brand-2 " href="#">
        <img src="https://smarthr.dreamstechnologies.com/react/assets/img/logo.svg" alt="logo" />
      </a>
      <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Demos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Inner Pages</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Features</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Pricing</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='#' >FAQ</a>
  </li>
</ul>
      <button type="button" className=" btn-temp">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> 
         Buy Template</button>
    </div>
  </nav>

</div>
<div className='head'>
  <div className='head-text text-light text-center px-5'>
  <h1>Professional HR Management Template with <span>React & Bootstrap</span> </h1>
  <p>A complete HR solution designed to enhance your recruitment process with ease.</p>
<div className='btn-react'>
  <button>
    <img src="https://smarthr.dreamstechnologies.com/react/assets/img/icons/react.svg" alt="" /> React</button>
  <button>
    <img src="https://smarthr.dreamstechnologies.com/react/assets/img/icons/nextjs.svg" alt="" /> Nextjs</button>
</div>
  </div>
  <div className='head-imgs'>

<div className='up-imgs'>

  <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/banner-bg-01.svg" alt="" />
  <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/banner-bg-02.svg" alt="" />
</div>
 {/* <div className='down-img'>
  <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/banner-bg-04.png" alt="" />
  <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/banner-bg-03.png" alt="" />
</div>  */}
  </div>
</div>
<div className='Db-img'>
  <img src="https://smarthr.dreamstechnologies.com/react/assets/img/banner-img.png" alt="" />
</div>
    </div>
    <div className='overview'>
      <div className='overview-text text-center'>
        <p>Overview</p>
        <h1>All-in-One HR Solution for Growing Businesses</h1>
      </div>
      <div className='overview-cards'>
          <div className="container d-flex gap-3 flex-wrap justify-content-center">

      {cardData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}

    </div>
        
      </div>

    </div>
    <div className='useCase mb-5 mt-4'>
        <div className='overview-text text-center'>
        <p>Usecase</p>
        <h1>Designed for HR Professionals</h1>
      </div>
      <div className='useCase-cards'>
      <div className="container d-flex gap-3 flex-wrap justify-content-center">

      {useCaseData.map((item) => (
        <UseCase
          key={item.id}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}

    </div>
      </div>
      <div className='useCase-btn py-3'>
        <button className='liveDemo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>
           Live Demo</button>
        <button className='buyProduct'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
            Buy Full Product</button>

      </div>
    </div>  

    </>
  )
}

export default Home
