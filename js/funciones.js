$(document).ready(function(){
    var resultado = 0;
    var numAnterior = 0;
    var operacion = null;
    var registro = '';
    var numActual = '0';
    actualizaPantalla(resultado);

    $('.button').on('click', function(evt) {
        var botonPresionado = $(this).html();
        if(botonPresionado === "C"){
            resultado = 0;
            numActual = '0';
            registro = '';
        } else if (botonPresionado === "e"){
            numActual = Math.exp(1);
            registro += 'e ';
        } else if (botonPresionado === "pi"){
            numActual = Math.PI;
            registro += 'pi ';
        } else if (botonPresionado === "mod"){
            numAnterior = parseFloat(numActual);
            operacion = "%";
            numActual = '';
            registro += 'mod ';
        } else if (botonPresionado === "exp"){
            numActual = Math.exp(numActual);
            registro += 'exp ';
        } else if (botonPresionado === "|x|"){
            if(!isNaN(numActual)){
                if(x<0) numActual *= -1;
            }
        } else if (botonPresionado === "1/x"){
            numActual = 1 / numActual;
            registro += '1/'+numActual;
        } else if (botonPresionado === "x^2"){
            numActual = Math.pow(numActual,2);
            registro += '^2';
        } else if (botonPresionado === "n!"){
            numActual = factorial(numActual);
            registro += '! ';
        } else if (botonPresionado === ")"){
            
        } else if (botonPresionado === "("){
            
        } else if (botonPresionado === "sqrt"){
            numActual = Math.sqrt(numActual);
        } else if (botonPresionado === "="){
            registro += '=';
            numActual = calcular(numAnterior, numActual, operacion);
            operacion = null;
        } else if (botonPresionado === "x^y"){
            numAnterior = parseFloat(numActual);
            operacion = "^";
            numActual = '';
        } else if (botonPresionado === "10^x"){
            numActual = Math.pow(10,numActual);
        } else if (botonPresionado === "log"){
            numActual = Math.log10(numActual);
        } else if (botonPresionado === "ln"){
            numActual = Math.log(numActual);
        }else if (botonPresionado === "."){
            numActual += ".";
        }else if (botonPresionado === "+/-"){
            numActual *= -1;
        }else if (esNumero(botonPresionado)){
            if(numActual === '0') numActual = botonPresionado;
            else numActual = numActual + botonPresionado;
        } else if (esOperador(botonPresionado)) {
            numAnterior = parseFloat(numActual);
            operacion = botonPresionado;
            numActual = '';
        }
        actualizaPantalla(numActual);
        actualizaRegistro(reg);
    });
});

actualizaPantalla = function(displayValue){
    var displayValue = displayValue.toString();
    $('.pantalla').html(displayValue.substring(0,10));
}

actualizaRegistro = function(displayValue){
    var displayValue = displayValue.toString();
    $('.registro').html(displayValue.substring(0,10));
}

factorial = function(n){
    if(n == 0){
        return 1;
    }
    return n*factorial(n-1);
}

esNumero = function(n){
    return !isNaN(n);
}

esOperador = function(n){
    return n === '/' || n === '*' || n === '+' || n === '-';
}

calcular = function(a, b, operador){
    a = parseFloat(a);
    b = parseFloat(b);
    if (operador === '+') return a + b;
    if (operador === '-') return a - b;
    if (operador === '*') return a * b;
    if (operador === '/') return a / b;
    if (operador === '^') return Math.pow(a,b);
}