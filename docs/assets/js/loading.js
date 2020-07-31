bg = document.getElementById('loading_bg'),
  loading = document.getElementById('loading');

window.addEventListener('load', stopload);

setTimeout('stopload()', 10000);

function stopload() {
  bg.classList.add('fadeout_bg');
  loading.classList.add('fadeout_loading');
}