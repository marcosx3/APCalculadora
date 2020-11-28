function calcular(tipo, valor){
    if(tipo ==='acao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = ''

        }
    } else if (tipo === 'valor') {

        document.getElementById('resultado').value += valor;
    }

    switch (valor){  
        case '+':
            document.getElementById('resultado').value  += '+'
            break;
        case '-':
            document.getElementById('resultado').value += '-'
             break;
        case '*':
            document.getElementById('resultado').value += '*'
            break;
        case '/':
            document.getElementById('resultado').value += '/'
            break;
        case '.':
            document.getElementById('resultado').value +='.'
            break;
        case '=':
          var resul = eval(  document.getElementById('resultado').value) 
          document.getElementById('resultado').value = resul
    }
}