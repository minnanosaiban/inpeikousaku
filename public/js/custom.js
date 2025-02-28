document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.share-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(this.href, '_blank', 'width=600,height=400');
  });
});