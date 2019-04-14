require('./main.scss');
var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
})();

if(getDevice == "sp" || getDevice == "tab"){

  let mobile_br = document.createElement('br')
  let tags = document.getElementsByClassName('Mobile_br')
  tags = Array.prototype.slice.call(tags)
  //配列に強制変換
  tags.forEach(function(item){
    //console.log(item);
    item.insertAdjacentHTML('afterbegin','<br>');
  })

}

import event_logo    from './assets/Event_Logo.png'


let event_logo_img = document.createElement('img')
event_logo_img.src = event_logo
document.getElementById('Event-Logo').appendChild(event_logo_img)
