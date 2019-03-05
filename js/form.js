'use strict';

(function () {
    var uploadFile = document.querySelector('#upload-file');
    var uploadFileClose = document.querySelector('#upload-cancel');
    var imgUpload = document.querySelector('.img-upload__overlay');
    var pictureSource = document.querySelector('.preview');
    var pinLineScale = document.querySelector('.effect-level__pin');
    var effectLine = document.querySelector('.effect-level__line');
    var effectActiveLine = document.querySelector('.effect-level__depth');
    var pinLineScaleSize = {
        WIDTH: 18,
        HEIGHT: 18
    };

    var inputValue = document.querySelector('.effect-level__value');


    window.defaultPositionPinLineScale = {
        get: function () {
            pinLineScale.style.left = '100%';
            effectActiveLine.style.width = '100%';
            inputValue.setAttribute('value', 100);
        }
    };

    uploadFile.addEventListener('change', function () {
        imgUpload.classList.remove('hidden');
    });

    uploadFileClose.addEventListener('click', function () {
        imgUpload.classList.add('hidden');
        uploadFile.value = '';
    });

    // pinLineScale.addEventListener('mouseup', function () {
    //     var defaultValpinLineScale = Math.round( (+getComputedStyle(pinLineScale).left.slice(0,-2)) / ((+getComputedStyle(effectLine).width.slice(0,-2)) / 100) );
    // });


    pinLineScale.addEventListener('mousedown', function (evt) {
        var effect = window.switchEffectType();

        evt.preventDefault();

        var startCoord = evt.clientX;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(moveEvt) {
            moveEvt.preventDefault();

            var shift = startCoord - moveEvt.clientX;
            var finishCoords = pinLineScale.offsetLeft - shift;


            //Ограничиваем перетаскивание в пределах полосы
            if (finishCoords < 0) {
                finishCoords = 0;
            } else if (finishCoords > effectLine.offsetWidth) {
                finishCoords = effectLine.offsetWidth;
            } else {
                startCoord = moveEvt.clientX;
            }

            pinLineScale.style.left = finishCoords + 'px';
            effectActiveLine.style.width = finishCoords + 'px';
            inputValue.setAttribute('value', Math.floor(finishCoords / (effectLine.offsetWidth) * 100));

            // уровень эффекта на изображении в пропорции от положения ползунка
            var maxValue = effect.MAX;
            var minValue = effect.MIN;

            var proportion = inputValue.value / 100 * (maxValue - minValue) + minValue;

            pictureSource.style.filter = effect.type + '(' + proportion + effect.unit + ')';

        }

        function onMouseUp(upEvt) {
            console.log('Up');
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

        }

        /////////////////////////////////////////



    });
})();