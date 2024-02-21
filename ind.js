function moveCard(event) {
    let card = event.currentTarget;
    let cardWidth = card.offsetWidth;
    let cardHeight = card.offsetHeight;
    let xOffset = event.clientX - card.getBoundingClientRect().left - cardWidth / 2;
    let yOffset = event.clientY - card.getBoundingClientRect().top - cardHeight / 2;
    card.style.transform = `perspective(1000px) rotateY(${xOffset / 10}deg) rotateX(${-yOffset / 10}deg) translateZ(20px)`;
  }
  
  document.querySelector('.card').onmouseleave = function() {
    this.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  }
  