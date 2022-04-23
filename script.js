//Agregar y quitar recursos
const botonAdd = document.getElementsByClassName("add");
const botonSus = document.getElementsByClassName("sus");

for (let i = 0; i < botonAdd.length; i++){
    const date = new Date;
    botonAdd[i].addEventListener("click", () => {
        switch (botonAdd[i].getAttribute("class")){
            case "madera add": 
                document.getElementById("valueMadera").innerHTML++;
                break;
            case "piedra add":
                document.getElementById("valuePiedra").innerHTML++;
                break;
            case "arcilla add": 
                document.getElementById("valueArcilla").innerHTML++;
                break;
            case "trigo add":
                document.getElementById("valueTrigo").innerHTML++; 
                break;
            case "oveja add":
                document.getElementById("valueOveja").innerHTML++; 
                break;
        }
        console.count(`Update `)
        console.log(`%cMadera: ${document.getElementById("valueMadera").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cArcilla: ${document.getElementById("valueArcilla").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cOveja: ${document.getElementById("valueOveja").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cTrigo: ${document.getElementById("valueTrigo").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cPiedra: ${document.getElementById("valuePiedra").innerHTML}`, "color: green; margin-left: 15px");
    
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
        console.count(`Update `)
        console.log(`%cMadera: ${document.getElementById("valueMadera").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cArcilla: ${document.getElementById("valueArcilla").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cOveja: ${document.getElementById("valueOveja").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cTrigo: ${document.getElementById("valueTrigo").innerHTML}`, "color: green; margin-left: 15px");
        console.log(`%cPiedra: ${document.getElementById("valuePiedra").innerHTML}`, "color: green; margin-left: 15px");

    });

}

// Funcion reset
const reset = document.getElementById("resetButton");

reset.addEventListener("click", () => {
    console.clear();
    document.getElementById("valueMadera").innerHTML = 0;    
    document.getElementById("valueArcilla").innerHTML = 0;
    document.getElementById("valuePiedra").innerHTML = 0;
    document.getElementById("valueTrigo").innerHTML = 0;
    document.getElementById("valueOveja").innerHTML = 0;
});


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


}

const susDev = document.getElementById("susDev");
const susHouse = document.getElementById("susHouse");
const susCity = document.getElementById("susCity");
const susRoad = document.getElementById("susRoad");
const susShip = document.getElementById("susShip");

susDev.addEventListener("click", () => {sacarRecursos(susDev.innerText)});
susHouse.addEventListener("click", () => {sacarRecursos(susHouse.innerText)});
susCity.addEventListener("click", () => {sacarRecursos(susCity.innerText)});
susRoad.addEventListener("click", () => {sacarRecursos(susRoad.innerText)});
susShip.addEventListener("click", () => {sacarRecursos(susShip.innerText)});


