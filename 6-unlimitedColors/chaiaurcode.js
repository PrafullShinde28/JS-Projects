const randomColor = function(){
    const hex = "01234569ABCDF"
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex(Math.floor(Math.random()*16))
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
   if(!intervalId)
    intervalId= setInterval(changeBg,1000);
    function changeBg(){
         document.body.style.backgroundColor = randomColor();

      }
   }
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId =null;
}
document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)
