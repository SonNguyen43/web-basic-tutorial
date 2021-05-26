function inputActive(parent, child, event) {
  document.querySelector(child).addEventListener(event, (e) => {
    document.querySelector(parent).classList.add("input-active");
  });
}

function inputUnActive(parent, child, event) {
  document.querySelector(child).addEventListener(event, (e) => {
    document.querySelector(parent).classList.remove("input-active");
  });
}

// input 1
inputActive(".navbar__search-input--1", ".navbar__search-input--1-text", "focus");
inputUnActive(".navbar__search-input--1", ".navbar__search-input--1-text", "focusout");

// input 2

inputActive(".navbar__search-input--2", ".navbar__search-input--2-date", "mouseover");
inputUnActive(".navbar__search-input--2", ".navbar__search-input--2-date", "mouseout");

// input 3
inputActive(".navbar__search-input--3", ".navbar__search-input--3-number", "mouseover");
inputUnActive(".navbar__search-input--3", ".navbar__search-input--3-number", "mouseout");
