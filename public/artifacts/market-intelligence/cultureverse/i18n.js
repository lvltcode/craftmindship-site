/* global i18n_en, i18n_vi */
const i18n = { en: i18n_en, vi: i18n_vi };

function setLang(lang) {
  var s = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    if (s && s[k] !== undefined) el.textContent = s[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-html');
    if (s && s[k] !== undefined) el.innerHTML = s[k];
  });
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
  sessionStorage.setItem('lang_' + location.pathname, lang);
}

var _sl = sessionStorage.getItem('lang_' + location.pathname);
if (_sl && _sl !== 'en') setLang(_sl);
