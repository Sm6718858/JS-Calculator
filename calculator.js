const inp = document.querySelector("#inp");
function append(input){
    inp.value += input;
}
function clearDisplay(){
    inp.value = "";
}
function calculate(){
    try{
        inp.value = eval(inp.value);
    }
    catch(error){
        inp.value = "error baby";
    }
}