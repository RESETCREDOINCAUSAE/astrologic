  // Crear un objeto:
// BASE DE DATOS  ASTROLOGICK (LATIN) -- FRASES FAMOSAS
const frase1 =
{ 
Id : "1",
Español:"Siempre lo mismo",
 Latin: "Serpem idem",
  Sonido:  new Audio('AUDIOS/audio1.mp3')
}
;
const frase2 =
{
Id : "2",
Español:"Donde hay unidad, hay victoria.",
 Latin: "Ubi concordia, ibi Victoria. ",
  Sonido:  new Audio('AUDIOS/audio2.mp3')
}

;
const frase3 =
{
Id : "3",
Español:"Las macetas vacias son las que hacen más ruido",
 Latin: "Vasa vana plurimum sonant. ",
  Sonido:  new Audio('AUDIOS/audio3.mp3')
}

;
const frase4 =
{
Id : "4",
Español:" El destino guía a los que están dispuestos y arrastra a los que no lo están.",
 Latin: "Fata volentem ducunt, nolentem trahunt. (Séneca)",
  Sonido:  new Audio('AUDIOS/audio4.mp3')
}

;
const frase5 =
{
Id : "5",
Español:"El que calla otorga su consentimiento.",
 Latin: "Qui tacet consentire. ",
  Sonido:  new Audio('AUDIOS/audio5.mp3')
}

;
const frase6 =
{
Id : "6",
Español:"Por el sendero áspero, a las estrellas.",
 Latin: "Ad astra per aspera.",
  Sonido:  new Audio('AUDIOS/audio6.mp3')
}

;
const frase7 =
{
Id : "7",
Español:"Vivamos, ya que vamos a morir.",
 Latin: "Vivamus, Moriendum Est. ",
  Sonido:  new Audio('AUDIOS/audio7.mp3')
}

;
const frase8 =
{
Id : "8",
Español:"Atrévete a saber",
 Latin: "Sapere aude.",
  Sonido:  new Audio('AUDIOS/audio8.mp3')
}

;
const frase9 =
{
Id : "9",
Español:"Las palabras dichas se vuelan, las escritas permanecen.",
 Latin: "Verba volant, scripta manent. ",
  Sonido:  new Audio('AUDIOS/audio9.mp3')
}

;
const frase10 =
{
Id : "10",
Español:"La riqueza material no es la única que vale.",
 Latin: "Divitae bonum non sunt. (Séneca)",
  Sonido:  new Audio('AUDIOS/audio10.mp3')
}

;
const frase11 =
{
Id : "11",
Español:" Los viejos hábitos son difíciles de matar.",
 Latin: "Consuetudinis magna vis est. (Cicerón)",
  Sonido:  new Audio('AUDIOS/audio11.mp3')
}

;



 //  FIN DE LOS OBJETOS ( OBJETOS SE REFIERE A TODOS LOS LIBROS EN ESTE CASO)

 const verbo1 =
 { 
 Id : "1",
 Español:"Ser o Estar",
  Latin: "SUM",
   Sonido:  new Audio('AUDIOS/verbo1.mp3')
 }
 ;

