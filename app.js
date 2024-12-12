//Account
let account = {
    name:"Jane Doe",
    age:"39",
    balance:79028.19
};

let state = false;


let text = document.querySelector("#main");
let text2 = document.querySelector("#detail");
let good = document.querySelector("#green")
let clear = document.querySelector("#erase")

good.addEventListener('click', () => {
    text.innerHTML = "You Put:";
})

clear.addEventListener('click', () => {
    text2.innerHTML = "";
}) 


const addToScreen = (info) => {
    //if (state == true)
    text2.append(info);
}

const clearScreen = () => {
    text.innerHTML = "";
}

const findMyVal = (evt) =>{
    addToScreen(evt.target.textContent);
}

//Deposit Function
const deposit = () => {
    clearScreen();
    text.innerHTML = "How much would you like to deposit?";
    
    account.balance += Number(text2.innerHTML);
}

//Withdraw Function
const Withdraw = (amount) => {
    clearScreen();
    text.innerHTML = "How much would you like to withdraw?";

    
    account.balance -= Number(text2.innerHtml);
}


//Check Balance
const checkBalance = () => {
    text.innerHTML = "$" +account.balance;
}


