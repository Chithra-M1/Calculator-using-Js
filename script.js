function displayNumber(num){
    // document.getElementById("result").value+= num
    result.value+=num
}
function clearScreen(){
   result.value=" "
}

function operation(){
    result.value=eval(result.value)
}

function RemoveNumber(){
    result.value = result.value.slice(0,-1)
}