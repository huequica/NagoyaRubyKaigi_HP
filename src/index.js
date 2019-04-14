require('./main.scss');

const MobileDetect = require('mobile-detect');

document.addEventListener('DOMContentLoaded', (event) => {
  const md = new MobileDetect(navigator.userAgent);
  if (md.mobile()) {
    document.querySelectorAll('.Mobile_br').forEach((item) => {
      item.insertAdjacentHTML('afterbegin', '<br>');
    })
  }
});

