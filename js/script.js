(function () {
    let $submitButton = document.querySelector('form .masthead__btn');
    let $email = document.querySelector('[name="email"]');

    $submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        [$email].forEach(function ($e) {
            if (!$e.value) {
                $e.closest('div').classList.add('has-error');
            } else {
                $e.closest('div').classList.remove('has-error');
            }
        });
    });
})();
