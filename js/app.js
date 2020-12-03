const popover = document.querySelector('.popover');
const button = document.querySelector('.popover-button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (popover.classList.contains('popover-active')) {
    popover.classList.remove('popover-active');
  } else {
    popover.classList.add('popover-active');
    popover.style.top = `${(button.offsetTop - popover.offsetHeight)}px`;
    popover.style.left = `${(button.offsetWidth / 4 + button.offsetLeft)}px`;
  }
});
