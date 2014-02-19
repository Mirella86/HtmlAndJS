/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = calculatorNamespace;

    ns.initialize = function () {
        var calculator = new ns.Calculator();

        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntryClick);
        $('#btnClear').on('click', calculator.clearAllClick);
        $('#btnMultiplication').on('click', calculator.multiplicationClick);
        $('#btnDivision').on('click', calculator.divisionClick);

        calculator.clearAllClick();
    }

    ns.Calculator = (function () {

        function Calculator() {
        }

        Calculator.prototype.numberClick = function () {
            $('#txtInput').val($('#txtInput').val == '0' ? $(this).text() : $('#txtInput').val() + $(this).text());
        };

        Calculator.prototype.plusClick = function () {
            $('#txtResult').val(Number($('#txtInput').val()) + Number($('#txtResult').val()));
            Calculator.prototype.clearEntryClick();
        };

        Calculator.prototype.minusClick = function () {
            $('#txtResult').val(Number($('#txtInput').val()) - Number($('#txtResult').val()));
            Calculator.prototype.clearEntryClick();
        };

        Calculator.prototype.multiplicationClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) * Number($('#txtInput').val()));
            Calculator.prototype.clearEntryClick();
        };

        Calculator.prototype.divisionClick = function () {
            $('#txtResult').val(Number($('#txtInput').val()) / Number($('#txtResult').val()));
            Calculator.prototype.clearEntryClick();
        };

        Calculator.prototype.clearEntryClick = function () {
            $('#txtInput').val('0');
        };

        Calculator.prototype.clearAllClick = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        };

        return Calculator;
    }());

})();