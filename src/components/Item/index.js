import { Link } from "react-router-dom";
import React from "react";

function Item(props) {
  const { image, name, description, url, repoLink, techUsed } = props.props;
  const styling = {
    width: "25rem",
    marginBottom: "10px",
    marginRight: "10px",
    marginTop: "15px",
    backgroundColor: "white",
    opacity: "0.9",
  };

  let html = "";

  console.log(image);
  return (
    <div className="col-12" style={styling}>
      <img
        style={{ border: "solid lightgrey" }}
        src={window.location.origin + image}
        className="card-img-top"
        alt="project screenshot"
      />
      <div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <br></br>
          <ul className="card-title">
            <span
              style={{
                fontSize: "19px",
                fontWeight: "bold",
              }}
            >
              Technologies Used:
            </span>
            {techUsed.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
          <br></br>
          {/* <div style={{ position: "relative", top: "50px" }}> */}
          <a href={url} target="_blank" className="btn btn-success btn-sm">
            Try it!
          </a>
          <a href={repoLink} target="_blank" className="btn btn-primary btn-sm">
            Go to Repository
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
