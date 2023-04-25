window.onload = function () {
  document.querySelector("#authenticate").addEventListener("click", function () {
    this.style.backgroundColor = "red";
    this.innerHTML = "Demo Only! 😠";
    setTimeout(() => {
      this.style.backgroundColor = "lightblue";
      this.innerHTML = 'Authenticate <span><img src="https://www.svgrepo.com/download/83487/lock.svg" alt=""></span>';

    }, 700);
  });
  document.querySelector('.bozo img[alt="bb"]').addEventListener('click', function () {
    window.close()
  });
  
  document.querySelector('.bozo img[alt="nn"]').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
  });



  const card = document.querySelector("#card");
  const navbar = document.querySelector("#bozo");
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  navbar.addEventListener("mousedown", dragStart);
  navbar.addEventListener("mouseup", dragEnd);
  navbar.addEventListener("mousemove", drag);

  function dragStart(event) {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;

    isDragging = true;
  }

  function dragEnd(event) {
    initialX = currentX;
    initialY = currentY;

    isDragging = false;
  }

  function drag(event) {
    if (isDragging) {
      event.preventDefault();
      currentX = event.clientX - initialX;
      currentY = event.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, card);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
};


