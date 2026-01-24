

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {

  if (clear) parentElement.innerHTML = '';

  const htmlItems = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlItems.join(''));
}



export function renderWithTemplate(template, parentElement, callback, data) {
  const htmlItems = template;
  parentElement.innerHTML = htmlItems

  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const result = await fetch(path);
  const template = await result.text();
  return template
}

export async function loadHeaderFooter(callback) {
  const headerElement = document.getElementById("main-divider")
  const footerElement = document.getElementById("lower-divider")

  const headerTemplate = await loadTemplate("../public/partials/header.html")
  const footerTemplate = await loadTemplate("../public/partials/footer.html")

  renderWithTemplate(headerTemplate, headerElement, callback, null)
  renderWithTemplate(footerTemplate, footerElement)
}

export function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}