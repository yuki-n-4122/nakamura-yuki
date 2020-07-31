includeComponent("/components/header.html", document.getElementById("header_include"));
includeComponent("/components/footer.html", document.getElementById("footer_include"));
function includeComponent(url, element) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      element.insertAdjacentHTML('beforeend', xhr.responseText);
    }
  };
  xhr.send();
}
