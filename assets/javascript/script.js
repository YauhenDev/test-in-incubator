"use strict";

// задача 5 ***********************************************************
const fiveTask = {
    name: 'Yauhen',
    secondName: 'Buch',
    age: '101',
};

let inputMain = document.getElementById('buttonSearch');
inputMain.addEventListener('click', getValue);

function getValue() {
    let getZnach = document.getElementById('idInput').value;

    if (getZnach == 'google' || getZnach == 'Google' || getZnach == 'GOOGLE' ) {
        console.log('Через 3 секунды Alert:', fiveTask.name, 'Yandex круче. Но это не точно');
        //alert(`${fiveTask.name} Yandex круче. Но это не точно`);
        setTimeout(
            () => alert(`${fiveTask.name} Yandex круче. Но это не точно`), 
        3000);
    } else {
        console.log('Через 3 секунды Alert:', fiveTask.name, getZnach);
        //alert(`${fiveTask.name} ${getZnach}`); 
        setTimeout(
            () => alert(`${fiveTask.name} ${getZnach}`),
        3000); 
    }
} 

// задача 6 ***********************************************************
superSum(1, 2);
function superSum() {
    let num1 = arguments[0]
    let num2 = arguments[1]
  
    console.log('Task6:', num1 + num2);
    alert(`Task6: ${num1 + num2}`);
  }

  

// задача 7 ***********************************************************
let arr = [33, 99, 3, 77, 55, 100, 433, 250];
let maxValue = arr[0];
let minValue = arr[0];
/* 
arr.forEach (function (elem, index) {

    if (index > 0 ){
        if (maxValue < elem){
            maxValue = elem;
        } 
    }
});
 */
for (let i = 0; i < arr.length; i++) {
   let currentValue = arr[i];

   if (currentValue > maxValue) {
      maxValue = currentValue;
   } else if (currentValue < minValue) {
      minValue = currentValue;
   }
}

console.log('Task7:', minValue, maxValue); 


// задача 8 ***********************************************************
let a = 'Task8: 1 Значение'; 
let b = 'Task8: 2 Значение';
[a, b] = [b, a];

console.log(a);
console.log(b);


// задача 9 ***********************************************************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function findMax(arr) {
    return Math.max(...arr);
}
console.log('Task9:',Math.max(...arr)); 