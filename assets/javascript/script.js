"use strict";

let inputMain = document.getElementById('buttonSearch');
inputMain.addEventListener('click', getValue);

function getValue() {
    let getZnach = document.getElementById('idInput').value;

    //console.log(typeof(getZnach));
    //alert(`${getZnach}`);

    if (getZnach == "google" ) {
        console.log("Yandex круче. Но это не точно");
        setTimeout(() => alert('Yandex круче. Но это не точно'), 3000);  // функция с задержкой в 3 секунды https://learn.javascript.ru/settimeout-setinterval
    } else {
        console.log(getZnach);
        alert(`${getZnach}`);
        //setTimeout(() => alert(`${getZnach}`), 3000);
    }
} 