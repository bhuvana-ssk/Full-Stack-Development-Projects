/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.querySelector(\"form\");\r\neField = form.querySelector(\".email\"),\r\neInput = eField.querySelector(\"input\"),\r\npField = form.querySelector(\".password\"),\r\npInput = pField.querySelector(\"input\");\r\n\r\nform.onsubmit = (e)=>{\r\n  e.preventDefault();\r\n  (eInput.value == \"\") ? eField.classList.add(\"shake\", \"error\") : checkEmail();\r\n  (pInput.value == \"\") ? pField.classList.add(\"shake\", \"error\") : checkPass();\r\n\r\n  setTimeout(()=>{ \r\n    eField.classList.remove(\"shake\");\r\n    pField.classList.remove(\"shake\");\r\n  }, 500);\r\n\r\n  eInput.onkeyup = ()=>{checkEmail();} \r\n  pInput.onkeyup = ()=>{checkPass();} \r\n\r\n  function checkEmail(){ \r\n    let pattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/; \r\n    if(!eInput.value.match(pattern)){ \r\n      eField.classList.add(\"error\");\r\n      eField.classList.remove(\"valid\");\r\n      let errorTxt = eField.querySelector(\".error-txt\");\r\n      (eInput.value != \"\") ? errorTxt.innerText = \"Enter a valid email address\" : errorTxt.innerText = \"Email can't be blank\";\r\n    }else{ \r\n      eField.classList.remove(\"error\");\r\n      eField.classList.add(\"valid\");\r\n    }\r\n  }\r\n\r\n  function checkPass(){\r\n    if(pInput.value == \"\"){\r\n      pField.classList.add(\"error\");\r\n      pField.classList.remove(\"valid\");\r\n    }else{ \r\n      pField.classList.remove(\"error\");\r\n      pField.classList.add(\"valid\");\r\n    }\r\n  }\r\n\r\n  if(!eField.classList.contains(\"error\") && !pField.classList.contains(\"error\")){\r\n    window.location.href = form.getAttribute(\"action\");\r\n    window.alert(\"Logged In Successfully!!\");\r\n  }\r\n}\n\n//# sourceURL=webpack://login/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;