require('./main.scss');

const MobileDetect = require('mobile-detect');

import event_logo from './assets/Event_Logo.png'

document.addEventListener('DOMContentLoaded', (event) => {
  const md = new MobileDetect(navigator.userAgent);
  if (md.mobile()) {
    document.querySelectorAll('.Mobile_br').forEach((item) => {
      item.insertAdjacentHTML('afterbegin', '<br>');
    })
  }

  let event_logo_img = document.createElement('img')
  event_logo_img.src = event_logo
  document.getElementById('Event-Logo').appendChild(event_logo_img)
});

