function ans(){
    var a = Math.floor(Math.random()*6)+1;
    var b = Math.floor(Math.random()*6)+1;
    console.log(a);
    console.log(b);
    var randomDiceImage1 = "dice"+a+".png";
    var randomImageSource1 = "images/"+randomDiceImage1;
    var randomDiceImage2 = "dice"+b+".png";
    var randomImageSource2 = "images/"+randomDiceImage2;
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src",randomImageSource1);
    image2.setAttribute("src",randomImageSource2);
        if(a>b){
        return "Player 1 wins";
    }else if(b>a){
        return "player 2 wins";
    }else{
        return "refresh again";
    }
}
var c = ans();
document.querySelector("h1").textContent = c;