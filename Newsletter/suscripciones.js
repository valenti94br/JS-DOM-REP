

document.addEventListener("load", information());




function information() {
let array = JSON.parse(localStorage.getItem("existing"))


for (let i = 0; i < array.length; i++) {
    console.log(array[i].inputName);
    console.log(array[i].inputEmail);
    
    let card = document.createElement("div")
    card.setAttribute("class", "card m-2")
    
    let info = document.getElementById("info");
    
    info.appendChild(card);
    

    let input1 = document.createElement("div")
    input1.textContent = "Name: " + array[i].inputName
    input1.setAttribute("class", "card bg-info text-white p-2 m-2")
    card.appendChild(input1);

    let input2 = document.createElement("div")
    input2.textContent = "Email: "+ array[i].inputEmail
    input2.setAttribute("class", "card bg-dark text-white p-2 m-2")
    card.appendChild(input2);

    let input3 = document.createElement("div")
    input3.textContent = "Intereses: "+ array[i].inputInterests
    input3.setAttribute("class", "card bg-dark text-white p-2 m-2")
    card.appendChild(input3);

    let input4 = document.createElement("div")
    input4.textContent = "Intereses: "+ array[i].inputSubscription
    input4.setAttribute("class", "card bg-info text-white p-2 m-2")
    card.appendChild(input4);
}

}