require('./main.scss');


import huequica_icon from './assets/huequica.png'
import pepabo        from './assets/pepabo.png'
import esm           from './assets/ESM.png'
import misoca        from './assets/misoca.png'
import ateam         from './assets/ateam.png'
import stmn          from './assets/stmn.svg'
import kurusugawa    from './assets/Kurusugawa-Densan.png'
import sansan        from './assets/sansan.png'

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
