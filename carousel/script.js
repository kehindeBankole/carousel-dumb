const buttons = document.querySelectorAll(".buttons .btn")
const pic= document.getElementById("pic")
const images = ["maxresdefault" , "Itachi-Desktop-Wallpapers" , "178"]

buttons.forEach((get , i)=>{
 get.addEventListener("click" , function(){
  
     pic.src = images[i]+".jpg"
    console.log(get.textContent)
    
 })
})





