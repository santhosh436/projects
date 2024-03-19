const counter  = document.getElementById('counter')
const button =  document.querySelectorAll(".btn")
let count = 0

button.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
      let styles = e.currentTarget.classList 
      if (styles.contains("increase")){
        count++
      } 
      else if (styles.contains("reset")){
        count = 0
      }
      else{
        count--
      }
    counter.innerHTML = count
    
    })
});