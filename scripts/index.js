function loadCurrentLanguage() {
  const lang = localStorage.getItem('language');
  if (!lang) {
    localStorage.setItem('language', 'en');
    return 'en';
  }
  if (lang !== 'pt' && lang !== 'en') {
    localStorage.setItem('language', 'en');
    return 'en';
  }
  return lang;
}
async function loadYAML() {
  const data = await fetch('./assets/config/config.yaml')
    .then(response => response.text())
    .then(yamlData => {
      const data = jsyaml.load(yamlData);
      return data
    })
    .catch(error => console.error('Error fetching YAML file:', error));
  return data
}

function home(data, language) {
  let name = data?.name;
  let description = data?.description;
  const title = document.querySelector('#name');
  const desc = document.querySelector('#description');
  title.innerHTML = name;
  desc.innerHTML = description;
}

(async function () {
  const language = loadCurrentLanguage();
  const current_url = window.location.pathname;
  const data = await loadYAML();
  switch (current_url) {
    case '/':
      window.location.href = '/index.html';
      break;
    case '/index.html':
      home(data, language);
      break;
    default:
      break;
  }
  buildMenu(data, language);
})()