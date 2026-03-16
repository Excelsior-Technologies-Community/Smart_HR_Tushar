import React, { useState } from 'react'
import './innerPages.css'
import innerApplicationsData from '../../data/innerApplicationsData'
import InnerPagesCard from '../InnerPagesCard'
import crmsData from "../../data/crmsData"
import authData from '../../data/authData'
import modulesData from '../../data/modulesData'
import LayoutsCard from '../LayoutsCards'
import layoutsData from '../../data/layoutsData'

const InnerPages = () => {
    const [section, setSection] = useState("applications")

  const dataMap = {
  applications: innerApplicationsData,
  crm: crmsData,
  auth: authData,
  modules: modulesData
};

const data = dataMap[section];
  return (
    <>
    <div className='innerPagesTop text-center'>
        <div className='innerPagesText'>
          <p>Inner Pages</p>
          <h2>Prebuilt Pages to Accelerate Your Workflow</h2>
        </div>
     <div className='innerPagesBtn'>

          <button
    className={section === "applications" ? "activeBtn" : ""}
    onClick={() => setSection("applications")}
  >
    Applications
  </button>

  <button
    className={section === "crm" ? "activeBtn" : ""}
    onClick={() => setSection("crm")}
  >
    CRMS
  </button>

  <button
    className={section === "auth" ? "activeBtn" : ""}
    onClick={() => setSection("auth")}
  >
    Authentication
  </button>

  <button
    className={section === "modules" ? "activeBtn" : ""}
    onClick={() => setSection("modules")}
  >
    Other Modules
  </button>
        </div>
          <div className="container d-flex gap-4 flex-wrap justify-content-center py-4">
          {data.map((item) => (
            <InnerPagesCard
              key={item.id}
              title={item.title}
              img={item.img}
              icon={item.icon}
          />
      ))}
      

    </div>
    <div className='slideBg'>
        
    </div>

      <div className='layouts innerPagesTop text-center'>
        <div className='innerPagesText'>
          <p>Layouts</p>
          <h2>Explore Versatile Layouts</h2>
        </div>
        <div className='layoutsCards'>
        <div className="container d-flex gap-4 flex-wrap justify-content-center">

      {layoutsData.map((item) => (
        <LayoutsCard
          key={item.id}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}

    </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default InnerPages
