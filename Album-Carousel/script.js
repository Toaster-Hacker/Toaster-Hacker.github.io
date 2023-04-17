class wrapper {
  static currentObject = 1;
}

container1 = document.getElementById("containerMiddle");
card1 = document.getElementById("cardMiddle");

    container1.addEventListener("mousemove", (rotate) => {
      if(wrapper.currentObject == 1) {
        let x = (rotate.pageX - innerWidth / 2) / 45;
        let y = (innerHeight / 2 - rotate.pageY) / 45;
        card1.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
      }
    });

    container1.addEventListener("mouseover", () => {
      if(wrapper.currentObject == 1) {
        card1.style.transition = "all 0.1s ease";
      }
    });

    container1.addEventListener("mouseout", () => {
      if(wrapper.currentObject == 1) {
        card1.style.transform = "rotateY(0deg) rotateX(0deg)";
        card1.style.transition = "all 0.5s ease";
      }
    });


container0 = document.getElementById("containerLeft");
card0 = document.getElementById("cardLeft");

    container0.addEventListener("mousemove", (rotate) => {
      if(wrapper.currentObject == 0) {
        let x = (rotate.pageX - innerWidth / 2) / 45;
        let y = (innerHeight / 2 - rotate.pageY) / 45;
        card0.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
      }
    });

    container0.addEventListener("mouseover", () => {
      if(wrapper.currentObject == 0) {
        card0.style.transition = "all 0.1s ease";
      }
    });

    container0.addEventListener("mouseout", () => {
      if(wrapper.currentObject == 0) {
        card0.style.transform = "rotateY(0deg) rotateX(0deg)";
        card0.style.transition = "all 0.5s ease";
      }
    });


container2 = document.getElementById("containerRight");
card2 = document.getElementById("cardRight");

    container2.addEventListener("mousemove", (rotate) => {
      if(wrapper.currentObject == 2) {
        let x = (rotate.pageX - innerWidth / 2) / 45;
        let y = (innerHeight / 2 - rotate.pageY) / 45;
        card2.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
      }
    });

    container2.addEventListener("mouseover", () => {
      if(wrapper.currentObject == 2) {
        card2.style.transition = "all 0.1s ease";
      }
    });

    container2.addEventListener("mouseout", () => {
      if(wrapper.currentObject == 2) {
        card2.style.transform = "rotateY(0deg) rotateX(0deg)";
        card2.style.transition = "all 0.5s ease";
      }
    });



function myFunction(input) {

  if(input == wrapper.currentObject) {
    return;
  }

  let containerLeft = document.getElementById("containerLeft");
  let cardLeft = document.getElementById("cardLeft");

  let containerMiddle = document.getElementById("containerMiddle");
  let cardMiddle = document.getElementById("cardMiddle");
  
  let containerRight = document.getElementById("containerRight");
  let cardRight = document.getElementById("cardRight");

  if(input < wrapper.currentObject && !(input==0 && wrapper.currentObject==2) || (input==2 && wrapper.currentObject==0)) {
    containerRight.id = "containerLeft";
    cardRight.id = "cardLeft";
  
    containerMiddle.id = "containerRight";
    cardMiddle.id = "cardRight";
  
    containerLeft.id = "containerMiddle";
    cardLeft.id = "cardMiddle";

    wrapper.currentObject = input;
    return;
  }

  else {
    containerRight.id = "containerMiddle";
    cardRight.id = "cardMiddle";
  
    containerMiddle.id = "containerLeft";
    cardMiddle.id = "cardLeft";
  
    containerLeft.id = "containerRight";
    cardLeft.id = "cardRight";
  
    wrapper.currentObject = input;
    return;
  }
}