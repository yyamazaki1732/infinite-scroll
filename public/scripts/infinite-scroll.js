import fullpage from "fullPage.js";
new fullpage("#fullpage", {
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
});