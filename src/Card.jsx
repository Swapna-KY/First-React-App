function Card({ image, name }) {
  return (
    <div
      style={{
        width: "170px",
        flexShrink: 0,
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
        }}
      />

      <p
        style={{
          marginTop: "5px",
          fontSize: "20px",
          color: "#444",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default Card;