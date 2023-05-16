// Función que se ejecutará cada cierto intervalo de tiempo
function imprimirMensaje() {
  console.log("¡Hola! Han pasado ciertos segundos.");
}

// Intervalo de tiempo en milisegundos (ejemplo: cada 5 segundos)
var intervalo = 5000;

// Iniciar el temporizador
var temporizador = setInterval(imprimirMensaje, intervalo);

// Detener el temporizador después de cierta cantidad de tiempo (ejemplo: 30 segundos)
setTimeout(function() {
  clearInterval(temporizador);
  console.log("Temporizador detenido después de 30 segundos.");
}, 30000);



// cargarPostulantes();

async function cargarPostulantes() {

    const nomapy = []
    const votosTotales = []
    const color = []

    const i = 0;

    const row = document.querySelector(".cards_content");

    const request = await fetch('/elecciones', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    });

    const postulantes = await request.json();

    for (let postulante of postulantes) {

        const card = document.createElement('div')

        if(postulante.puesto == 1 ){

            card.className = "card l-bg-cherry puesto-1"

        }else{

            card.className = "card", "l-bg-cherry"

        }

        const imagen = document.createElement('div')
        imagen.className = "imagen"

        const card_body = document.createElement('div')


        const text_end = document.createElement('div')
        text_end.className = "text-end"

        const div = document.createElement('div')
        div.className = "p-1"

        const puesto = document.createElement('h1')
        puesto.textContent = postulante.puesto

        const body_data = document.createElement('div')
        body_data.className = "mb-2"

        const header = document.createElement('div')

        const titulo = document.createElement('h5')
        titulo.className = "card-title mb-0"
        titulo.textContent = postulante.titulo  //cambiar luego de prueba con placeHolder
        
        const body_porcentaje = document.createElement('div')

        const porcentaje = document.createElement('h3')
        porcentaje.textContent = postulante.porcentaje 

        const card_footer = document.createElement('div')

        //-----------------------------------------------

        const votos = document.createElement('h6')
        votos.textContent = postulante.votos

        const pie_card_body = document.createElement('div')

        const lista = document.createElement('h6')
        lista.textContent = postulante.lista

        const partido = document.createElement('h6')
        partido.className = "ajustes"
        partido.textContent = postulante.partido

        //partido.style.setProperty = ("margin-bottom", "0px", "important")


        const pie_card_header = document.createElement('div')

        const pie_card = document.createElement('div')
        pie_card.className = "pie-card text-start"

        //-----------------------------------------------

        const nombre = document.createElement('span')
        nombre.textContent = postulante.nomapy  //cambiar luego de prueba con placeHolder

        card_footer.append(nombre)
        body_porcentaje.append(porcentaje)

        body_data.append(titulo)
        body_data.append(body_porcentaje)
        body_data.append(card_footer)

        header.append(puesto)
        card_body.append(header)

        pie_card_body.innerHTML ='VOTOS<br>'
        pie_card_body.append(votos)

        //-----------------------------

        pie_card_header.append(partido)


        //pie_card_header.innerHTML =`${partido} + <br>`
        //pie_card_header.innerHTML = "<h6>Frente de Todos</h6>"
        pie_card_header.append(lista)

        //-----------------------------

        card.append(text_end)

        pie_card.append(pie_card_header)
        pie_card.append(pie_card_body)
        card_body.append(pie_card)

        div.append(puesto)
        div.append(body_data)
        text_end.append(div)


        card.append(imagen)
        card.append(card_body)

        row.append(card)

        //-----------------cargar la grafica--------------------


        //---------nombre-------------

        console.log(postulante.nomapy)

        nomapy.push(postulante.nomapy)

        console.log(nomapy);

        //---------votos-------------

        console.log(postulante.votos)

        votosTotales.push(postulante.votos)

        console.log(votosTotales);

        //---------color-------------

        console.log(postulante.color)
        color.push(postulante.color)



        //------------------------------------------------------

    }
        console.log("nombre");

    console.log(nomapy);
    console.log(votosTotales);

    let [otrosVotos,tipo,colo] = await cargarOtrosVotos();

    console.log("--------------------")
    console.log(otrosVotos)
    console.log(tipo)
    console.log(color)
    console.log("--------------------")

    let nom = nomapy.concat(tipo);
    let vot = votosTotales.concat(otrosVotos)
    let col = color.concat(colo)


    await cargarGrafica(nom,vot,col);


}


