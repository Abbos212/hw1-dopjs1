let num = prompt('Введите число!');
if (num == '') {
    alert('Вы ничего не написали!')
} else if (num == 0) {
    alert('Число равен нулю')
} else if (num == null) {
    alert('Вы нажали на отмену!')
} else if (num > 0) {
    alert('Положительное!')
} else if (num < 0) {
    alert('Отрицательное!')
} else {
    alert('Введите только число!')
}


