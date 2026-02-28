var enteredAmt=document.getElementById("enteredamount");
var description=document.getElementById("description");
var income=document.getElementById("income");
var expense=document.getElementById("expense");
var yourBalance=document.getElementById("yourbalance");
var transactionList=document.getElementById("transactions");

function addIncome(){
    if(enteredAmt===0 || description.value===""){
        alert("Enter the required credentials");
    } else {
    let amt=Number(enteredAmt.value);                        //prefer to make var for addition
    income.innerText=(Number(income.innerText)+amt);         //innerText for normal text in html & .value for inputboxes
    yourBalance.innerText=(Number(yourBalance.innerText)+amt);

    let li=document.createElement("li");
    li.classList.add("credited");
    li.innerHTML=description.value + "<span> ₹"+amt+"</span>"; //instead of codes of span seperately (like in TO-DO) use this instead
    transactionList.appendChild(li);

    description.value="";                                     //erases the previous value written previously during input
    enteredAmt.value='';
    }
}

function addExpense(){
    if(enteredAmt===0 || description.value===""){
        alert("Enter the required credentials");
    } else {
    let amt=Number(enteredAmt.value);
    expense.innerText=(Number(expense.innerText)+amt);
    yourBalance.innerText=(Number(yourBalance.innerText)-amt);

    let li=document.createElement("li");
    li.innerHTML=description.value+"<span> ₹"+amt+"</span>";
    transactionList.appendChild(li);

    description.value="";
    enteredAmt.value='';
    }
    

}
