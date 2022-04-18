/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/about-page.js":
/*!*******************************!*\
  !*** ./dist/js/about-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\nconst aboutPage = () => {\n  const aboutPage = document.createElement(\"section\");\n  aboutPage.classList.add(\"about-page\", \"flex\", \"py-1\");\n\n  const aboutBody = document.createElement(\"div\");\n  aboutBody.classList.add(\"about-body\", \"flex\", \"py-1\");\n  aboutPage.append(aboutBody);\n\n  const title = document.createElement(\"h1\");\n  title.classList.add(\"my-1\");\n  title.textContent = \"Please enjoy our finest baked goods!\";\n  aboutBody.append(title);\n\n  const subTitle = document.createElement(\"h2\");\n  subTitle.classList.add(\"my-1\");\n  subTitle.textContent = \"Baked by the love of our best bakers\";\n  aboutBody.append(subTitle);\n\n  const deliverooLink = document.createElement(\"a\");\n  deliverooLink.classList.add(\"btn\");\n  deliverooLink.textContent = \"Order Now\";\n  aboutPage.append(deliverooLink);\n  deliverooLink.addEventListener(\"click\", () => {\n    window.open(\n      \"https://deliveroo.co.uk/menu/london/new-malden/thebakesale-ltd\"\n    );\n  });\n\n  return aboutPage;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./dist/js/about-page.js?");

/***/ }),

/***/ "./dist/js/contact.js":
/*!****************************!*\
  !*** ./dist/js/contact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n    const contact = document.createElement('section')\n    contact.classList.add('contact','flex')\n\n    const uList = document.createElement('ul')\n    uList.classList.add('flex');\n    contact.append(uList)\n\n    const facebook = document.createElement('li')\n    facebook.textContent = 'Facebook'\n    const fbIcon = document.createElement('i')\n    fbIcon.classList.add('fab', 'fa-facebook')\n\n    const twitter = document.createElement('li')\n    twitter.textContent = 'Twitter'\n    const twitterIcon = document.createElement('i')\n    twitterIcon.classList.add('fab', 'fa-twitter')\n\n    const insta = document.createElement('li')\n    insta.textContent = 'Instagram'\n    const instaIcon = document.createElement('i')\n    instaIcon.classList.add('fab', 'fa-instagram')\n\n    const deliveroo = document.createElement('li')\n    deliveroo.textContent = 'Deliveroo'\n\n    uList.append(facebook)\n    uList.append(twitter)\n    uList.append(insta)\n    uList.append(deliveroo)\n\n    facebook.append(fbIcon)\n    twitter.append(twitterIcon)\n    insta.append(instaIcon)\n\n    return contact\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./dist/js/contact.js?");

/***/ }),

/***/ "./dist/js/header.js":
/*!***************************!*\
  !*** ./dist/js/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = () => {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\", \"flex\");\n\n  const flexContainer = document.createElement(\"div\");\n  flexContainer.classList.add(\"flex\");\n  header.append(flexContainer);\n\n  const logoContainer = document.createElement(\"div\");\n  logoContainer.classList.add(\"flex\", \"logo\");\n  flexContainer.append(logoContainer);\n\n  const headerText = document.createElement(\"h1\");\n  headerText.classList.add(\"my-1-2\", \"py-1-2\");\n  headerText.textContent = \"The Baked Sale\";\n  logoContainer.append(headerText);\n\n  const img = document.createElement(\"img\");\n  img.classList.add(\"my-1-2\", \"py-1-2\");\n  img.src = \"images/icon_logo.png\";\n  img.alt = \"Logo\";\n  logoContainer.append(img);\n\n  const navbarContainer = document.createElement(\"div\");\n  navbarContainer.classList.add(\"navbar\", \"flex\");\n  flexContainer.append(navbarContainer);\n\n  const navbar = document.createElement(\"navbar\");\n  navbar.classList.add(\"flex\");\n  navbarContainer.append(navbar);\n\n  const uList = document.createElement(\"ul\");\n  uList.classList.add(\"flex\");\n  navbar.append(uList);\n\n  const about = document.createElement(\"li\");\n  about.id = \"aboutBtn\";\n  about.textContent = \"Home\";\n  uList.append(about);\n\n  const menu = document.createElement(\"li\");\n  menu.id = \"menuBtn\";\n  menu.textContent = \"Menu\";\n  uList.append(menu);\n\n  const contact = document.createElement(\"li\");\n  contact.id = \"contactBtn\";\n  contact.textContent = \"Contact\";\n  uList.append(contact);\n\n  const mobileIcon = document.createElement(\"div\");\n  // mobileIcon.classList.add(\"fab\", \"fa-facebook\");\n  uList.append(mobileIcon);\n\n  return header;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./dist/js/header.js?");

/***/ }),

