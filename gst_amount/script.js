const amount = document.getElementById('amount')
const cgst = document.getElementById('cgst')
const sgst= document.getElementById('sgst')
const total = document.getElementById('total')
const submit = document.getElementById("submit")

submit.addEventListener('click',()=>{
    performance()
    // console.log("hello")
})

function performance(){
    console.log("my santhosh")
    let find = amount.value
    let values = find*(9/100)
    console.log(find)
    console.log(values)
    cgst.innerHTML= values
    sgst.innerHTML = values
    total.innerHTML = Number(find)+ 2*Number(values)

}