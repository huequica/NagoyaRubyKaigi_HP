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
import huequica_icon from './assets/huequica.png'
import pepabo        from './assets/pepabo.png'
import esm           from './assets/ESM.png'
import misoca        from './assets/misoca.png'
import ateam         from './assets/ateam.png'
import stmn          from './assets/stmn.svg'
import kurusugawa    from './assets/Kurusugawa-Densan.png'
import sansan        from './assets/sansan.png'


let event_logo_img = document.createElement('img')
event_logo_img.src = event_logo
document.getElementById('Event-Logo').appendChild(event_logo_img)

//特別講演欄アイコン
let icon = document.createElement('img')
icon.src = huequica_icon
document.getElementById('icon1').appendChild(icon)

//スポンサーロゴ
let esm_img = document.createElement('img')
esm_img.src = esm
esm_img.className = 'sponsors'
document.getElementById('esm').appendChild(esm_img)

let pepabo_img = document.createElement('img')
pepabo_img.src = pepabo
pepabo_img.className = 'sponsors is-pepabo'
document.getElementById('pepabo').appendChild(pepabo_img)

let misoca_img = document.createElement('img')
misoca_img.src = misoca
misoca_img.className = 'sponsors'
document.getElementById('misoca').appendChild(misoca_img)

let ateam_img = document.createElement('img')
ateam_img.src = ateam
ateam_img.className = 'sponsors'
document.getElementById('ateam').appendChild(ateam_img)

let stmn_img = document.createElement('img')
stmn_img.src = stmn
stmn_img.className = 'sponsors is-stmn'
document.getElementById('stmn').appendChild(stmn_img)

let kurusugawa_img = document.createElement('img')
kurusugawa_img.src = kurusugawa
kurusugawa_img.className = 'sponsors'
document.getElementById('kurusugawa-densan').appendChild(kurusugawa_img)

let sansan_img = document.createElement('img')
sansan_img.src = sansan
sansan_img.className = 'sponsors'
document.getElementById('sansan').appendChild(sansan_img)
