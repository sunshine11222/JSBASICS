let numbers = [];

function insertNumber(){
    let inputElement = document.getElementById("numberInput");
    let number = parseInt (inputElement.value);

    if(!isNaN(number)) {
        numbers.push(number);
        updateList();
    }
    inputElement.value

}
function updateList(){
    let numberList = document.getElementById("numberlist");
    numberList.innerHTML = "";

    numbers.forEach(num => {
        let li = document.createElement("li");
        li.textContent = num;
        numberList.appendChild(li);
    });

    updateStats();

}

function updateStats(){
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("sumValue"). textContent = sum;
    document.getElementById("highestValue"). textContent = highest;
    document.getElementById("lowestValue"). textContent = lowest;
}

function deleteAll(){
    numbers = [];
    updateList();
    document.getElementById("sumValue"). textContent = "0";
    document.getElementById("highestValue"). textContent = "0";
    document.getElementById("lowestalue"). textContent = "0";

}