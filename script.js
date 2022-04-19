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
                document.getElementById("valueMadera").innerHTML--;
                break;
            case "piedra sus":
                document.getElementById("valuePiedra").innerHTML--;
                break;
            case "arcilla sus": 
                document.getElementById("valueArcilla").innerHTML--;
                break;
            case "trigo sus":
                document.getElementById("valueTrigo").innerHTML--; 
                break;
            case "oveja sus":
                document.getElementById("valueOveja").innerHTML--; 
                break;
        }
    
    });
}

const reset = document.getElementById("resetButton");

reset.addEventListener("click", () => {
    document.location.reload(true);
});
