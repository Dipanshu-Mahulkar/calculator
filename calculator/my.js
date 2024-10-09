const display = document.getElementById("scrren");

function appendtodisplay(input){
    display.value += input;
    display.A -= input;
    display.B *= input;
    display.C /= input;
    display.D %=input;
}

function cleardisplay(){
    display.value=" ";
}
function calculation(){
    try{
        display.value=eval(display.value);
        display.A=eval(display.A);
        display.B=eval(display.B);
        display.C=eval(display.C);
        display.D=eval(display.D);
    }
    catch(error) {
        display.value="Error" ;
        display.A ="Error";
        display.B="Error";
        display.C="Error";
        display.D="Error";
    }
    }
    function backspace() {
        const display = document.getElementById('display');
        display.vlue = display.vlue.slice(0, -1);    }