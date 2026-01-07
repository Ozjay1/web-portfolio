// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
const menuIcons = () => {
  const menuItems = document.querySelectorAll('.menuItem');
  const menuData = {
    about: {
      id: 'About',
      data: '<img class="navIcons" src="pictures//profileW.png" />',
    },
    projects: {
      id: 'Projects',
      data: '<img class="navIcons" src="pictures//projectsW.png" />',
    },
    skills: {
      id: 'Skills',
      data: '<img class="navIcons" src="pictures//skillsW.png"/>',
    }
  };

  if (window.innerWidth >= 300 && window.innerWidth < 500) {
    menuItems.forEach(item => {
      const text = item.textContent.trim();
      Object.values(menuData).forEach(config => {
        if (text.includes(config.id)) {
          item.innerHTML = config.data;
        }
      });
    });
  }
};
menuIcons();
    
  const container = document.querySelector('.projectDisplay');
  if (!container) return;


  const originalWidth = container.scrollWidth / 2;
  
let scrollLeft = 0;
  const speed = 1;
  let isPaused = false;
  let pauseTimeout;

  function animate() {
    if (!isPaused) {
      scrollLeft += 1;
      if (scrollLeft >= originalWidth) {
        scrollLeft -= 1; 
      }
      container.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(animate);
  }

  animate();

  const pauseDuration = 3000;
  function pauseAnimation() {
    isPaused = true;
    clearTimeout(pauseTimeout)
    pauseTimeout = setTimeout(() => {
      isPaused = false;
    }, pauseDuration);
  }

  container.addEventListener('wheel', pauseAnimation);
  container.addEventListener('touchstart', pauseAnimation);
  container.addEventListener('touchmove', pauseAnimation);
});
        }
      });
    });
  }
};
menuIcons();
    
  const container = document.querySelector('.projectDisplay');
  if (!container) return;


  const originalWidth = container.scrollWidth / 2;
  
let scrollLeft = 0;
  const speed = 1;
  let isPaused = false;
  let pauseTimeout;

  function animate() {
    if (!isPaused) {
      scrollLeft += 1;
      if (scrollLeft >= originalWidth) {
        scrollLeft -= 1; 
      }
      container.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(animate);
  }

  animate();

  const pauseDuration = 3000;
  function pauseAnimation() {
    isPaused = true;
    clearTimeout(pauseTimeout)
    pauseTimeout = setTimeout(() => {
      isPaused = false;
    }, pauseDuration);
  }

  container.addEventListener('wheel', pauseAnimation);
  container.addEventListener('touchstart', pauseAnimation);
  container.addEventListener('touchmove', pauseAnimation);
});
