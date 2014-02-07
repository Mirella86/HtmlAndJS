module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Initialize Test", function () {
    expect(2);
    //   txtInput.value = '';
    //   txtResult.value = '';
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
});



test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected +
        ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength,
        'Expected string length: ' + expectedLength +
        ' Actual value: ' + txtInput.value.length);
    }
});

test("Add Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
    var expectedInput = '0';
    equal(txtInput.value, expectedInput, 'Expected value: ' + expectedInput +
        ' Actual value: ' + txtInput.value);

});


test("Substract Test", function () {
    expect(2);
    txtInput.value = '50';
    txtResult.value = '30';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '20';
    equal(txtResult.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
    var expectedInput = '0';
    equal(txtInput.value, expectedInput, 'Expected value: ' + expectedInput +
        ' Actual value: ' + txtInput.value);
});


test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '50';
    var btnCleanEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnCleanEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
});

test("Clear All Test", function () {
    expect(2);
    txtInput.value = '50';
    txtResult.value = '80';
    var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, "click");
    var expected1 = '0';
    var expected2 = '0';
    equal(txtInput.value, expected1, 'Expected value: ' + expected1 +
        ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected2, 'Expected value: ' + expected2 +
        ' Actual value: ' + txtResult.value);

});