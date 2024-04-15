function buildMenu(data, language) {
  let menu = document.querySelector("#menu");
  let langSelector = document.querySelector("#language");
  let flagIcon = document.createElement("img");
  if (language === "en") {
    flagIcon.src = "/assets/svg/usa.svg";
  } else {
    flagIcon.src = "/assets/svg/brazil.svg";
  }
  langSelector.appendChild(flagIcon);

  const menuMap = data[`menu-${language}`]
  let menuList = document.createElement("ul");
  const current_url = window.location.pathname;
  for (const [key, value] of Object.entries(menuMap)) {
    let menuItem = document.createElement("li");
    let menuLink = document.createElement("a");
    if (key === "curriculum vitae") {
      menuLink.href = value;
      menuLink.setAttribute("target", "_blank")
    } else {
      menuLink.href = value.toLowerCase() + ".html";
    }
    if (current_url.includes(value)) {
      continue;
    }
    menuLink.textContent = key;
    menuItem.appendChild(menuLink);
    menuList.appendChild(menuItem);
    if (current_url.includes(value)) {
      console.log("Current URL: ", current_url);
    }
  }
  menu.appendChild(menuList);
}
function switchLanguage() {
  let language = localStorage.getItem("language");
  if (language === "en") {
    localStorage.setItem("language", "pt");
  } else {
    localStorage.setItem("language", "en");
  }
  location.reload();
}