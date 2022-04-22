const botonAdd = document.getElementsByClassName("add");
const botonSus = document.getElementsByClassName("sus");

for (let i = 0; i < botonAdd.length; i++){
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
    });
}


const reset = document.getElementById("resetButton");

reset.addEventListener("click", () => {
    document.getElementById("valueMadera").innerHTML = 0;    
    document.getElementById("valueArcilla").innerHTML = 0;
    document.getElementById("valuePiedra").innerHTML = 0;
    document.getElementById("valueTrigo").innerHTML = 0;
    document.getElementById("valueOveja").innerHTML = 0;
});
