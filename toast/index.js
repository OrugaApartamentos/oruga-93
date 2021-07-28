function showToastError(message) {
    document.getElementById('toast-error-message').innerText = message;
    $('.toast-error').toast('show');
}
function showToastSuccess(message) {
    document.getElementById('toast-success-message').innerText = message;
    $('.toast-success').toast('show');
}