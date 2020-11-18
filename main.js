const HOME_PAGE = "home";
const NEWS_PAGE = "news";
const ABOUT_PAGE = "about";
const PRODUCTS_PAGE = "products";
const PRODUCT_VIEW_PAGE = "product-view";
const CHECKOUT_PAGE = "checkout";
const CONTACT_PAGE = "contact";
const SUCCESS_PAGE = "success";

function resetActiveSection() {
  document.getElementById(HOME_PAGE).style.display = "none";
  document.getElementById(NEWS_PAGE).style.display = "none";
  document.getElementById(ABOUT_PAGE).style.display = "none";
  document.getElementById(PRODUCTS_PAGE).style.display = "none";
  document.getElementById(PRODUCT_VIEW_PAGE).style.display = "none";
  document.getElementById(CHECKOUT_PAGE).style.display = "none";
  document.getElementById(CONTACT_PAGE).style.display = "none";
  document.getElementById(SUCCESS_PAGE).style.display = "none";
}

function setActiveNav(current) {
  if (current === "" || current === HOME_PAGE) return;
  var menuItems = document.querySelectorAll(".menu-header a");
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].className.indexOf("active") !== -1) {
      menuItems[i].className = "";
    }

    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].className = "active";
    }
  }
}

function hashHandler() {
  resetActiveSection();

  if (window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

    var el = document.getElementById(hash);

    if (el != null) {
      el.style.display = hash === "products" ? "flex" : "block";
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNav(hash);
    }
  } else {
    var el = document.getElementById(HOME_PAGE);
    el.style.display = "block";
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

hashHandler();

//Listeners
window.addEventListener("hashchange", hashHandler, false);
