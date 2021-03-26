async function getRepos() {
  const projects = await fetch("https://api.github.com/users/Gio86krt/repos");

  return projects;
}

export default getRepos;
