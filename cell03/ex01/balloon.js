const colors = ['green', 'blue', 'red'];

function myFunction() {
    const myDiv = document.querySelector(".balloon");
    
    const currWidth = myDiv.clientWidth;
    const currHeight = myDiv.clientHeight;
    myDiv.style.width = currWidth + 10 + "px";
    myDiv.style.height = currHeight + 10 + "px";

    console.log("cc")

    color = colors.shift();
    colors.push(color);
    
    myDiv.style.backgroundColor = color;
}



