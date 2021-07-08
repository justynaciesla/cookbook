import React from "react";

const SingleRecipe = ({
  location: {
    state: { id, title, image, readyInMinutes, servings },
  },
}) => {
  return (
    <div>
      <h1>Single Recipe View</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          verticalAlign: "middle",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "400px", height: "400px", marginRight: "50px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            width: "400px",
            height: "400px",
          }}
        >
          <h2 style={{ marginBottom: "20px", textAlign: "justify" }}>
            {title}
          </h2>
          <h3 style={{ marginBottom: "10px" }}>Servings: {servings}</h3>
          <h4 style={{ marginBottom: "10px" }}>
            Ready in {readyInMinutes} min.
          </h4>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            officia vel voluptatibus aliquid nihil provident asperiores unde.
            Voluptates totam neque eum quaerat rem ab ad distinctio fugit
            maiores quos! Dolorem, a sequi. Ut expedita magni quos ullam facilis
            cumque libero exercitationem repudiandae aliquid at impedit eius
            quidem, illo nulla, incidunt et voluptas repellat laboriosam
            recusandae quia! Quae quaerat laboriosam cupiditate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
