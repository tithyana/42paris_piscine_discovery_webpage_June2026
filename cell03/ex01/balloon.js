const colors = ['green', 'blue', 'red'];

function myFunction() {
    const myDiv = document.querySelector(".balloon");
    
    const currWidth = myDiv.clientWidth;
    const currHeight = myDiv.clientHeight;
    
    if (currWidth >= 420) {
        myDiv.style.width = 200 + "px";
        myDiv.style.height = 200 + "px"; 
    } else {
        myDiv.style.width = currWidth + 10 + "px";
        myDiv.style.height = currHeight + 10 + "px";
    }

    console.log("cc")

    color = colors.shift();
    colors.push(color);


    if (color === myDiv.style.backgroundColor) {
       color = colors.shift();
        colors.push(color); 
    }
    
    myDiv.style.backgroundColor = color;
}

function mouseLeave() {
    console.log("mouseleave")

    const myDiv = document.querySelector(".balloon");
    
    const currWidth = myDiv.clientWidth;
    const currHeight = myDiv.clientHeight;
    
    if (currWidth > 200) {
        myDiv.style.width = currWidth - 5 + "px";
        myDiv.style.height = currHeight - 5 + "px";
    }

    color = colors.pop();
    colors.unshift(color);

    if (color === myDiv.style.backgroundColor) {
        color = colors.pop();
        colors.unshift(color); 
    }

    myDiv.style.backgroundColor = color;
}

