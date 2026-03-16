const InnerPagesCard = ({ title, img, icon }) => {
  return (
    <div className="card" style={{ width: "26rem", padding: "20px" }}>

      <div className="card-body text-center" style={{ padding: "0" }}>
        
        <div className="text-row d-flex justify-content-between align-items-center pb-1">
          <h5 className="card-title" style={{ fontSize: "22px", fontWeight: "600" }}>
            {title}
          </h5>
          <span className="icon-style">
           {icon === "arrow" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
            )}
          </span>
        </div>
        <div className="imgBorder" style={{backgroundColor: "#edf2f4", padding: "20px", borderRadius: '10px'}}>
        <img src={img} className="card-img-top rounded-3" alt="card" />
        </div>

      </div>
    </div>
  )
}

export default InnerPagesCard