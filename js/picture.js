'use strict';

(function () {
    var commentsBlock = document.querySelector('.social__comments');
    var bigPhoto = document.querySelector('.big-picture');
    //bigPhoto.classList.remove('hidden');

    window.picture = {

        getComments: function  (arr) {
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < 4; i++) {
                //var commentsItem = commentTemplate.cloneNode(true);
                //commentTemplate.querySelector('.social__picture').setAttribute('src', 'img/avatar-' + 6 + '.svg');

                var numberPic = window.utilities.getRandomNumber(1, 6);
                var comments = arr[i].comments;

                var commentTemplate = '<li class="social__comment social__comment--text"> <img class="social__picture" src="img/avatar-' + numberPic + '.svg" alt="Аватар комментатора фотографии" width="35" height="35"><p class="social__text">' + comments + '</p></li>';
                console.log(commentTemplate);
                //fragment.appendChild(commentTemplate);

                commentsBlock.insertAdjacentHTML('afterBegin', commentTemplate);
            }

            //commentsBlock.appendChild(fragment);
        },

        getBigPhoto: function (charactersPhoto) {
            bigPhoto.querySelector('.big-picture__img').querySelector('img').setAttribute('src', charactersPhoto[0].url);
            bigPhoto.querySelector('.likes-count').textContent = charactersPhoto[0].likes;
            //bigPhoto.querySelector('.comments-count').textContent = charactersPhoto[0].comments;
            bigPhoto.querySelector('.social__caption').textContent = charactersPhoto[0].description;

            window.picture.getComments(charactersPhoto);
        },

    };
})();