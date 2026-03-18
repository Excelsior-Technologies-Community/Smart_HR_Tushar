const FeaturesCard = ({ title, img }) => {
  return (
    <div
      className="card shadow-sm border-0"
      style={{
        width: "12rem",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f9fa",
          padding: "15px",
        }}
      >
        <img
          src={img}
          className="img-fluid"
          style={{ maxHeight: "100%", objectFit: "contain" }}
          alt="card"
        />
      </div>

      <div className="text-center py-2 bg-dark text-light">
        <h6
          className="m-0"
          style={{ fontSize: "16px", fontWeight: "600" }}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

export default FeaturesCard;