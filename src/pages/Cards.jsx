const Card = ({title, text, img}) => {
  return (
    <div className="card" style={{width: "19rem", padding:"20px"}}>
      <img src={img} className="card-img-top rounded-3" alt="card"/>
      <div className="card-body text-center" style={{paddingBottom: "0", paddingRight: "0", paddingLeft: "0"}}>
        <h5 className="card-title" style={{fontSize: "16px", fontWeight: "700"}}>{title}</h5>
        <p className="card-text" style={{color: "grey"}}>{text}</p>
      </div>
    </div>
  )
}

export default Card