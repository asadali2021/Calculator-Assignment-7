

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
function sin(){
    var apple = document.form.textview.value;
    if(apple){
        document.form.textview.value = Math.sin(apple);
    }
}
function cos(){
    var orange = document.form.textview.value;
    if(orange){
        document.form.textview.value = Math.cos(orange);
    }
}
function tan(){
    var grapes = document.form.textview.value;
    if(grapes){
        document.form.textview.value = Math.tan(grapes);
    }
}
function sqroot(){
    var high = document.form.textview.value;
    if(high){
        document.form.textview.value = Math.sqrt(high);
    }
}