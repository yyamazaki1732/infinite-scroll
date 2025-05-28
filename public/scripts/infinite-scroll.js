import fullpage from "fullPage.js";
new fullpage("[data-fullpage-container]", {
  licenseKey: "5N97I-9A0MK-3QK68-LX1JK-LXZLP",
	// Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['first slide', 'second slide', 'third slide', 'fourth slide', 'fifth slide', 'sixth slide', 'seventh slide'],
	showActiveTooltip: false,
	slidesNavigation: false,
  // Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease', // cubic-bezier関数を使用して独自のものを作成可能
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	skipIntermediateItems: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,
	adjustOnNavChange: true,


  continuousVertical: true,

onLeave(origin, destination, direction) {
  const h2 = destination.item.querySelector("h2");
  console.log("onLeave", h2);
  if (h2) {
    h2.animate(
      [
        { transform: 'translateY(100px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      {
        duration: 600,
        fill: 'forwards',
        easing: 'ease-in-out'
      }
    );
  }
},

});