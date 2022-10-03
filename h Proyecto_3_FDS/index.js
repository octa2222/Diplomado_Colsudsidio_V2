
let mostrar = 1;
function Mostrar_Ocultar() {
    document.getElementById("bloque").style.display = "none";
    if (mostrar == 1) {
        document.getElementById("bloque").style.display = "none";
        mostrar = mostrar + 1;
    } else {
        document.getElementById("bloque").style.display = "block";
        mostrar = 1;
    }

}



let node = 1;

function divLog() {
    if (node == 1) {
        document.getElementById("caja").style.display = "block";
        node = node + 1;
    } else {
        document.getElementById("caja").style.display = "none";
        node = 1;
    }

}

function addText() {

    let container = document.querySelector("myDIV");
    document.getElementById("myHeader").innerHTML = "Acerca de Nosotros";
    myDIV.innerHTML = "h2"
    myDIV.innerHTML = " Mision <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto, incidunt illo fficiis rem non ad error eos ratione magnam culpa pariatur maiores quos voluptas mollitia   aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto, incidunt corrupti sed inventore illo officiis rem non ad error eos ratione magnam culpa pariatur maiores quos voluptas mollitia aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto, incidunt corrupti sed inventore illo officiis rem non ad error eos ratione magnam culpa pariatur maiores quos voluptas mollitia aperiam.<br> <br> Vision <br> lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat voluptas eum incididunt utilInspect  iusto, incidunt in culpa qui officia deserunt maiores et cupiditat non proident, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat voluptas eum incididunt ut labore et dolore magna aliquyam erat voluptas eum incididunt";
    document.getElementById("myDIV").style.margin = "3em";

}
//calculadora///
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}

function getResult() {
    return (document.getElementById('result').innerHTML);
}

function add(key) {
    var result = getResult();
    if (result != '0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

function calc() {
    var result = eval(getResult());
    setResult(result);
}

function del() {
    setResult(0);
}

let button = document.getElementById('iniciar-calculadora');

button.addEventListener('click', () => {
    calculatorInit();
});

let calculatorInit = () => {

    alert('Iniciando calculadora....');
    alert('Por favor selecciona una operacion:');

    let select_operation = prompt("1. Suma 2. Resta 3. Multiplicación 4. División");

    if (select_operation === '') {

        alert('Por favor ingrese un número');
        alert('La calculadora se reiniciará....')

        return calculatorInit();

    } else if (select_operation) {

        let primer_valor = parseInt(prompt('Ingrese el primer número')),
            segundo_valor = parseInt(prompt('Ingrese el segundo número'));

        if (isNaN(primer_valor))
            alert("Primer valor no es un numero")
        if (isNaN(segundo_valor))
            alert("Segundo valor no es un numero")

        else if (select_operation === '1') {
            alert(`La suma de ${primer_valor} y ${segundo_valor} es ${primer_valor + segundo_valor}`);
        } else if (select_operation === '2') {
            alert(`La resta de ${primer_valor} y ${segundo_valor} es ${primer_valor - segundo_valor}`);
        } else if (select_operation === '3') {
            alert(`La multiplicación de ${primer_valor} y ${segundo_valor} es ${primer_valor * segundo_valor}`);
        } else if (select_operation === '4') {
            alert(`La división entre ${primer_valor} y ${segundo_valor} es ${primer_valor / segundo_valor}`);
        }
    } else {
        alert('Cerrando calculadora....');
    }
}
