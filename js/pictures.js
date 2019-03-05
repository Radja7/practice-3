'use strict';

(function () {

    var photos = window.preview.createPhotos(window.data.NAMBER_OF_PHOTOS);
    window.preview.getPhotosFragment(photos); // вставить миниатюры
    console.log(photos);

    window.picture.getBigPhoto(photos); // большое изображение

    document.querySelector('.social__comment-count').classList.add('visually-hidden');
    document.querySelector('.social__comments-loader').classList.add('visually-hidden');

    //////////////////////////////////////////////

})();
