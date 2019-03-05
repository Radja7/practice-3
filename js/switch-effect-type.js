'use strict';

(window.switchEffectType = function () {

    var effectsSource = {
        none: {type: 'none', MAX: 'none'},
        chrome: {type: 'grayscale', MIN: 0, MAX: 1, unit: ''},
        sepia: {type: 'sepia', MIN: 0, MAX: 1, unit: ''},
        marvin: {type: 'invert', MIN: 0, MAX: 100, unit: '%'},
        phobos: {type: 'blur', MIN: 0, MAX: 3, unit: 'px'},
        heat: {type: 'brightness', MIN: 0, MAX: 3, unit: ''},
    };


    var effectItem = document.querySelectorAll('.effects__item');

    var pictureSource = document.querySelector('.preview');
    var effectRangeBlock = document.querySelector('.effect-level');
    var effectName = document.querySelectorAll('.effects__radio');

    effectItem.forEach(function (element, index) {
        activeEffect(index);
    });

    function activeEffect (num) {
        var effectLink = effectsSource[effectName[num].value];


        effectItem[num].addEventListener('change', function () {
            console.log(effectLink);
           if(num === 0) {
               effectRangeBlock.classList.add('hidden');
               pictureSource.style.filter = '';
           } else {
               effectRangeBlock.classList.remove('hidden');
               pictureSource.style.filter = effectLink.type + '(' + effectLink.MAX + effectLink.unit + ')';
           }

           var findedClass = pictureSource.querySelector('img').classList + '';
           pictureSource.querySelector('img').classList.remove(findedClass.match(/effects__preview--\w+\b/));
           pictureSource.querySelector('img').classList.add('effects__preview--' + effectLink.type);

           window.defaultPositionPinLineScale.get();
        });

    }

    return effectsSource[document.querySelector('.effects__item input:checked').value];
})();