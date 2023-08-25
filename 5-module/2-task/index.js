function toggleText() {
  let buttonToggleText = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  buttonToggleText.addEventListener('click', () => {
    text.toggleAttribute('hidden');
  })

};