//  FIN DE LOS OBJETOS ( OBJETOS SE REFIERE A TODOS LOS LIBROS EN ESTE CASO)
/*
const fraseX =
{
Id : "X",
Español:"Las macetas vacias son las que hacen más ruido",
 Latin: "Vasa vana plurimum sonant. ",
  Sonido:  new Audio('AUDIOS/audioX.mp3')
}

;
*/

 // DECLARACIÒN DE VARIABLES Y RELACIÒN CON ETIQUETAS HTML QUE MUESTRAN LAS CONSULTAS 
 // SELECCIONAR ES IGUAL A ETIQUETA  HTML SELECT

   // ESPAÑOL ES IGUAL A ID español
 let español = document.getElementById("español") ;

 let seleccionar =  document.getElementById('SELECTOR') ;


    // LATIN ES IGUAL A ID latin
 let latin = document.getElementById("latin")  ;

    // CUANDO SE DE CLICK EN LA ETIQUETA SELECT HTML POR ENDE ACTIVA VARIABLE SELECCIONAR 
    // ACTIVA LA FUNCIÒN ESTABLECER ELECCIÒN 
    // HTML DOM FUNCIÒN ONCHANGE EN SELECT
 seleccionar.addEventListener('change', establecerEleccion);
 
 

 //FUNCIÒN QUE SEGUN LA ELECCIÒN DE LA ETIQUETA SELECT MUESTRA UN OBJETO DETERMINADO

 function establecerEleccion() {
   // VARIABLE ELECCION ES IGUAL A  EL VALOR DE LA VARIABLE SELECCIONAR
   //SI ELECCION ES IGUAL A UN NÙMERO X DA UNA SALIDA DE UN OBJETO RELACIONADO A ESTE.
   // AQUI SE DEFINE QUE DATOS DEL OBJETO SE REQUIEREN MOSTRAR

   let eleccion = seleccionar.value;
  

   if (eleccion === '01') {
     español.textContent =   frase1["Español"];
 latin.textContent=  frase1["Latin"];
 frase1.Sonido.play();
 music.loop = false;
 music.playbackRate = 1;
 

 } 
 else if (eleccion === '02') {
    
    español.textContent =   frase2["Español"];
    latin.textContent=  frase2["Latin"];
    frase2.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '03') {
    
    español.textContent =   frase3["Español"];
    latin.textContent=  frase3["Latin"];
    frase3.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '04') {
    
    español.textContent =   frase4["Español"];
    latin.textContent=  frase4["Latin"];
    frase4.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '05') {
    
    español.textContent =   frase5["Español"];
    latin.textContent=  frase5["Latin"];
    frase5.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '06') {
    
    español.textContent =   frase6["Español"];
    latin.textContent=  frase6["Latin"];
    frase6.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '07') {
    
    español.textContent =   frase7["Español"];
    latin.textContent=  frase7["Latin"];
    frase7.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '08') {
    
    español.textContent =   frase8["Español"];
    latin.textContent=  frase8["Latin"];
    frase8.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '09') {
    
    español.textContent =   frase9["Español"];
    latin.textContent=  frase9["Latin"];
    frase9.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '10') {
    
    español.textContent =   frase10["Español"];
    latin.textContent=  frase10["Latin"];
    frase10.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }
 else if (eleccion === '11') {
    
    español.textContent =   frase11["Español"];
    latin.textContent=  frase11["Latin"];
    frase11.Sonido.play();
    music.loop = false;
    music.playbackRate = 1;
    
 }



    else {
     español.textContent = '';
     latin.textContent= '';
 
     
   }
 }
 
// funcion 2 variables

 let español2 = document.getElementById("español2") ;

 let seleccionar2 =  document.getElementById('SELECTOR2') ;

 let latin2 = document.getElementById("latin2")  ;


 seleccionar2.addEventListener('change', establecerEleccion2);
 function establecerEleccion2() {
    // VARIABLE ELECCION ES IGUAL A  EL VALOR DE LA VARIABLE SELECCIONAR
    //SI ELECCION ES IGUAL A UN NÙMERO X DA UNA SALIDA DE UN OBJETO RELACIONADO A ESTE.
    // AQUI SE DEFINE QUE DATOS DEL OBJETO SE REQUIEREN MOSTRAR
 
    let eleccion2 = seleccionar2.value;
 
    if (eleccion2 === '01') {
      español2.textContent =   verbo1["Español"];
  latin2.textContent=  verbo1["Latin"];
  frase1.Sonido.play();
  music.loop = false;
  music.playbackRate = 1;
  
 
  } 
  else if (eleccion2 === '02') {
     
     español2.textContent =   verbo2["Español"];
     latin2.textContent=  verbo2["Latin"];
     frase2.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '03') {
     
     español2.textContent =   verbo3["Español"];
     latin2.textContent=  verbo3["Latin"];
     frase3.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '04') {
     
     español2.textContent =   verbo4["Español"];
     latin2.textContent=  verbo4["Latin"];
     frase4.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '05') {
     
     español2.textContent =   frase5["Español"];
     latin2.textContent=  frase5["Latin"];
     frase5.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '06') {
     
     español2.textContent =   frase6["Español"];
     latin2.textContent=  frase6["Latin"];
     frase6.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '07') {
     
     español2.textContent =   frase7["Español"];
     latin2.textContent=  frase7["Latin"];
     frase7.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '08') {
     
     español2.textContent =   frase8["Español"];
     latin2.textContent=  frase8["Latin"];
     frase8.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '09') {
     
     español2.textContent =   frase9["Español"];
     latin2.textContent=  frase9["Latin"];
     frase9.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '10') {
     
     español2.textContent =   frase10["Español"];
     latin2.textContent=  frase10["Latin"];
     frase10.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
  else if (eleccion2 === '11') {
     
     español2.textContent =   frase11["Español"];
     latin2.textContent=  frase11["Latin"];
     frase11.Sonido.play();
     music.loop = false;
     music.playbackRate = 1;
     
  }
 
 
 
     else {
      español2.textContent = '';
      latin2.textContent= '';
  
      
    }
  }
  
 // ESTE SISTEMA FUE REALIZADO POR WILLIAM RATIVA DEL COLECTIVO CREDO IN CAUSAE
 //                  2022 TODOS LOS DERECHOS RESERVADOS
 