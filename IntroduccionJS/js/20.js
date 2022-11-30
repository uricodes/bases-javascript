//Metodos de propiedad
  const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción: ${id}`);
        },//reproducir
    pausar : function(){
        console.log(`...Pausando`);
        },//pausar
    crearPlaylist : function(id){
        console.log(`Creando la Playlist: ${id}`)
        },//crearPlaylist
    reproducirPlaylist : function(id){
        console.log(`Reproduciendo la Playlist: ${id}`)
        }//reproducirPlaylist
}//reproductor

//El usuario realiza acciones
reproductor.reproducir(1500);//Dentro de los parentesis va la accion del usuario
reproductor.pausar();
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");

//Creando un elemento nuevo al objeto
reproductor.borrarPlaylist = function(id){
        console.log(`Se ha borrado la Playlist: ${id}`);
}

reproductor.borrarPlaylist(20);

console.log(reproductor);