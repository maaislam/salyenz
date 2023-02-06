const navIntersecHelper = (entry) => {
  //console.log(entry);
  let animationEndTimer;
  const header = document.querySelector('header');
  const { isIntersecting, intersectionRatio } = entry;
  if (intersectionRatio === 1 && isIntersecting) {
    header.classList.remove('sticky-nav');
    header.classList.remove('slide-out-top');
  } else if (!isIntersecting) {
    clearTimeout(animationEndTimer);
    header.classList.add('sticky-nav');
    header.classList.remove('slide-out-top');
    header.classList.remove('reset-nav');
    return;
  } else {
    header.classList.remove('sticky-nav');
    header.classList.add('slide-out-top');
    animationEndTimer = setTimeout(() => {
      header.classList.remove('slide-out-top');
      header.classList.add('reset-nav');
    }, 500);
  }
};

export default navIntersecHelper;
