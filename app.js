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