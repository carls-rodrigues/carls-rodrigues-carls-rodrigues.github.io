function aboutMePage(data) {
  if (!data) return;
  let { name, short_biography } = data;
  let queryName = document.querySelector('#about-name-id');
  let queryBiography = document.querySelector('#about-biography-id');
  queryName.innerHTML = name;
  queryBiography.innerHTML = short_biography;
  buildUserInfo(data.user_info);
  appendSection('education', 'Education', data.education)
  appendSection('work', 'Work experience', data.work)
  appendSection('publication', 'Publications', data.publications)
  appendSection('awards', 'Awards', data.awards)
  appendSection('teaching', 'Teaching', data.teaching)
  appendSection('services_and_leadership', 'Service and Leadership', data.service_and_leadership)
  appendSection('skills', 'Skills', data.skills)

}
function appendSection(id, sectionTitle, data) {
  if (!data) return;
  let parent = document.querySelector(`#${id}`);
  if (!parent) return;
  let parentTitle = document.createElement('h1');
  parentTitle.setAttribute('class', 'about-section-title');
  parentTitle.innerHTML = sectionTitle;
  parent.appendChild(parentTitle);
  let ulElement = document.createElement('ul');
  data?.forEach(el => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = `${el.title}`;
    li.appendChild(span);
    if (el.bullets?.length) {
      let ul = document.createElement('ul');
      el.bullets.forEach(bullet => {
        let liBullet = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = bullet;
        liBullet.appendChild(span);
        ul.appendChild(liBullet);
      })
      li.appendChild(ul);
    }
    ulElement.appendChild(li);
  })
  parent.appendChild(ulElement);

}
function buildUserInfo(data) {
  if (!data) return;
  let menuQuery = document.querySelector('#menu-left');
  let ulElement = document.createElement('ul');
  data.forEach(el => {
    let li = document.createElement('li');
    let icon = document.createElement('img')
    let span = document.createElement('span');
    let anchor = document.createElement('a');
    icon.setAttribute('src', icons[el.title.toLowerCase()]);
    icon.setAttribute('alt', el.title);
    li.appendChild(icon);
    if (el.title === 'Location') {
      span.innerHTML = el.title;
      li.appendChild(span);
    } else {
      anchor.setAttribute('href', el.link);
      anchor.setAttribute('target', '_blank');
      anchor.innerHTML = el.title;
      li.appendChild(anchor);
    }
    ulElement.appendChild(li);
  })
  menuQuery.appendChild(ulElement);

}