async function cargarOtrosVotos(){

    const request = await fetch('/elecciones/otrosVotos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    });

    const votos = await request.json();
    console.log(votos)


    let votosArray = []
    let tipoArray = []
    let color = []

    const row = document.querySelector(".cards_content_otrosVotos");


    for(let voto of votos){


        const card_content = document.createElement('div')
        card_content.className = "card-ultimos"


        const div_puesto = document.createElement('div')
        div_puesto.className = "div_puesto"

        const puesto = document.createElement('h1')
        puesto.textContent = voto.puesto

        const div = document.createElement('div')

        const tipo = document.createElement('h5')
        tipo.textContent = voto.tipo

        const div_porcentaje = document.createElement('div')
        div_porcentaje.className = "div-porcetaje"

        const porcentaje = document.createElement('h4')
        porcentaje.textContent = voto.porcentaje + "%"

        const votoParrafo = document.createElement('p')
        votoParrafo.textContent = voto.voto + " VOTOS"

        div_porcentaje.append(porcentaje)
        div_porcentaje.append(votoParrafo)

        div.append(tipo)

        div_puesto.append(puesto)

        card_content.append(div_puesto)
        card_content.append(div)
        card_content.append(div_porcentaje)

        row.append(card_content)

        votosArray.push(voto.voto)
        tipoArray.push(voto.tipo)
        color.push(voto.color)

    }

    console.log("votosArray")

    console.log(votosArray)



    /*

         <div>cards_content_otrosVotos

          <div class="card-ultimos">

            <div class="div_puesto">
              <h1>9°</h1>
            </div>
            <div>
              <h5>Votos nulo</h5>
            </div>
            <div class="div-porcetaje">
              <h4>12.32%</h4>
              <p>312 votos</p>
            </div>
          </div>

    */


    return [votosArray,tipoArray,color];

}

async function cargarGrafica(nombre,votos,color){

//['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto']
//[25, 20, 15, 10, 5, 1]


    const ctx = document.getElementById('grafica-pastel');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: nombre,
        datasets: [{
          label: 'Votos',
          data: votos,
          // hoverOffset: 15,
          borderWidth: 1,
          backgroundColor:color
          // spacing: "10px"
        }]
      },
      options: {
        plugins: {
          legend: { position: 'right' }
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
            }
          }]
        }
      }
    });

}


/*

<div class="pie-card text-start">
            <div>
              <h6>
                Frente de todos
                <br>
                501
              </h6>
            </div>
            <br>
            <div>
              <h6>
                VOTOS
                <br>
                327804
              </h6>

            </div>
          </div>









    spinner.style.display = "block";

            //mascota.nombre,mascota.edadMascota,mascota.tipoAnimal,mascota.sexo,mascota.tamanioMascota,mascota.usuario,mascota.descripcion,mascota.foto

        const col = document.createElement('div')
        col.className ="col"
        col.setAttribute("data-aos","fade-up") //efecto de las cards

        const card = document.createElement('div')
        card.className ="card shadow-sm"

        const card_body = document.createElement('div')
        card_body.className = "card-body"

        const img = document.createElement('img')
        img.src = "/upload/"+mascota.foto //cambiar luego de prueba con placeHolder

        const nombre = document.createElement('h5')
        nombre.className = "card-title text-center text-dark"
        nombre.textContent = mascota.nombre  //cambiar luego de prueba con placeHolder

        const descripcion = document.createElement('p')
        descripcion.className = "card-title text-center text-dark"
        descripcion.textContent = "" //cambiar luego de prueba con placeHolder

        const botones = document.createElement('div')
        botones.className = "d-flex justify-content-center align-items-center"

        const botonesInterno = document.createElement('div')
        botonesInterno.className = "btn-group d-flex justify-content-center"

        const boton1 = document.createElement('button')
        boton1.className = "btn btn-primary botones-cards"
        boton1.textContent = "Leer Mas"
        boton1.setAttribute("data-toggle","modal")
        boton1.setAttribute("data-target","#exampleModalCenter")
        boton1.setAttribute("onclick",'CargarUnaMascota(`'+mascota.id+'`)') //cambiar por el metodo de consulta
        console.log(mascota.id)

        //const boton2 = document.createElement('a')
        //boton2.className = "btn btn-primary ms-2"
        //boton2.textContent = "Sobre Mi"

        botonesInterno.append(boton1)

        botones.append(botonesInterno)

        card_body.append(nombre,descripcion,botones)

        card.append(img,card_body)

        col.append(card)

        row.append(col)


    i++;



*/