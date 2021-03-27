import picture from "./picture.jpg";

function Image() {
  const styling = {
    marginBottom: "25px",
    // float: "left",
    height: "auto",
    width: "auto",
    maxHeight: "450px",
    maxWidth: "auto",
  };
  return (
    <div className="picture img-fluid ">
      <img src={picture} style={styling} id="picture" alt="picture" />
    </div>
  );
}

export default Image;
