document.addEventListener('DOMContentLoaded', () => {
  /* ===== ПЛАВНЫЙ СКРОЛЛ ДЛЯ КНОПОК ===== */
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scroll');
      const target = document.getElementById(targetId);

      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  /* ===== ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРЕЙ В ШАПКЕ ===== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);

      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.ymaps) {
    ymaps.ready(initMap);
  }
});

function initMap() {
  const coords = [56.5213094, 84.9731547]; // Ленская 31

  const map = new ymaps.Map('yandex-map', {
    center: coords,
    zoom: 17,
    controls: [],
  });

  map.behaviors.disable(['scrollZoom']);

  const placemark = new ymaps.Placemark(
    coords,
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-marker.png', // твой маркер
      iconImageSize: [36, 36],
      iconImageOffset: [-18, -36],
    }
  );

  map.geoObjects.add(placemark);

  // ➜ клик по карте → открыть в Яндекс.Картах
  map.events.add('click', () => {
    window.open(
      'https://yandex.ru/maps/?pt=84.952000,56.475000&z=17&l=map',
      '_blank'
    );
  });
}
