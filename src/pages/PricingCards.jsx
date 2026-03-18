import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PricingCards = ({ title, price, recommended, text, features }) => {
  return (
      
      <div className={`card ${recommended ? "recommended" : ""}`} style={{width: "22rem", padding:"20px", boxShadow:'0 4px 54px 0 rgba(224, 224, 224, .2509803922'}}>
      {recommended && <div className="badge" style={{color:'#fa773b',fontSize:'14px', position:'absolute',top:'-15px',left:'33%',backgroundColor:'#fff1ea', border:'1px solid #f26522', borderRadius:'20px'}}>Recommended</div> }

      <h2 style={{fontWeight:'700', textAlign:'center'}}>{title}</h2>
      <h1 style={{textAlign:"center", color:'#f26522'}}>${price}</h1>

      <p className="desc" style={{textAlign:'center', fontSize:'15px', color:'#7d7d7d'}} >
        {text}
      </p>
    <hr />
      <ul style={{padding:'0'}}>
  {features.map((item, i) => (
    <li key={i} style={{listStyle:'none', color:'#7d7d7d', lineHeight:'30px'}}>
      {item.available ? (
        <FaCheckCircle className="icon-yes" style={{color:'green', margin:'0 10px'}} />
      ) : (
        <FaTimesCircle className="icon-no" style={{color:'red', margin:'0 10px'}} />
      )}
      {item.text}
    </li>
  ))}
</ul>

      <button style={{backgroundColor:'#212529', color:'#fff',  borderRadius:'5px',padding:'6px'}}>Choose Plan</button>
    </div>
  );
};

export default PricingCards