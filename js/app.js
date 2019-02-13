var status = 0,
  currentModal = "";
// algorithm function for homepage animated text
var animateText = function() {
    switch (status) {
      case '0':
        document.getElementById('text-anim').innerText = 'We deliver nourishing delicious meals1';
        document.getElementById('jumbo').classList.remove('bg');
        document.getElementById('jumbo').classList.add('bg2');
        status = 1;
        break;
      case '1':
        document.getElementById('text-anim').innerText = 'You can check for deatailed method of preparation2';
        document.getElementById('jumbo').classList.remove('bg2');
        document.getElementById('jumbo').classList.add('bg3');
        status = 2;
        break;
      case '2':
        document.getElementById('text-anim').innerText = 'Our service is cheap and reliable3';
        document.getElementById('jumbo').classList.remove('bg3');
        document.getElementById('jumbo').classList.add('bg4');
        status = 3;
        break;
      case '3':
        document.getElementById('text-anim').innerText = 'A package delivery you can never resist4';
        document.getElementById('jumbo').classList.remove('bg4');
        document.getElementById('jumbo').classList.add('bg');
        status = 0;
        break;
      default:
        document.getElementById('text-anim').innerText = 'A package delivery solution you can trust5';
        document.getElementById('jumbo').classList.remove('bg5');
        document.getElementById('jumbo').classList.add('bg');
        status = 0;
    }
  },
  // function for page animation and modal script
  startAnimation = function()  {
    const startAnim = setInterval(animateText, 3000);
     const classname = document.getElementsByClassName('trigger');
     Array.from(classname).forEach((element) => {
       element.addEventListener('click', toggleModal);
     });
     const dismissname = document.getElementsByClassName('dismiss');
     Array.from(dismissname).forEach((element) => {
       element.addEventListener('click', dismissModal);
     });
  },
  // function for toggling login and signup modal
  toggleModal = (e) => {
    const elem = e.target.getAttribute('data-modal');
    if (currentModal && currentModal !== elem) {
      document.getElementById(currentModal).classList.add('hidden');
      document.getElementById(elem).classList.remove('hidden');
    } else {
      document.getElementById(elem).classList.toggle('hidden');
    }
    currentModal = elem;
  },
  // function for dismissing modal
  dismissModal = () => {
    if (currentModal) {
      document.getElementById(currentModal).classList.add('hidden');
      currentModal = null;
    }
  };
  // onload methods for ui animation and signup and login modal events
window.onload = () => {
    //checkIt();
    startAnimation();
  };