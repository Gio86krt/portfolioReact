import projects from "../../Utils/GlobalStorage";
import Item from "../Item";

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        {projects.map((el) => {
          return <Item props={el} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
