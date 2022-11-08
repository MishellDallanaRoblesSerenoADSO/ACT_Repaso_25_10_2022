addEventListener("DOMContentLoaded", (e)=>{
let hor= document.querySelector("#me")
let cont=1
hor.addEventListener("submit", (e)=>{
    e.preventDefault();        
    if( cont<=50){
    let datosEntrada= Object.fromEntries(new FormData(e.target))
        let h=datosEntrada.horastrbj
        let vhoras=5208.33
        let pghoras= vhoras*h
        
        let mytable=document.querySelector("tbody");
        mytable.innerHTML = "";
        mytable.insertAdjacentHTML("beforeend", `
            
            <tr>
                <td>${cont} </td>
                <td>${h} </td>
                <td>${vhoras} </td>
                <td>${pghoras} </td>
            <tr>
            `)
            cont++
        }
    })
})      