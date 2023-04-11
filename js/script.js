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

  let works = [
    {
      projectname: 'Tonic',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML','CSS','JavaScript'],
      linklive: '#',
      linksource: '#'
    },
    {
      projectname: 'Multi Post Stories',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot2.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML','CSS','JavaScript'],
      linklive: '#',
      linksource: '#'      
    },
    {
      projectname: 'Tonic',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot3.png',
      featuredimagedesktop: './images/Snapshoot-Desktop1.png',
      technologies: ['HTML','CSS','JavaScript'],
      linklive: '#',
      linksource: '#'      
    },
    {
      projectname: 'Multi Post Stories',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot4.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML','CSS','JavaScript'],
      linklive: '#',
      linksource: '#'      
    }
  ]
  var worksgrid = document.getElementById('works-grid');
  let i = 0;
  for (i=0; i<works.length; i++){
    var codeblock = '<div id="works-1">' + '<div class="img-container"><img src="'+ works[i].featuredimage +'"></div>' + '<div class="img-container-desktop"><img class="desktop-image" src="'+ works[i].featuredimagedesktop +'"></div>' + '<div class="works-contents">' + '<h2 class="works-heading">'+ works[i].projectname +'</h2>' + '<div class="works-frame">' + '<label class="frame-text1">Canopy</label>' + '<div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">Back End Dev</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">2015</label></div><p class="works-paragraph">'+ works[i].projectdescription +'</p><ul class="works-list"><li><label class="list-buttons">'+ works[i].technologies[0] +'</label></li><li><label class="list-buttons">'+ works[i].technologies[1] +'</label></li><li><label class="list-buttons">'+ works[i].technologies[2] +'</label></li></ul><button id="project'+ i +'"class="works-button">See Project</button></div></div>'
    worksgrid.innerHTML += codeblock;
  }
  for (i = 0; i < works.length; i++){
    let buttonname = '#project' + i;
    var worksgrid1 = document.getElementById('project-popup1');
    let popupblock = '<div class="project-container"><div class="project-text-section"><div class="popup-heading"><h2 class="works-heading">'+ works[i].projectname + '</h2><a href="#" class="popup-cancel" id="closeproject"><img src="./images/icons/desktop-popup-cancel.png"></a></div><div class="works-frame"><label class="frame-text1">Canopy</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">Back End Dev</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">2015</label></div><div class="img-container"><img src="'+ works[i].featuredimage +'"></div><div class="img-container-desktop-popup"><img class="desktop-image" src="'+ works[i].featuredimagedesktop +'"></div></div><div class="popup-desktop-format"><p class="works-paragraph">'+ works[i].detaileddescription +'</p><div class="popup-desktop-format-2"><ul class="works-list"><li><label class="list-buttons">'+ works[i].technologies[0] +'</label></li><li><label class="list-buttons">'+ works[i].technologies[1] +'</label></li><li><label class="list-buttons">'+ works[i].technologies[2] +'</label></li></ul><div class="popup-divider"></div><div class="project-button-section"><a href='+ works[i].linklive +' class="works-button-1">See Live <img src="./images/icons/See-livve-icon.png"></img><a href="'+ works[i].linksource +'"class="works-button-1">See Source <img src="./images/icons/github-button.png"></img></div></div></div><div class="navigation-links"><a class="popup-links" id="previous" href="#">Previous Project</a><a class="popup-links" id="next" href="#">Next Project</a></div></div>'
    document.querySelector(buttonname).addEventListener('click', () => {
      document.querySelector('#project-popup1').classList.add('project-popup');
      document.querySelector('#project-popup1').classList.remove('project-popup-inactive');
      worksgrid1.innerHTML = popupblock;
      document.querySelector('#closeproject').addEventListener('click', () => {
        document.querySelector('#project-popup1').classList.add('project-popup-inactive');
        document.querySelector('#project-popup1').classList.remove('project-popup');
      });
      document.querySelector('#closeproject').addEventListener('click', () => {
        document.querySelector('#project-popup1').classList.add('project-popup-inactive');
        document.querySelector('#project-popup1').classList.remove('project-popup');
      });
      document.querySelector('#previous').addEventListener('click', () => {
        document.querySelector('#project-popup1').classList.add('project-popup-inactive');
        document.querySelector('#project-popup1').classList.remove('project-popup');
      });

    });
  }
});