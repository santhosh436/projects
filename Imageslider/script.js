let slidewrapper = document.querySelector(".slide-wrapper");
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
slidewrapper.addEventListener("wheel",(evt)=>{
    evt.preventDefault;
    slidewrapper.style.scrollBehavior = "smooth"
    slidewrapper.scrollLeft += evt.deltaY;
})
prevbtn.addEventListener("click",()=>{
    // slidewrapper.style.scrollBehavior = "smooth"
    slidewrapper.scrollLeft -= 1240;
} )
nextbtn.addEventListener("click",()=>{
    slidewrapper.style.scrollBehavior = "smooth"
    slidewrapper.scrollLeft += 1240;
} )