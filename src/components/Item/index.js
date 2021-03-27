import { Link } from "react-router-dom";
import React from "react";

function Item(props) {
  const { image, name, description, url, repoLink } = props.props;
  const styling = {
    width: "25rem",
    marginBottom: "10px",
    marginRight: "10px",
    marginTop: "15px",
    backgroundColor: "white",
    opacity: "0.9",
  };

  const styleImg = {
    src: 'url(" ' + image + ' ")',
  };

  console.log(image);
  return (
    <div className="col-12" style={styling}>
      <img style={styleImg} className="card-img-top" alt="project screenshot" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" className="btn btn-success btn-sm">
          Try it!
        </a>
        <a href={repoLink} target="_blank" className="btn btn-primary btn-sm">
          Go to Repository
        </a>
      </div>
    </div>
  );
}

export default Item;
