import React from 'react'

const UseCase = ({ img, title, text }) => {
  return (
    <div className='useCase-card' style={{width: "26rem", padding:"20px", textAlign: "center"}}>
      <div className='useCase-img'>
        <img src={img} alt={title} />
      </div>

      <div
        className="card-body text-center"
        style={{ paddingBottom: "0", paddingRight: "0", paddingLeft: "0" }}
      >
        <h5
          className="card-title"
          style={{ fontSize: "16px", fontWeight: "700" }}
        >
          {title}
        </h5>

        <p className="card-text" style={{ color: "grey" }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default UseCase