/***/ "./dist/js/menu.js":
/*!*************************!*\
  !*** ./dist/js/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n  const menu = document.createElement(\"section\");\n  menu.classList.add(\"menu\", \"flex\");\n\n  // Create title dom\n  const menuTitle = document.createElement(\"h1\");\n  menuTitle.textContent = \"Menu \";\n  menu.append(menuTitle);\n  const cookieIcon = document.createElement(\"i\");\n  cookieIcon.classList.add(\"fas\", \"fa-cookie-bite\");\n  menuTitle.append(cookieIcon);\n\n  //Create title underline dom\n  const titleUnderline = document.createElement(\"div\");\n  menuTitle.append(titleUnderline);\n  titleUnderline.classList.add(\"underline\");\n\n  //Create menu dom\n  const menuContainer = document.createElement(\"div\");\n  menu.append(menuContainer);\n  menuContainer.classList.add(\"flex\", \"menu-container\", \"my-1-2\", \"py-1-2\");\n\n  //Menu items\n  const menuItems = [\n    {\n      title: \"Mixed Brownie Boxes\",\n      price: \"£15.50\",\n      description: \"Box of mixed brownies\",\n      img: \"images/brownies.jpg\",\n    },\n    {\n      title: \"Gooey Cookies\",\n      price: \"£12.50\",\n      description: \"Box of our best yet mixed gooey cookies\",\n      img: \"images/cookies.jpg\",\n    },\n    {\n      title: \"Colourful Cupcakes\",\n      price: \"£14.95\",\n      description: \"Box of colourful cupboards, spongey and tasty\",\n      img: \"images/cupcakes.jpg\",\n    },\n  ];\n\n  //Loop menu items to create dom content\n  for (let i = 0; i < menuItems.length; i++) {\n    const menuItem = document.createElement(\"div\");\n    menuContainer.append(menuItem);\n    menuItem.classList.add(\"flex\", \"menu-item\");\n    const menuImg = document.createElement(\"img\");\n    menuImg.classList.add(\"menu-img\");\n    const menuText = document.createElement(\"div\");\n    const title = document.createElement(\"h4\");\n    const description = document.createElement(\"p\");\n    const span = document.createElement(\"span\");\n    menuItem.append(menuImg, menuText);\n    menuText.append(title, span, description);\n    span.textContent = `${menuItems[i].price}`;\n    title.textContent = `${menuItems[i].title}`;\n    description.textContent = `${menuItems[i].description}`;\n    menuImg.src = `${menuItems[i].img}`;\n  }\n  return menu;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./dist/js/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_js_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/js/contact */ \"./dist/js/contact.js\");\n/* harmony import */ var _dist_js_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/js/menu */ \"./dist/js/menu.js\");\n/* harmony import */ var _dist_js_about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/js/about-page */ \"./dist/js/about-page.js\");\n/* harmony import */ var _dist_js_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/js/header */ \"./dist/js/header.js\");\n\n\n\n\n\n// Initial Load\nconst content = document.querySelector(\"#content\");\ncontent.append((0,_dist_js_header__WEBPACK_IMPORTED_MODULE_3__.header)());\ncontent.append((0,_dist_js_about_page__WEBPACK_IMPORTED_MODULE_2__.aboutPage)());\n\n// Tab Button Functions\nconst aboutBtn = document.querySelector(\"#aboutBtn\");\nconst contactBtn = document.querySelector(\"#contactBtn\");\nconst menuBtn = document.querySelector(\"#menuBtn\");\n\naboutBtn.addEventListener(\"click\", () => {\n  content.childNodes[1].remove();\n  content.append((0,_dist_js_about_page__WEBPACK_IMPORTED_MODULE_2__.aboutPage)());\n});\n\ncontactBtn.addEventListener(\"click\", () => {\n  content.childNodes[1].remove();\n  content.append((0,_dist_js_contact__WEBPACK_IMPORTED_MODULE_0__.contact)());\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  content.childNodes[1].remove();\n  content.append((0,_dist_js_menu__WEBPACK_IMPORTED_MODULE_1__.menu)());\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;