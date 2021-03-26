import API from "../../API/API";
import projects from "../../Utils/GlobalStorage";

async function Portfolio() {
  //   const projects = await API().then((res) => res.json());

  projects.map((el) => {
    console.log(el.name, el.url);
  });
  return <div></div>;
}

export default Portfolio;
