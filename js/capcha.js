grecaptcha.ready(function() {
    grecaptcha.execute('6LdQn0YcAAAAAJk2nWXWV2nkZ17UTwgB1nEMDmsD', { action: 'requestf_action' }).then(function(token) {
        var recaptchaResponse = document.getElementById('recaptchaResponse1');
        recaptchaResponse.value = token;
    });
});