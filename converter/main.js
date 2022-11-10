document.getElementById("kgs").addEventListener("input", e=> {
    let kgs=e.target.value;
    console.log(kgs);
    document.getElementById("lbs").innerText= kgs * 2.205;    
})

document.getElementById("feet").addEventListener("input", e=> {
    let feet=e.target.value;
    console.log(feet);
    document.getElementById("cms").innerText= feet * 12 * 2.54;    
})
