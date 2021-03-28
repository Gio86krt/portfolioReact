import picture from "./picture.jpg";

function Image() {
  const styling = {
    marginBottom: "25px",
    marginLeft: "38%",
    height: "auto",
    width: "auto",
    maxHeight: "300px",
    maxWidth: "auto",
  };
  return (
    <div className="picture img-fluid ">
      <img src={picture} style={styling} id="picture" alt="picture" />
    </div>
  );
}

export default Image;
