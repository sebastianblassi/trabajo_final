/* Mayor/Menor de edad */

const edadUsuario = prompt("Cuantos años tenes?");
if(edadUsuario >= 18) {
    alert("Bienvenido a Motorcycle Rental!");
}else {
    alert("Sos menor de edad estas ingresando bajo tu responsabilidad");
}

/* gotop */

window.onscroll = function (){
    if(document.documentElement.scrollTop > 100) {15
      document.querySelector('.go-top-container')
      .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

});