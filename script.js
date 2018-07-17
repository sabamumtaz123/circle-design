function changeSizedOfCircle(){
    let circle = document.querySelector("div");
    let newSize = parseInt(Math.random()*500);
    let colors = ["red","blue","yellow","pink","white","orange","grey"]
    circle.style.width = newSize + "px";
    circle.style.height =newSize + "px";
    circle.style["fontSize"] =(newSize/100) + "em";
    circle.style["border"] = "5px solid pink";
    let red = parseInt(Math.random()*256);
    let green = parseInt(Math.random()*256);
    let blue = parseInt(Math.random()*256);
    circle.style["background-color"] = "rgb(" + red +"," + green +"," + blue +")";

}