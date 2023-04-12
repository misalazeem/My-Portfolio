const i = 0;
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

  const works = [
    {
      projectname: 'Tonic',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      projectname: 'Multi Post Stories',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot2.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      projectname: 'Tonic',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot3.png',
      featuredimagedesktop: './images/Snapshoot-Desktop1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      projectname: 'Multi Post Stories',
      projectdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/Snapshoot4.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
  ];
  const worksgrid = document.getElementById('works-grid');
  let popupblock = `<div id="container-exist" class="project-container"><div class="project-text-section"><div class="popup-heading"><h2 class="works-heading">${works[i].projectname}</h2><a href="#" class="popup-cancel" id="closeproject"><img src="./images/icons/desktop-popup-cancel.png"></a></div><div class="works-frame"><label class="frame-text1">Canopy</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">Back End Dev</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">2015</label></div><div class="img-container"><img src="${works[i].featuredimage}"></div><div class="img-container-desktop-popup"><img class="desktop-image" src="${works[i].featuredimagedesktop}"></div></div><div class="popup-desktop-format"><p class="works-paragraph">${works[i].detaileddescription}</p><div class="popup-desktop-format-2"><ul class="works-list"><li><label class="list-buttons">${works[i].technologies[0]}</label></li><li><label class="list-buttons">${works[i].technologies[1]}</label></li><li><label class="list-buttons">${works[i].technologies[2]}</label></li></ul><div class="popup-divider"></div><div class="project-button-section"><a href="${works[i].linklive}"class="works-button-1">See Live <img src="./images/icons/See-livve-icon.png"></img><a href="${works[i].linksource}"class="works-button-1">See Source <img src="./images/icons/github-button.png"></img></div></div></div><div class="navigation-links"><a class="popup-links" id="previous" href="#">Previous Project</a><a class="popup-links" id="next" href="#">Next Project</a></div></div>`;
  const worksgrid1 = document.getElementById('works-grid');
  for (let j = 0; j < works.length; j += 1) {
    const codeblock = `<div id="works-1"> <div class="img-container"><img src="${works[j].featuredimage}"></div><div class="img-container-desktop"><img class="desktop-image" src="${works[j].featuredimagedesktop}"></div> <div class="works-contents"> <h2 class="works-heading">${works[j].projectname}</h2> <div class="works-frame"> <label class="frame-text1">Canopy</label> <div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">Back End Dev</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">2015</label></div><p class="works-paragraph">${works[j].projectdescription}</p><ul class="works-list"><li><label class="list-buttons">${works[j].technologies[0]}</label></li><li><label class="list-buttons">${works[j].technologies[1]}</label></li><li><label class="list-buttons">${works[j].technologies[2]}</label></li></ul><button id="project${j}"class="works-button">See Project</button></div></div>`;
    worksgrid.innerHTML += codeblock;
  }

  for (let j = 0; j < works.length; j += 1) {
    popupblock = `<div id="project-popup${j}" class="project-popup-inactive"><div id="container-exist" class="project-container"><div class="project-text-section"><div class="popup-heading"><h2 class="works-heading">${works[j].projectname}</h2><a href="#" class="popup-cancel" id="closeproject${j}"><img src="./images/icons/desktop-popup-cancel.png"></a></div><div class="works-frame"><label class="frame-text1">Canopy</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">Back End Dev</label><div class="frame-counter"><img src="images/Counter.png"></div><label class="frame-text2">2015</label></div><div class="img-container"><img src="${works[j].featuredimage}"></div><div class="img-container-desktop-popup"><img class="desktop-image" src="${works[j].featuredimagedesktop}"></div></div><div class="popup-desktop-format"><p class="works-paragraph">${works[j].detaileddescription}</p><div class="popup-desktop-format-2"><ul class="works-list"><li><label class="list-buttons">${works[j].technologies[0]}</label></li><li><label class="list-buttons">${works[j].technologies[1]}</label></li><li><label class="list-buttons">${works[j].technologies[2]}</label></li></ul><div class="popup-divider"></div><div class="project-button-section"><a href="${works[j].linklive}"class="works-button-1">See Live <img src="./images/icons/See-livve-icon.png"></img><a href="${works[j].linksource}"class="works-button-1">See Source <img src="./images/icons/github-button.png"></img></div></div></div><div class="navigation-links"><a class="popup-links" id="previous${j}" href="#">Previous Project</a><a class="popup-links" id="next${j}" href="#">Next Project</a></div></div></div>`;
    worksgrid1.innerHTML += popupblock;
  }
  const defaultnext = `#next${works.length - 1}`;
  document.querySelector(defaultnext).classList.add('popup-links-disabled');
  document.querySelector(defaultnext).classList.remove('popup-links');
  document.querySelector('#previous0').classList.add('popup-links-disabled');
  document.querySelector('#previous0').classList.remove('popup-links');
  for (let j = 0; j < works.length; j += 1) {
    const projectname = `#project${j}`;
    let popupname = `#project-popup${j}`;
    let closebutton = `#closeproject${j}`;
    const nextbutton = `#next${j}`;
    const previousbutton = `#previous${j}`;
    document.querySelector(projectname).addEventListener('click', () => {
      popupname = `#project-popup${projectname[8]}`;
      document.querySelector(popupname).classList.add('project-popup');
      document.querySelector(popupname).classList.remove('project-popup-inactive');
    });
    document.querySelector(closebutton).addEventListener('click', () => {
      const prefix = nextbutton[5];
      popupname = `#project-popup${prefix}`;
      document.querySelector(popupname).classList.add('project-popup-inactive');
      document.querySelector(popupname).classList.remove('project-popup');
    });
    document.querySelector(nextbutton).addEventListener('click', () => {
      const prefix = nextbutton[5];
      const prefix1 = Number(prefix) + 1;
      popupname = `#project-popup${prefix}`;
      document.querySelector(popupname).classList.add('project-popup-inactive');
      document.querySelector(popupname).classList.remove('project-popup');
      popupname = `#project-popup${prefix1}`;
      document.querySelector(popupname).classList.add('project-popup');
      document.querySelector(popupname).classList.remove('project-popup-inactive');
    });
    document.querySelector(previousbutton).addEventListener('click', () => {
      const prefix = previousbutton[9];
      const prefix1 = Number(prefix) - 1;
      popupname = `#project-popup${prefix}`;
      document.querySelector(popupname).classList.add('project-popup-inactive');
      document.querySelector(popupname).classList.remove('project-popup');
      popupname = `#project-popup${prefix1}`;
      document.querySelector(popupname).classList.add('project-popup');
      document.querySelector(popupname).classList.remove('project-popup-inactive');
      closebutton = `#closeproject${prefix1}`;
    });
  }
});