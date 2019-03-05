'use strict';

(function () {
    var photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
    var photosContainer = document.querySelector('.pictures');

    window.preview = {

        // Возвращаем ссылку на фотографию
        getPhotoUrl: function (indexPhotoUrl) {
            return window.data.PHOTOS_URL + (indexPhotoUrl + 1) + '.jpg';
        },

        createPhotos: function (photosCount) {
            var photos = [];

            for (var i = 0; i < photosCount; i++) {
                var onePhoto = {
                    url: window.preview.getPhotoUrl(i),
                    likes: window.utilities.getRandomNumber(window.data.LIKES_COUNT[0], window.data.LIKES_COUNT[1]),
                    comments: window.utilities.getRandomCount(window.data.COMMENTS),
                    description: window.utilities.getRandomItemOfArray(window.data.DESCRIPTIONS)
                };

                photos.push(onePhoto);
            }

            return photos;
        },

        renderPhoto: function (charactersPhoto) {
            var photoElement = photoTemplate.cloneNode(true);

            photoElement.querySelector('.picture__img').setAttribute('src', charactersPhoto.url);
            photoElement.querySelector('.picture__likes').textContent = charactersPhoto.likes;
            photoElement.querySelector('.picture__comments').textContent = charactersPhoto.comments;

            return photoElement;
        },

        getPhotosFragment: function (photos) {
            var fragment = document.createDocumentFragment();

            for(var i = 0; i < photos.length; i++) {
                fragment.appendChild(window.preview.renderPhoto(photos[i]));
            }

            photosContainer.appendChild(fragment);
        }

    };
})();