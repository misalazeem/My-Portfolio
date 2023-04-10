document.addEventListener('DOMContentLoaded', function() {

	document.querySelector('#hamburger').addEventListener('click', function() {        
		document.querySelector('#mobilemenu').classList.remove('mobile-menu-inactive');
        document.querySelector('#mobilemenu').classList.add('mobile-menu');
	});

    document.querySelector('.disabled-button').addEventListener('click', function() {
		document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
        document.querySelector('#mobilemenu').classList.remove('mobile-menu');
	});

    document.querySelector('#button1').addEventListener('click', function() {
		document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
        document.querySelector('#mobilemenu').classList.remove('mobile-menu');
	});

    document.querySelector('#button2').addEventListener('click', function() {
		document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
        document.querySelector('#mobilemenu').classList.remove('mobile-menu');
	});

    document.querySelector('#button3').addEventListener('click', function() {
		document.querySelector('#mobilemenu').classList.add('mobile-menu-inactive');
        document.querySelector('#mobilemenu').classList.remove('mobile-menu');
	});
	
});