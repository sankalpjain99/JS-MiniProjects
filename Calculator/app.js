var resultDisplay = false;

// Number Event Handler 
$(".numbers .calc-button").not("#dot").click(function(e){
    var currText = $(".input-field").text();
    var lastChar = currText[currText.length-1];
    if(!resultDisplay){
        currText += e.target.innerHTML;
    }
    else if(resultDisplay && (lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/")){
        resultDisplay=false;
        currText += e.target.innerHTML;
    }
    else{
        resultDisplay=false;
        currText = e.target.innerHTML;
    }
    $(".input-field").text(currText);
})

// Operator Event Handler 
$(".operators .calc-button").click(function(e){
    var currText = $(".input-field").text();
    if(currText.length===0){
        alert("Enter a number first!");
    }
    else{
        var lastChar = currText[currText.length-1];
        if(lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/"){
            currText = currText.slice(0,-1) +  e.target.innerHTML;
        }
        else{
            currText += e.target.innerHTML;
        }
        $(".input-field").text(currText);
    }
})

// Equals Sign Event Handler 
$("#equals").click(function(){
    var currText = $(".input-field").text();
    try {
        $(".input-field").text(eval(currText).toString()); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        } else {
            throw e;
        }
    }
})

// Dot Event Handler 
$("#dot").click(function(e){
    var currText = $(".input-field").text();
    var lastChar = currText[currText.length-1];
    if(lastChar==="."){
        alert("Already there:)");
    }
    else{
        currText += e.target.innerHTML;
    }
    $(".input-field").text(currText);
})

// Clear Event Handler 
$("#clear").click(function(){
    resultDisplay=false;
    $(".input-field").text("");
})