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
    const oveja = document.getElementById("valueOveja").innerHTML;
    const trigo = document.getElementById("valueTrigo").innerHTML;
    const piedra = document.getElementById("valuePiedra").innerHTML;
    const madera = document.getElementById("valueMadera").innerHTML;
    const arcilla = document.getElementById("valueArcilla").innerHTML;

        switch(item){
            case "Desarrollo":
                if (oveja > 0 && piedra > 0 && trigo > 0){
                    document.getElementById("valueOveja").innerHTML--;
                    document.getElementById("valuePiedra").innerHTML--;
                    document.getElementById("valueTrigo").innerHTML--;
                }else {
                    document.getElementById("valueOveja").innerHTML = 0;
                    document.getElementById("valuePiedra").innerHTML = 0;
                    document.getElementById("valueTrigo").innerHTML = 0;           
                }
                break;
            case "Casa":
                if (madera > 0 && arcilla > 0 && trigo > 0 && oveja > 0){
                    document.getElementById("valueMadera").innerHTML--;
                    document.getElementById("valueTrigo").innerHTML--;
                    document.getElementById("valueOveja").innerHTML--;
                    document.getElementById("valueArcilla").innerHTML--;
                }else {
                    document.getElementById("valueMadera").innerHTML = 0;
                    document.getElementById("valueTrigo").innerHTML = 0;
                    document.getElementById("valueOveja").innerHTML = 0;
                    document.getElementById("valueArcilla").innerHTML = 0;
                }
            break;
            case "Ciudad":
                if (piedra >= 3 && trigo >= 2){
                    document.getElementById("valuePiedra").innerHTML -= 3;
                    document.getElementById("valueTrigo").innerHTML -= 2;
                }else {
                    document.getElementById("valuePiedra").innerHTML = 0;
                    document.getElementById("valueTrigo").innerHTML = 0;                 
                }
            break;
            case "Camino":
                if (madera > 0 && arcilla > 0){
                    document.getElementById("valueMadera").innerHTML--;
                    document.getElementById("valueArcilla").innerHTML--;
                }else {
                    document.getElementById("valueMadera").innerHTML = 0;
                    document.getElementById("valueArcilla").innerHTML = 0;
                }
            break;
            case "Barco":
                if (madera > 0 && oveja > 0) {
                    document.getElementById("valueMadera").innerHTML--;
                    document.getElementById("valueOveja").innerHTML--;
                }else {
                    document.getElementById("valueMadera").innerHTML = 0;
                    document.getElementById("valueOveja").innerHTML = 0;
                }
            break;
        }
    
    console.count(`Update `)
    console.log(`%cMadera: ${document.getElementById("valueMadera").innerHTML}`, "color: green; margin-left: 15px");
    console.log(`%cArcilla: ${document.getElementById("valueArcilla").innerHTML}`, "color: green; margin-left: 15px");
    console.log(`%cOveja: ${document.getElementById("valueOveja").innerHTML}`, "color: green; margin-left: 15px");
    console.log(`%cTrigo: ${document.getElementById("valueTrigo").innerHTML}`, "color: green; margin-left: 15px");
    console.log(`%cPiedra: ${document.getElementById("valuePiedra").innerHTML}`, "color: green; margin-left: 15px");

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


