/// <reference path="_references.js" />
module('Calculator Test Suite', { setup: function () { calculatorNamespace.initialize(); } });

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    calculatorNamespace.initialize();
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
    ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
    ' Actual value: ' + $('#txtResult').val());
});


test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected +
        ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength,
        'Expected string length: ' + expectedLength +
        ' Actual value: ' + $('#txtInput').val().length);
    }
});

test("Add Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected +
    ' Actual value: ' + $('#txtResult').val());
    var expectedInput = '0';
    equal($('#txtInput').val(), expectedInput, 'Expected value: ' + expectedInput +
        ' Actual value: ' + $('#txtInput').val());

});


//test("Substract Test", function () {
//    expect(2);
//    txtInput.value = '50';
//    txtResult.value = '30';
//    var btnMinus = document.getElementById('btnMinus');
//    QUnit.triggerEvent(btnMinus, "click");
//    var expected = '20';
//    equal(txtResult.value, expected, 'Expected value: ' + expected +
//    ' Actual value: ' + txtResult.value);
//    var expectedInput = '0';
//    equal(txtInput.value, expectedInput, 'Expected value: ' + expectedInput +
//        ' Actual value: ' + txtInput.value);
//});


//test("Multiplication Test", function () {
//    expect(2);
//    txtInput.value = '10';
//    txtResult.value = '20';
//    var btnMultiplication = document.getElementById('btnMultiplication');
//    QUnit.triggerEvent(btnMultiplication, "click");
//    var expected = '200';
//    equal(txtResult.value, expected, 'Expected value: ' + expected +
//    ' Actual value: ' + txtResult.value);
//    var expectedInput = '0';
//    equal(txtInput.value, expectedInput, 'Expected value: ' + expectedInput +
//        ' Actual value: ' + txtInput.value);
//});


test("Division Test", function () {
    expect(2);
    txtInput.value = '100';
    txtResult.value = '25';
    var btnDivision = document.getElementById('btnDivision');
    QUnit.triggerEvent(btnDivision, 'click');
    var expected = '4';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    var expectedInput = '0';
    equal(txtInput.value, expectedInput, 'Expected value: ' + expectedInput + ' Actual value: ' + txtInput.value);
});

test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '50';
    var btnCleanEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnCleanEntry, "click");
    var expected = '0';
    equal(txtInput.val(), expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtInput.val());
});

test("Clear All Test", function () {
    expect(2);
    txtInput.value = '50';
    txtResult.value = '80';
    var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, "click");
    var expected1 = '0';
    var expected2 = '0';
    equal(txtInput.val(), expected1, 'Expected value: ' + expected1 +
        ' Actual value: ' + txtInput.val());
    equal(txtResult.val(), expected2, 'Expected value: ' + expected2 +
        ' Actual value: ' + txtResult.val());

});