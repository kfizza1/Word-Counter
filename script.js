function countWords(){
    let text = document.getElementById("inputField").value;
    let count = 0;
    let words = text.split(/\s+/);
    for(let i = 0; i< words.length; i++){
        if(words[i] !== ""){
            count++;
        }
    }
    document.getElementById("show").textContent = count;
}