'use strict';

(function () {
    window.utilities = {

        // Генерируем случайное число
        getRandomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },

        // Возвращает случайное значение из массива
        getRandomItemOfArray: function (array) {
            return array[window.utilities.getRandomNumber(0, array.length)];
        },

        getRandomCount: function (array) {
            var FinishString = '';
            var length = Math.round(Math.random()) + 1;
            for (var i = 0; i < length; i++) {
                FinishString += window.utilities.getRandomItemOfArray(array);
            }

            return FinishString;
        },


    };
})();