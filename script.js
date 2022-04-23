// Info por consola
const consoleInfo = () => {
    const time = new Date();

    const oveja = document.getElementById("valueOveja");
    const madera = document.getElementById("valueMadera");
    const trigo = document.getElementById("valueTrigo");
    const piedra = document.getElementById("valuePiedra");
    const arcilla = document.getElementById("valueArcilla");

    console.log(`%cHora: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `, "color: yellow");
    console.log(`   Oveja: ${oveja.innerHTML}`);
    console.log(`   Madera: ${madera.innerHTML}`);
    console.log(`   Trigo: ${trigo.innerHTML}`);
    console.log(`   Arcilla: ${arcilla.innerHTML}`);
    console.log(`   Piedra: ${piedra.innerHTML}`);
}

//Cambio de color de tarjetas
const colorChange = () => {  
    const oveja = document.getElementById("valueOveja");
    const madera = document.getElementById("valueMadera");
    const trigo = document.getElementById("valueTrigo");
    const piedra = document.getElementById("valuePiedra");
    const arcilla = document.getElementById("valueArcilla");

    const idOveja = document.getElementById("oveja");
    const idMadera = document.getElementById("madera");
    const idArcilla = document.getElementById("arcilla");
    const idPiedra = document.getElementById("piedra");
    const idTrigo = document.getElementById("trigo");

    const cards = document.getElementsByClassName("flex-card");

    for (el in cards){ cards[el].style = "box-shadow: -2px -2px 4px #F4DC7C15, 6px 6px 10px #0008;";}

    if (oveja.innerHTML >= 5) {
        idOveja.style = "box-shadow: inset 0 0 30px #f11, 6px 6px 10px #0008;";
        oveja.style = "color: red;";

    } else {
        idOveja.style = "box-shadow: 6px 6px 10px #0008;";
        oveja.style = "color: #111";
    }
    if (piedra.innerHTML >= 5) {
        idPiedra.style = "box-shadow: inset 0 0 30px #f11, 6px 6px 10px #0008";
        piedra.style = "color: red;";
    } else {
        idPiedra.style = "box-shadow: 6px 6px 10px #0008;";
        piedra.style = "color: #111";
    }
    if (madera.innerHTML >= 5) {
        idMadera.style = "box-shadow: inset 0 0 30px #f11, 6px 6px 10px #0008";
        madera.style = "color: red;";
    }else {
        idMadera.style = "box-shadow: 6px 6px 10px #0008;";
        madera.style = "color: #111";
    }
    if (trigo.innerHTML >= 5) {
        idTrigo.style = "box-shadow: inset 0 0 30px #f11, 6px 6px 10px #0008";
        trigo.style = "color: red;";
    }else {
        idTrigo.style = "box-shadow: 6px 6px 10px #0008;";
        trigo.style = "color: #111";
    }
    if (arcilla.innerHTML >= 5) {
        idArcilla.style = "box-shadow: inset 0 0 30px #f11, 6px 6px 10px #0008";
        arcilla.style = "color: red;";
    }else {
        idArcilla.style = "box-shadow: 6px 6px 10px #0008;";
        arcilla.style = "color: #111";
    }
}
//Agregar y quitar recursos
const botonAdd = document.getElementsByClassName("add");
const botonSus = document.getElementsByClassName("sus");

for (let i = 0; i < botonAdd.length; i++){

    const oveja = document.getElementById("valueOveja");
    const madera = document.getElementById("valueMadera");
    const trigo = document.getElementById("valueTrigo");
    const piedra = document.getElementById("valuePiedra");
    const arcilla = document.getElementById("valueArcilla");


    botonAdd[i].addEventListener("click", () => {
        switch (botonAdd[i].getAttribute("class")){
            case "madera add": 
                madera.innerHTML++;
                break;
            case "piedra add":
                piedra.innerHTML++;
                break;
            case "arcilla add": 
                arcilla.innerHTML++;
                break;
            case "trigo add":
                trigo.innerHTML++; 
                break;
            case "oveja add":
                oveja.innerHTML++; 
                break;
        }
        
        consoleInfo();
        colorChange();
    });

    botonSus[i].addEventListener("click", () => {
        switch (botonSus[i].getAttribute("class")){
            case "madera sus":
                if(document.getElementById("valueMadera").innerHTML != 0){
                    document.getElementById("valueMadera").innerHTML--;
                } else {document.getElementById("valueMadera").innerHTML = 0}
                break;
            case "piedra sus":
                if(document.getElementById("valuePiedra").innerHTML != 0){
                    document.getElementById("valuePiedra").innerHTML--;
                } else {document.getElementById("valuePiedra").innerHTML = 0}

                break;
            case "arcilla sus": 
                if(document.getElementById("valueArcilla").innerHTML != 0){
                    document.getElementById("valueArcilla").innerHTML--;
                } else {document.getElementById("valueArcilla").innerHTML = 0}

                break;
            case "trigo sus":
                if(document.getElementById("valueTrigo").innerHTML != 0){
                    document.getElementById("valueTrigo").innerHTML--;
                } else {document.getElementById("valueTrigo").innerHTML = 0}
 
                break;
            case "oveja sus":
                if(document.getElementById("valueOveja").innerHTML != 0){
                    document.getElementById("valueOveja").innerHTML--;
                } else {document.getElementById("valueOveja").innerHTML = 0}
 
                break;
        }
        consoleInfo();
        colorChange();
    });
}

