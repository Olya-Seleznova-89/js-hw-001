const credits = 23580;
const pricePerDroid = 3000;
let number = prompt("Скільки телевізорів хочете купити?!");

let totalPrice = number * pricePerDroid;
if(number === null){
    alert('Операцію скасовано!');
}else if (totalPrice > credits){
    alert('Недостатньо коштів на рахунку!');
}else if (totalPrice < credits){
    alert(`Ви купили ${number} телевізорів, на рахунку залишилось ${credits-totalPrice} кредитів`);
}