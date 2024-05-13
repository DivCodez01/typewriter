const typeWriterElms = document.getElementById("typeWriter");
const myText = ["My name is !!!", "NDIZIHIWE Gakiza Divin", "I'm the one who help you to know", "Coding...", "in short", "way and", "how can", "make better", " website 😲😲😲"];
const autotyping = (txt, incrm, func) => {
    if (incrm < txt.length + 1) {
        typeWriterElms.innerHTML = txt.substring(0, incrm++);
        let typeElmTm = 10 + Math.random() * 100;
        setTimeout(() => {
            autotyping(txt, incrm, func);
        }, typeElmTm);
    } else if (incrm == txt.length + 1) {
        setTimeout(() => {
            autoDeleting(txt, incrm, func);
        }, 1000);
    }
}

const autoDeleting = (txt, incrm, func) => {
    if (incrm >= 0) {
        typeWriterElms.innerHTML = txt.substring(0, incrm--);
        let typeElmTm = 10 + Math.random() * 10;
        setTimeout(() => {
            autoDeleting(txt, incrm, func);
        }, typeElmTm);
    } else if (typeof func == "function") {
        setTimeout(func, 1000);
    }
}

const startTyping = (incrm) => {
    if (typeof myText[incrm] == "undefined") {
        setTimeout(() => {
            startTyping(0)
        }, 10000);
    } else if (incrm <= myText[incrm].length + 1) {
        autotyping(myText[incrm], 0, function () {
            startTyping(incrm + 1);
        })
    }
}
setTimeout(() => {
    startTyping(0)
}, 100);
