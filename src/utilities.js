export function isMobile() {
  const winWidth = window.innerWidth;
  console.log('windows width check');
  return winWidth <= 768 ? true : false;
}

export function debounce(func, wait) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}
