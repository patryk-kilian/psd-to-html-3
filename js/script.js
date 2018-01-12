(function() {

  //MENU ON SCROLL TOGGLE CODE

  const menu = document.querySelector('.navigation');

  window.addEventListener('scroll', function() {

    if (scrollY > 150) {
      menu.classList.add('navigation--scroll');
    } else {
      menu.classList.remove('navigation--scroll');
    }

  });

  //HAMBURGER BUTTON

  const hamburgerButton = document.querySelector('.hamburger-button');
  const hamburgerIcon = document.querySelector('.hamburger-button__icon');
  const navigationList = document.querySelector('.navigation__list');

  hamburgerButton.addEventListener('click', function() {
    hamburgerIcon.classList.toggle('hamburger-button__icon--open');
    navigationList.classList.toggle('navigation__list--active');
  });
  //SECTION SERVICE EXPAND BOXES CODE

  const expandButton = Array.from(document.querySelectorAll('#js-service-button'));
  const serviceDescription = Array.from(document.querySelectorAll('.service__description'));
  const serviceIcon = Array.from(document.querySelectorAll('#js-service-icon'));

  const toggleDescription = function(index) {

    for(let i = 0;i < serviceDescription.length; i++) {
      if (serviceDescription[i].classList.contains('open')) {
        serviceDescription[i].classList.remove('open');
        serviceDescription[index].classList.add('open');
      }
    }

  }

  const toggleIcon = function(index) {
    for(let i = 0;i < serviceIcon.length; i++) {
      if (serviceIcon[i].classList.contains('ion-chevron-up')) {
        serviceIcon[i].classList.remove('ion-chevron-up');
        serviceIcon[i].classList.add('ion-chevron-down');
        serviceIcon[index].classList.add('ion-chevron-up');
      }
    }
  }

  expandButton.forEach(function(el, index) {
    el.addEventListener('click', function() {
      serviceDescription[index].classList.toggle('open');
      serviceIcon[index].classList.toggle('ion-chevron-up');
      toggleDescription(index);
      toggleIcon(index);
    });
  });

  //// MAP TOGGLE

  const mapOpenButton = document.querySelector('.map__open-button');
  const mapContainer = document.querySelector('.map');
  const map = document.getElementById('map');

  function openMap() {
    map.style.opacity = '1';
    mapContainer.style.height = '40rem';
    map.style.zIndex = '0';
  }

  function closeMap() {
    map.style.opacity = '0';
    mapContainer.style.height = '20rem';
    map.style.zIndex = '-1';
  }

  mapOpenButton.addEventListener('click', openMap);
  map.addEventListener('mouseleave', closeMap);



})();

(function() {


  const nextFirst = document.querySelector('#js-btn-next-first');
  const prevFirst = document.querySelector('#js-btn-previous-first');
  const nextSecond = document.querySelector('#js-btn-next-second');
  const prevSecond = document.querySelector('#js-btn-previous-second');
  const quotesPrimary =  Array.from(document.querySelectorAll('#js-quote-box-primary'));
  const quotesSecondary = Array.from(document.querySelectorAll('#js-quote-box-secondary'));

  let boxFirst = {
    counter: 0,
    element: quotesPrimary,
    amount: quotesPrimary.length,
    current: quotesPrimary[0]
  };

  let boxSecond = {
    counter: 0,
    element: quotesSecondary,
    amount: quotesSecondary.length,
    current: quotesSecondary[0]
  }


    function navigate(obj, direction) {

      obj.current.classList.remove('quote__box--current');
      obj.counter = obj.counter + direction;

      if (direction === -1 && obj.counter < 0) {
        obj.counter = obj.amount - 1;
      } else if (direction === 1 && !obj.element[obj.counter]) {
        obj.counter = 0;
      }

      obj.current = obj.element[obj.counter];
      obj.current.classList.add('quote__box--current');


      };


  nextFirst.addEventListener('click', function() {
    navigate(boxFirst, 1);
  });

  prevFirst.addEventListener('click', function() {
    navigate(boxFirst, -1);
  });

  nextSecond.addEventListener('click', function() {
    navigate(boxSecond, 1);
  });

  prevSecond.addEventListener('click', function() {
    navigate(boxSecond, -1);
  });

  navigate(boxFirst, 0);
  navigate(boxSecond, 0);

})();

 ///  MAP


 function initMap() {

  const options = {
    zoom: 8,
    center: {lat: 51.1078852, lng: 17.0385376}
  };

  const map = new google.maps.Map(document.getElementById('map'), options);

}
