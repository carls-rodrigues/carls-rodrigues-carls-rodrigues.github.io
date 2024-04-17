import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import jsyaml from 'js-yaml'
import AboutMe from "../pages/about";

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
  const path = `../config/config-${language}.yaml`
  const data = await fetch(path)
    .then(response => response.text())
    .then(yamlData => {
      const data = jsyaml.load(yamlData);
      return data
    })
    .catch(error => console.error('Error fetching YAML file:', error));
  return data
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const data = await loadYAML(loadCurrentLanguage())
      return data 
    },
  },
  {
    path: "about",
    element: <AboutMe />,
    loader: async () => await loadYAML(loadCurrentLanguage()),
  },
  {
    path: "/blog",
    element: <Home />,
    loader: async () => await loadYAML(loadCurrentLanguage()),
  }
]);
export default router;