var txtInput;
var txtResult;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click',
        numberClick, false);
    }

    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntryClick, false);
    document.getElementById('btnClear').addEventListener('click', clearAllClick, false);

    clearAllClick();
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtInput.value) + Number(txtResult.value);
    txtInput.value = '0';
}

function minusClick() {
    txtResult.value = Number(txtInput.value) - Number(txtResult.value);
    txtInput.value = '0';
}

function clearEntryClick() {
    txtInput.value = '0';
}

function clearAllClick() {
    txtInput.value = '0';
    txtResult.value = '0';
}