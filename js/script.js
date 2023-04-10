document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#hamburger').addEventListener('click', () => {
    document.querySelector('#mobilemenu').classList.remove('mobile-menu-inactive');
    document.querySelector('#mobilemenu').classList.add('mobile-menu');
  });

  document.querySelector('.disabled-button').addEventListener('click', () => {
    document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
    document.querySelector('#mobilemenu').classList.remove('mobile-menu');
  });

  document.querySelector('#button1').addEventListener('click', () => {
    document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
    document.querySelector('#mobilemenu').classList.remove('mobile-menu');
  });

  document.querySelector('#button2').addEventListener('click', () => {
    document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
    document.querySelector('#mobilemenu').classList.remove('mobile-menu');
  });

  document.querySelector('#button3').addEventListener('click', () => {
    document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
    document.querySelector('#mobilemenu').classList.remove('mobile-menu');
  });
});