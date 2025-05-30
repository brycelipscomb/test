let amount = 500;
let len = 0;
let cont = null;
let label = document.getElementById("label");

const populateContainer = () => {
    cont = document.getElementById("container");
    for (let i = 0; i < amount; i++) {
        cont.innerText += "🔥";
    }
    len = cont.innerText.length;
}

const mouseListener = e => {
    e.preventDefault();
    cont.innerText = cont.innerText.slice(0,cont.innerText.length - 1);
    let l = cont.innerText.length;
    console.log(cont.innerText.length);
    console.log(cont.innerText.trim().length);
    document.body.style.backgroundColor = `rgba(0,0,0,${1 - l/len})`
    if (l === 0) {
        label.innerText = "RIP in Pepperoni";
        label.style.color = "rgba(255,0,0,1)"
        return;
    } else if (l < len * 0.05) {
        label.innerText = "Please stop moving!!";
        return;
    } else if (l < len * 0.15) {
        label.innerText = "Okay now it's very dark and very cold";
        return;
    } else if (l < len * 0.25) {
        label.innerText = "Oh geez it's getting pretty cold";
        return;
    } else if (l < len * 0.5) {
        label.innerText = "The room is a lot darker";
        return;
    } else if (l < len * 0.75) {
        label.innerText = "Only you can prevent forest fires";
        return;
    } else if (l < len * 0.85) {
        label.innerText = "Oh, that's pretty neat";
        return;
    } else if (l < len * 0.95) {
        label.innerText = "Wait, did something move?";
        return;
    }

}

document.addEventListener("mousemove", mouseListener)

populateContainer();