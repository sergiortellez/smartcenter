/*<------------------------------------------------->
<!--	spyscroll	-->
<!-------------------------------------------------->
* Descripción:
    Función que detecta qué sección se encuentra desplegada en la pantalla y asigna la clase ".active" a su correspondiente en la barra de navegación. 
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: añade la clase ".active" al elemento de la barra de navegación que se está desplegando en la pantalla.
<!------------------------------------------------->*/


  
var section = document.querySelectorAll(".spy-scroll > section");
var sections = {};
var i = 0;
  
Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop -200;
      //el menos 200 activa la función 200 pixeles antes de llegar al objetivo.
});
  

    
window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
        if (sections[i] <= scrollPosition) {

            try {
                document.querySelector('.active').setAttribute('class', ' ');
              } catch (error) {
                console.error(error);
              }
              
            
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
          }
    }
}
       
/*<!------------------------------------------------->
<!--	end spyscroll	-->
<!------------------------------------------------->*/