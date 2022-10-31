addEventListener("DOMContentLoaded", (e)=>{ 

    let myform= document.querySelector("myform");
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));

        let vhoras=5208.33
        
    })

})