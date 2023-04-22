window.addEventListener("load", function(){
    /* ========= WEBSITE LOADER ========= */
    const loader = document.getElementById("loader");
    const loaderParagraph = document.getElementById("loader-paragraph");
    const loaderHeadings = document.querySelectorAll(".loader-heading");

    setTimeout(() => {
        anime({
            targets: loaderParagraph,
            opacity: [1, 0],
            translateY: [0, 20],
            duration: 1000,
            easing: "easeInOutQuad",
        });
    }, 1500);

    setTimeout(() => {
        anime.timeline({loop:false})
        .add({
        targets: loaderHeadings[0],
        opacity: [1, 0],
        duration: 500,
        easing: "easeInOutQuad",
        })
        .add({
            targets: loaderHeadings[1],
            opacity: [1, 0],
            duration: 500,
            easing: "easeInOutQuad",
        })
        .add({
            targets: loaderHeadings[2],
            opacity: [1, 0],
            duration: 500,
            easing: "easeInOutQuad",
        })
    }, 2500);

    setTimeout(() => {
        anime({
            targets: loader,
            opacity: [1, 0],
            duration: 1000,
            easing: "easeInOutQuad",
        });
    }, 4000);

    this.setTimeout(() =>{
        loader.classList.add("hidden");
    }, 5000);

    /* ========= GRADIENT ========= */
    new Gradient({
        canvas: '#home-canvas',
        colors: ['#171717', '#262626', '#404040', '#525252',]
    });

    /* ========= NAVIGATION ========= */
    document.getElementById("info-button").onclick = function() {overlayToggle()};
    const infoOverlay = document.getElementById("info-overlay");
    const buttons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll('.section');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const selectedButton = document.querySelector(".nav-button.underline");
          if (selectedButton) {
            selectedButton.classList.remove('underline');
          }
          button.classList.add('underline');
          const sectionId = button.getAttribute('href').substring(1);
          sections.forEach((section) => {
            if (section.id === sectionId) {
                anime({
                    targets: section,
                    opacity: [0, 1],
                    duration: 1500,
                    easing: "easeInOutQuad",
                });
                section.classList.remove('hidden');
            } else {
                section.classList.add("hidden")
            }
          });
        });
      });
    function overlayToggle() {
        if (infoOverlay.style.opacity === "0") {
            anime({
                targets: infoOverlay,
                opacity: [0, 1],
                duration: 500,
                easing: "easeInOutQuad",
            });
        } else {
            anime({
                targets: infoOverlay,
                opacity: [1, 0],
                duration: 500,
                easing: "easeInOutQuad",
            });
        }
    };
    /* ========= DARKMODE ========= */
    document.getElementById("darkmode-enable").onclick = function() {darkmodeEnable()};
    document.getElementById("darkmode-disable").onclick = function() {darkmodeDisable()};

    function darkmodeEnable() {
        if (!document.documentElement.classList.contains("dark")){
            document.documentElement.classList.toggle("dark");
        }
    };

    function darkmodeDisable() {
        if (document.documentElement.classList.contains("dark")){
            document.documentElement.classList.toggle("dark");
        }
    };
});