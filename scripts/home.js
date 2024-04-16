function home(data) {
  let { name, description } = data;
  const title = document.querySelector('#name');
  const desc = document.querySelector('#description');
  title.innerHTML = name;
  desc.innerHTML = description;
}