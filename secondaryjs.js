
function finding() {
    let rando = 7;
    let el = document.getElementById('my-div-' + rando);
    if (!el) {
        alert("Fail");
    } else {
        alert("Success");
    }
}
finding()