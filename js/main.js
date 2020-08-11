let tiempoRefresco = 1000;

let time = ( setInterval ( function() {
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let houra = document.getElementById("houra");
    let mina = document.getElementById("mina");
    let seca = document.getElementById("seca");
    let meridian = document.getElementById("meridian");

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes()
    let s = d.getSeconds();
    let a_p = "AM";

    if (h>12) {
        h=-12;
        a_p = "PM";
    }

    if (h==0) {
        h = 12
    }

    h = (h<10) ? '0'+h : h;
    m = (m<10) ? '0'+m : m;
    s = (s<10) ? '0'+s : s;

    houra.innerHTML = hour.innerHTML = h;
    mina.innerHTML = min.innerHTML = m;
    seca.innerHTML = sec.innerHTML = s;
    
    meridian.innerHTML = a_p;
}),tiempoRefresco);