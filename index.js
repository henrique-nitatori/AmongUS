function createStarts() {
    for(var i = 0; i < 100 ; i++) {
    var stars =  document.createElement("div")
    var container = document.getElementById('container')
    var starsLength = Math.random() * (6 - 1) + 1;
    var starsHeightPosition = Math.random() * (container.offsetHeight - 1) + 1;
    var starsWidthPosition = Math.random() * (container.offsetWidth - 1) + 1;
    stars.style.top= starsHeightPosition + 'px'
    stars.style.left= starsWidthPosition + 'px';
    stars.style.width= starsLength + "px";
    stars.style.height= starsLength + "px";
    stars.style.borderRadius= "50%";
    stars.style.position= "absolute";
    stars.style.background="#FFF"
    stars.style.zIndex= "-1"
    container.appendChild(stars)
    }
}
createStarts()
const titulo = document.getElementById('title');

function typeWrite(elemento){
    elemento.className = 'show'
    var textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)
  });
  textoArray= []

}
setInterval(function(){
    setTimeout(function(){
        typeWrite(titulo);
    })
}, 7000)

