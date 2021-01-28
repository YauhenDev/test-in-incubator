"use strict";

// задача 5
const fiveTask = {
    name: "Yauhen",
    secondName: "Buch",
    age: "101",
};

let inputMain = document.getElementById('buttonSearch');
inputMain.addEventListener('click', getValue);

function getValue() {
    let getZnach = document.getElementById('idInput').value;

    if (getZnach == "google" ) {
        console.log(fiveTask.name, 'Yandex круче. Но это не точно');
        alert(`${fiveTask.name} Yandex круче. Но это не точно`);
/* 
        setTimeout(
            () => alert(`${fiveTask.name} Yandex круче. Но это не точно`), 
        3000);
 */
    } else {
        console.log(fiveTask.name, getZnach);
        alert(`${fiveTask.name} ${getZnach}`);
/* 
        setTimeout(
            () => alert(`${fiveTask.name} ${getZnach}`),
        3000); 
 */
    }
} 

/* НАДО С ПОМОЩЬЮ ЦИКЛА FOR
let arr = [33, 99, 3, 77, 55, 100, 433, 250];
let min = arr[0];
let max = arr[0];

arr.forEach(function (elem, index) {

    if(index > 0 ){
        if(max < elem){
            max = elem;
        } else if (min > elem) {
            min = elem;
        }
    }
});
console.log(min,max);
*/
let arr = [33, 99, 3, 77, 55, 100, 433, 250];
let maxValue = arr[0];
let minValue = arr[0];

for(let i = 0; i < arr.length; i++) {
   let currentValue = arr[i];
   if(currentValue > maxValue) {
      maxValue = currentValue;
   } else if (currentValue < minValue) {
      minValue = currentValue;
   }
}
console.log(minValue, maxValue); 
// document.getElementById('minValue').innerHTML = minValue;
// document.getElementById('maxValue').innerHTML = maxValue;