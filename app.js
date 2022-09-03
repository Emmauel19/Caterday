function playGame(){
    let  randomNumberOne=Math.floor(Math.random()*6)+1; 
    let randomImagesOnePath='./'+ randomNumberOne +'.png';

    let  randomNumberTwo=Math.floor(Math.random()*6)+1; 
    let randomImagesTwoPath='./'+ randomNumberTwo +'.png';
    let image1 = document.querySelectorAll('img')[0];
    console.log(image1);
    image1.setAttribute('src', randomImagesOnePath);

    let image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src',randomImagesTwoPath);
    if(randomNumberOne>randomNumberTwo){
    document.querySelector('h1').innerHTML='Player one Won!'
}
else if(randomNumberTwo>randomNumberOne){
    document.querySelector('h1').innerHTML='Player two Won!'
}
else{
    document.querySelector('h1').innerHTML= 'It is a Draw Game!'
}
}
document.querySelector('.button').addEventListener('click', playGame)


