const myButton = document.getElementById('button');
let counter = document.getElementById ('counter');
let numberofTimes =0;
function printchange () {
    if (myButton.innerText === "Click Me") {
        myButton.innerText = "CLICKED";
        myButton.style.color = 'violet';
    }
    else {
        myButton.innerText = "Click Me";
        myButton.style.color = 'black';
    }
numberofTimes++
counter.textContent = `You have clicked me ${numberofTimes} times!!!!`
}
myButton.addEventListener("click",printchange);