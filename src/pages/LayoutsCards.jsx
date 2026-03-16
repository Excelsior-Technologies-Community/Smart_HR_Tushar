const LayoutsCard = ({title, text, img}) => {
  return (
    <div className="card" style={{width: "12rem", padding:"8px", backgroundColor: "#fef1eb", border: "none"}}>
      <img src={img} className="card-img-top rounded-3" alt="card"/>
      <div className="card-body text-center" style={{padding: "0", backgroundColor: "#fff", borderRadius: " 0px 0px 10px 10px"}}>
        <h5 className="card-title" style={{fontSize: "12px", fontWeight: "600"}}>{title}</h5>
      </div>
    </div>
  )
}

export default LayoutsCard