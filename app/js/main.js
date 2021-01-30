var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
});

//фильтрация
const filterBox = document.querySelectorAll(".portfolio__item");

document
  .querySelector(".portfolio__filter")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["f"];

    filterBox.forEach((elem) => {
      elem.classList.remove("portfolio__item--hide");
      if (!elem.classList.contains(filterClass) && filterClass !== "all") {
        elem.classList.add("portfolio__item--hide");
      }
    });
  });

// карта
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 16,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(50.03134760058979, 36.22320154024285), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [{ saturation: "-100" }],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          { saturation: -100 },
          { lightness: 65 },
          { visibility: "on" },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          { saturation: -100 },
          { lightness: "50" },
          { visibility: "simplified" },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: "-100" }],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [{ lightness: "30" }],
      },
      {
        featureType: "road.local",
        elementType: "all",
        stylers: [{ lightness: "40" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ saturation: -100 }, { visibility: "simplified" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [{ lightness: -25 }, { saturation: -100 }],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.03134760058979, 36.22320154024285),
    map: map,
    title: "Snazzy!",
  });
}

// бургер меню
const menuNav = document.querySelector(".menu__nav");
const menuBurger = document.querySelector(".menu__burger");

menuBurger.addEventListener("click", () => {
  menuNav.classList.toggle("menu__nav--active");
});
