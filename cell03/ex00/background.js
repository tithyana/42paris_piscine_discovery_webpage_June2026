function myFunction() {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    
    const el = document.querySelector("#text");
    const fontSize = Number(el.style.fontSize.replace("px", "")) ?? 13.3333;
    el.style.fontSize = (fontSize + 20) + "px";
}