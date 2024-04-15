function copiar(){
    var origen = document.getElementById('target1');
    var destino = document.getElementById('target2');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
  }

window.addEventListener('scroll', function() {
    document.querySelectorAll('.section-fade-in').forEach(function(section) {
        var top_of_element = section.offsetTop;
        var bottom_of_element = section.offsetTop + section.offsetHeight;
        var bottom_of_screen = window.pageYOffset + window.innerHeight;
        var top_of_screen = window.pageYOffset;

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // la sección está en la vista
            section.classList.remove('fade-out');
        } else {
            // la sección no está en la vista
            section.classList.add('fade-out');
        }
    });
});