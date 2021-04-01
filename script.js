var slider = document.getElementById("rate");
var display = document.getElementById("display");
display.innerHTML = slider.value;

slider.oninput = function() {
    display.innerHTML = this.value;
}

function compute()
{
    p = document.getElementById("principal").value;
    
}
        
