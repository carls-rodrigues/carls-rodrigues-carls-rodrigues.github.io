import jsyaml from 'js-yaml'

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
async function loadYAML(language: string) {
  const data = await fetch(`./assets/config/config-${language}.yaml`)
    .then(response => response.text())
    .then(yamlData => {
      const data = jsyaml.load(yamlData);
      return data
    })
    .catch(error => console.error('Error fetching YAML file:', error));
  return data
}

(async function () {
  const language = loadCurrentLanguage();
  const current_url = window.location.pathname;
  const data = await loadYAML(language);
  switch (current_url) {
    case '/':
      window.location.href = '/index.html';
      break;
    case '/index.html':
      home(data);
      break;
    case '/about.html':
      aboutMePage(data['about-page']);
    default:
      break;
  }
  buildMenu(data, language);
})()