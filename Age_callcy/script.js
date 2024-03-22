let dater = document.getElementById("date");
let msg = document.getElementById("msg")
function CalculateAge(){
    let camp = new Date(dater.value);
    let y1,m1,d1;
    d1 = camp.getDate()
    m1 = camp.getMonth()+1
    y1 = camp.getFullYear()

    let pres = new Date()
    let y2,m2,d2;
    d2 = pres.getDate()
    m2 = pres.getMonth()+1
    y2 = pres.getFullYear()

    let y3,m3,d3;
    y3 = y2 - y1;
    if (m2>=m1){
        m3 = m2 -m1;
    }
    else{
        y3--;
        m3 = 12+m2-m1;
    }
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = DaysinMonth(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3 =11;
        y3--;
    }
     msg.innerHTML =  `Your age is <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days Old`;
}
function DaysinMonth(Year,Month){
    return new Date(Year,Month,0).getDate();
}