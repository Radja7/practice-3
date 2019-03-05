'use strict';

(function () {
    var minValue = 25;
    var maxValue = 100;
    var stepValue = 25;
    var value = maxValue;
    var btnScaleDown = document.querySelector('.scale__control--smaller');
    var btnScaleUp = document.querySelector('.scale__control--bigger');
    var btnScaleValInput = document.querySelector('.scale__control--value');

    var pictureSource = document.querySelector('.preview');

    btnScaleDown.addEventListener('click', onScaleDown);
    btnScaleUp.addEventListener('click', onScaleUp);

    textValue();

    function textValue () {
        btnScaleValInput.setAttribute('value', value + '%');
    }

    function scalable () {
        document.querySelector('.preview').style.transform = 'scale(' + value / 100 + ')';
    }

    function onScaleDown () {
        value = value - stepValue;
        if (value <= minValue) {
            value = minValue;
        }
        textValue();
        scalable();
    }

    function onScaleUp () {
        value = value + stepValue;
        if (value >= maxValue) {
            value = maxValue;
        }
        textValue();
        scalable();
    }

})();