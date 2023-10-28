function total(oldValue, inputValue) {


    var num;
    //console.log(`Old value = ${oldValue}, New Value = ${inputValue}`);

    //If there is a value.
    if(inputValue){

        // Increemnt total if there wasn't an old value.
        if(!oldValue){
            num = parseInt(document.getElementById("totalNum").innerText);
            ++num;
            document.getElementById("totalNum").innerText = num;
        }
    }

    //If value removed, decrement.
    if(!inputValue){
        num = parseInt(document.getElementById("totalNum").innerText);
        --num
        document.getElementById("totalNum").innerText = num;
    }

    // Update HTML value and text
    document.getElementById("totalNum").value = num

    //Return total.
    return num;
}


function clearNames() {
    
    //Set total value to 0
    const total = document.getElementById("totalNum");
    total.innerText = 0;

    //Iterate through rows, deleting data.
    for(let i=0; i < 17; i++) {
        var name = document.getElementById("name-table").rows[i].cells[0].children[0];
        name.value = "";
    }
}