// Funcion reset

const restart = () => {
    console.clear();
    document.getElementById("valueMadera").innerHTML = 0;    
    document.getElementById("valueArcilla").innerHTML = 0;
    document.getElementById("valuePiedra").innerHTML = 0;
    document.getElementById("valueTrigo").innerHTML = 0;
    document.getElementById("valueOveja").innerHTML = 0;
    
    colorChange();
}

const reload = document.getElementById("reload")
const reset = document.getElementById("resetButton");
reset.addEventListener("click", restart);
reload.addEventListener("click", restart);



//Descuento de recursos por construcciones
const sacarRecursos = (item) =>{
    const oveja = document.getElementById("valueOveja");
    const trigo = document.getElementById("valueTrigo");
    const piedra = document.getElementById("valuePiedra");
    const madera = document.getElementById("valueMadera");
    const arcilla = document.getElementById("valueArcilla");

    switch(item){
        case "Desarrollo":
            oveja.innerHTML--;
            trigo.innerHTML--;
            piedra.innerHTML--;

            if (oveja.innerHTML < 0) {oveja.innerHTML = 0}
            if (piedra.innerHTML < 0) {piedra.innerHTML = 0}
            if (trigo.innerHTML < 0) {trigo.innerHTML = 0}
             
        break;
        case "Casa":
            madera.innerHTML--;
            arcilla.innerHTML--;
            trigo.innerHTML--;
            oveja.innerHTML--;

            if (oveja.innerHTML < 0) {oveja.innerHTML = 0}
            if (trigo.innerHTML < 0) {trigo.innerHTML = 0}
            if (madera.innerHTML < 0) {madera.innerHTML = 0}
            if (arcilla.innerHTML < 0) {arcilla.innerHTML = 0}
            
        break;
        case "Ciudad":
            piedra.innerHTML -=3;
            trigo.innerHTML -=2;

            if (piedra.innerHTML < 0) {piedra.innerHTML = 0}
            if (trigo.innerHTML < 0) {trigo.innerHTML = 0}
            
        break;
        case "Camino":
            madera.innerHTML--;
            arcilla.innerHTML--;

            if (madera.innerHTML < 0) {madera.innerHTML = 0}
            if (arcilla.innerHTML < 0) {arcilla.innerHTML = 0}
            
        break;
        case "Barco":
            oveja.innerHTML--;
            madera.innerHTML--;
            
            if (oveja.innerHTML < 0) {oveja.innerHTML = 0}
            if (madera.innerHTML < 0) {madera.innerHTML = 0}
            
        break;
    }
    consoleInfo();
    colorChange();
}

const susDev = document.getElementById("susDev");
const susHouse = document.getElementById("susHouse");
const susCity = document.getElementById("susCity");
const susRoad = document.getElementById("susRoad");
const susShip = document.getElementById("susShip");

const res_susDev = document.getElementById("res_susDev");
const res_susHouse = document.getElementById("res_susHouse");
const res_susCity = document.getElementById("res_susCity");
const res_susRoad = document.getElementById("res_susRoad");
const res_susShip = document.getElementById("res_susShip");

susDev.addEventListener("click", () => {sacarRecursos(susDev.innerText)});
susHouse.addEventListener("click", () => {sacarRecursos(susHouse.innerText)});
susCity.addEventListener("click", () => {sacarRecursos(susCity.innerText)});
susRoad.addEventListener("click", () => {sacarRecursos(susRoad.innerText)});
susShip.addEventListener("click", () => {sacarRecursos(susShip.innerText)});

res_susDev.addEventListener("click", () => {sacarRecursos(susDev.innerText)});
res_susHouse.addEventListener("click", () => {sacarRecursos(susHouse.innerText)});
res_susCity.addEventListener("click", () => {sacarRecursos(susCity.innerText)});
res_susRoad.addEventListener("click", () => {sacarRecursos(susRoad.innerText)});
res_susShip.addEventListener("click", () => {sacarRecursos(susShip.innerText)});


//Mostar info de la pagina
const info = () => {
    const info = document.getElementById("info__card");

    if (info.style.display == "inline-block"){
        info.style.display = "none";
    } else info.style.display = "inline-block";
}

//Menu responsive
const show = () => {
    const nav = document.getElementById("nav__responsive__ul");

    if (nav.style.display == "block"){
        nav.style.display = "none";
    } else nav.style.display = "block";
}

const menu = document.getElementById("menu");
menu.addEventListener("click", show);

