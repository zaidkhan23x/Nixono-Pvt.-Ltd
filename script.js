let counter=1;
let c;
let referesh=setInterval(()=>{
    if(counter>1){
    if(c!=(counter-1))
    clearInterval(referesh);
    }
    c=counter;
    document.querySelector("#radio"+counter).checked='true';
    counter++;
    if(counter>4)
    counter=1;
},5000);

function nextslide(){
    document.querySelector("#radio"+counter).checked='true';
    counter++;
    if(counter>4)
    counter=1;
}