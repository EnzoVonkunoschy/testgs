
function testGS(){
    const url= "https://script.google.com/macros/s/AKfycbxNFOo8FeCf2Pdp-PZ_fzVM0iZm0loxw0nUPycjDgHpkCXNzNmlOP838CQjDB6JDM73Nw/exec";

    fetch(url)
        .then(d =>d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
        })
}

document.getElementById('btn').addEventListener('click',testGS);