var load_html = function(id){
  var xhttp = new XMLHttpRequest(),
      el = document.getElementById(id),
      script = undefined,
      status = 0;

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      script = document.createElement('script');
      script.src = '../js/views/' + id + '.js';

      el.appendChild(script);
      el.outerHTML = xhttp.responseText;
    }
  }

  try {
    xhttp.open("GET", '../../html/' + id + '.html', true);
    xhttp.send();
  } catch(err) {console.log(err);}
}//end load_html
