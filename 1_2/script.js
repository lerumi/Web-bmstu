window.onload = function(){

let a = ''
let b = ''
let expressionResult = ''
let selectedOperation = null

// окно вывода результата
outputElement = document.getElementById("result")

// список объектов кнопок циферблата (id которых начинается с btn_digit_)
digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
        if ((digit != '.') || (digit == '.' && !a.includes(digit) && a!='')) {
            a += digit
        }
        if(a==''){a='0.'}
        outputElement.innerHTML = a

    } else {
        if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
            b += digit
            outputElement.innerHTML = b
        }
    }
}

// устанавка колбек-функций на кнопки циферблата по событию нажатия
digitButtons.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        onDigitButtonClicked(digitValue)
    }
});

// установка колбек-функций для кнопок операций
document.getElementById("btn_op_mult").onclick = function() {
    if (a === '') return
    selectedOperation = 'x'
}
document.getElementById("btn_op_plus").onclick = function() {
    if (a === '') return
    selectedOperation = '+'
}
document.getElementById("btn_op_minus").onclick = function() {
    if (a === '') return
    selectedOperation = '-'
}
document.getElementById("btn_op_div").onclick = function() {
    if (a === '') return
    selectedOperation = '/'
}
document.getElementById("btn_op_sign").onclick = function() {
    if (a === '') return
    if(selectedOperation === null)
    {
        a = a*(-1)
        outputElement.innerHTML = a
    }
    else
    {
        b = b*(-1)
        outputElement.innerHTML = b
    }

}
document.getElementById("btn_op_percent").onclick = function() {
    if (a === '') return
    switch(selectedOperation) {
        case 'x':
            b = b/100
            selectedOperation = 'x'
            break;
        case '+':
            b = b*a/100
            selectedOperation = '+'
            break;
        case '-':
            b = b*a/100
            selectedOperation = '-'
            break;
        case '/':
            b = b/100
            selectedOperation = '/'
            break;
        case null:
            a=''
            outputElement.innerHTML = 0
            break;
    }

}
document.getElementById("change_background_color").onclick = function() {
    let back = document.getElementById("back").style.backgroundColor
    let button_1 = document.querySelectorAll('[id ^= "btn_digit_"]').style
    let lightOrange = "rgb(255, 205, 117)"
    let button_color = 'white'
    switch(back)
    {
        case 'white':
            button_color = 'white'
            back = lightOrange
            break;
        case lightOrange:
            button_color = lightOrange
            back = 'white'
            break;
    }

      let changeColorBlock = document.querySelectorAll('[id ^= "btn_digit_"]');

      for (elem of changeColorBlock) {
      if(back=='white')
      {
      elem.style.backgroundColor = 'green';
      }
      if(back==lightOrange)
      {
      elem.style.backgroundColor = 'blue';
      }

      }

    document.getElementById("back").style.backgroundColor = back

}

// кнопка очищения
document.getElementById("btn_op_clear").onclick = function() {
    a = ''
    b = ''
    selectedOperation = ''
    expressionResult = ''
    outputElement.innerHTML = 0
}

// кнопка расчёта результата
document.getElementById("btn_op_equal").onclick = function() {
    if (a === '' || b === '' || !selectedOperation)
        return

    switch(selectedOperation) {
        case 'x':
            expressionResult = (+a) * (+b)
            break;
        case '+':
            expressionResult = (+a) + (+b)
            break;
        case '-':
            expressionResult = (+a) - (+b)
            break;
        case '/':
            expressionResult = (+a) / (+b)
            break;
    }

    a = expressionResult.toString()
    b = ''
    selectedOperation = null

    outputElement.innerHTML = a
}
};