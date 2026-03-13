import React, { useState, useEffect } from 'react'
import './Demos.css'

import img8 from "../../assets/images/dashboard-01.jpg";
import img9 from "../../assets/images/dashboard-02.jpg";
import img10 from "../../assets/images/dashboard-03.jpg";
import img11 from "../../assets/images/dashboard-04.jpg";
import img12 from "../../assets/images/dashboard-05.jpg";

const Demos = () => {

  const [img, setImg] = useState(img8);
const [apps, setApps] = useState(0);
const [pages, setPages] = useState(0);
const [widgets, setWidgets] = useState(0);
const [components, setComponents] = useState(0);
useEffect(() => {

  const interval = setInterval(() => {
    setApps((prev) => (prev < 10 ? prev + 1 : prev));
    setPages((prev) => (prev < 200 ? prev + 5 : prev));
    setWidgets((prev) => (prev < 80 ? prev + 2 : prev));
    setComponents((prev) => (prev < 400 ? prev + 10 : prev));
  }, 30);

  return () => clearInterval(interval);

}, []);
  return (
    
    <>
    
      <div className='demos text-center'>
        <div className='demosText'>
          <p>Demos</p>
          <h2>See the Template in Action</h2>
        </div>

         <div className='demosBtn'>
        <button className={img === img8 ? "active" : ""} onClick={() => setImg(img8)}>Admin Dashboard</button>

        <button className={img === img9 ? "active" : ""} onClick={() => setImg(img9)}>Employee Dashboard</button>

        <button className={img === img10 ? "active" : ""} onClick={() => setImg(img10)}>Deals Dashboard</button>

        <button className={img === img11 ? "active" : ""} onClick={() => setImg(img11)}>Leads Dashboard</button>

        <button className={img === img12 ? "active" : ""} onClick={() => setImg(img12)}>Super Admin</button>
      </div>


        <div className='demosImgs'>
            <div className='outerdiv'>
                <div className='innerdiv'>
          <img src={img} alt="demo" />

                </div>
            </div>
        </div>

        <div className='templateBtn'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
            Buy Template</button>
        </div>

      </div>
      <div className='keyBenefits py-5'>
        <div className='keyBenefitsText'>
        <p>Key Benefits</p>
          <h2>Why Choose Our HR Admin Template?</h2>
        </div>
        <div className='keyBenefitsMain container-xl d-flex justify-content-between w-100'>
        <div className='benefitsText w-100'>
            <ol className='benefitsList'>
                <li>Boost Productivity</li>
                <p>Automate repetitive tasks like candidate tracking, job postings, and payroll management to save time and focus on strategic HR activities.</p>
                <li>Save Time</li>
                <p>With everything integrated into one platform, you can manage job listings, employee records, performance reviews, and more in just a few clicks.</p>
                <li>Customizable and Scalable</li>
                <p>Whether you’re a startup or a large enterprise, you can customize the platform’s features, layouts, and reporting capabilities to match your specific requirements..</p>
                <li>Enhanced Collaboration</li>
                <p>Share documents, track progress on tasks, and ensure smooth communication across departments to meet your organizational goals.</p>
            </ol>
        </div>
        <div className='benefitsImg '>
            <div className='benefitsDesign1'>
                <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-01.png" alt="" />
            </div>
            <div className='benefitsDesign2'>
                <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-02.png" alt="" />
            </div>
            <div className='keyImg'>
            <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/key-sec-img-01.svg" alt="" className='keyImg1' />
            <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/key-sec-img-02.png" alt="" className='keyImg2'/>
            </div>
        </div>
        </div>

      </div>

      <div className='keyBemefitsStatsOuter'>
        <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-08.png" alt="" className='statsImg1'/>

     <div className='keyBemefitsStats container d-flex g-4 align-items-center text-center text-light'>

  <div className='col-sm-6 col-lg-3'>
    <h2>{apps}+</h2>
    <p>Applications</p>
  </div>

  <div className='col-sm-6 col-lg-3'>
    <h2>{pages}+</h2>
    <p>Pages</p>
  </div>

  <div className='col-sm-6 col-lg-3'>
    <h2>{widgets}+</h2>
    <p>Widgets</p>
  </div>

  <div className='col-sm-6 col-lg-3'>
    <h2>{components}+</h2>
    <p>Components</p>
  </div>

</div>
<img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-07.png" alt="" className='statsImg2' />
      </div>
    </>
  )
}

export default Demos