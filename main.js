(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{kO:()=>J,E4:()=>N});var t={url:"https://nomoreparties.co/v1/plus-cohort-9",headers:{authorization:"42de998b-e70a-417c-91c6-8efdcf613573","Content-type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;t?(e.classList.remove(n.inactiveButtonClass),e.disabled=!1):(e.classList.add(n.inactiveButtonClass),e.disabled="disabled")},u=document.querySelector(".popup_type_profile"),a=document.querySelector(".popup_type_image"),i=document.querySelector(".profile__edit-button"),l=document.querySelector(".input__text_type_username"),d=document.querySelector(".input__text_type_job"),s=document.querySelector(".profile__name"),p=document.querySelector(".profile__job"),f=u.querySelector(".popup__form"),_=document.querySelector(".profile__avatar"),y=document.querySelector(".popup_type_avatar"),m=y.querySelector(".input__link"),v=y.querySelector(".popup__form"),h=document.querySelector("#card-template").content.querySelector(".card"),S=document.querySelector(".cards"),b=document.querySelector(".popup_type_card"),q=b.querySelector(".popup__form"),g=q.querySelector(".input__name"),E=q.querySelector(".input__link"),L=a.querySelector(".card__image"),k=(document.querySelector(".card__volume-likes"),b.querySelector(".popup__button")),C=u.querySelector(".popup__button"),x=y.querySelector(".popup__button"),A={formSelector:".popup__form",inputSelector:".popup__line",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup_line-error"};function j(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w),document.addEventListener("mouseup",B)}function O(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w),document.removeEventListener("mouseup",B)}function w(e){"Escape"===e.key&&O(document.querySelector(".popup_opened"))}function B(e){e.target.classList.contains("popup_opened")&&(document.querySelector(".popup_opened"),O(e.target))}var P=function(e){var t=h.cloneNode(!0),n=t.querySelector(".card__photo"),r=t.querySelector(".card__button-delete");return t.querySelector(".card__title").textContent=e.name,n.src=e.link,n.alt=e.name,n.id=e._id,t.querySelector(".card__volume-likes").textContent=e.likes.length,n.addEventListener("click",(function(e){L.src=e.target.src,L.alt=e.target.alt,a.querySelector(".card__subtitle").textContent=e.target.closest(".card").querySelector(".card__title").textContent,j(a)})),t.querySelector(".card__img").addEventListener("click",(function(n){N(n,e,t)})),e.owner._id!=s.id&&r.classList.toggle("card__button-delete_disabled"),r.addEventListener("click",(function(t){J(t,e)})),T(e,t),t},T=function(e,t){e.likes.some((function(e){return e._id===s.id}))&&t.querySelector(".card__img").classList.add("card__img_active")};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){r(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=e.querySelectorAll(t.inputSelector),o=e.querySelector(t.submitButtonSelector);r(n).forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){var r=e.validity.valid,o=t.querySelector("#".concat(e.id,"-error"));r?function(e,t,n){t.classList.remove(n.inputErrorClass),e.textContent=t.validationMessage}(o,e,n):function(e,t,n){t.classList.add(n.inputErrorClass),e.textContent=t.validationMessage}(o,e,n)}(n,e,t),c(o,e.checkValidity(),t)}))})),e.addEventListener("submit",(function(n){n.preventDefault(),c(o,e.checkValidity(),t)}))}(t,e)}))}(A),i.addEventListener("click",(function(){l.value=s.textContent,d.value=p.textContent,j(u)})),document.querySelector(".profile__add-button").addEventListener("click",(function(){j(b)})),u.querySelector(".popup__close").addEventListener("click",(function(){O(u)})),a.querySelector(".popup__close").addEventListener("click",(function(){O(a)})),b.querySelector(".popup__close").addEventListener("click",(function(){O(b)})),y.querySelector(".popup__close").addEventListener("click",(function(){O(y)})),f.addEventListener("submit",(function(e){e.preventDefault();var r,o=document.querySelector(".popup_opened").querySelector(A.submitButtonSelector);I(C),(r={name:l.value,about:d.value},fetch("".concat(t.url,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify(r)}).then(n)).then((function(e){s.textContent=l.value,p.textContent=d.value,O(u)})).catch((function(e){console.log(e)})).finally((function(){M(C),c(o,!1,A)}))})),Promise.all([fetch("".concat(t.url,"/users/me"),{headers:t.headers}).then(n),fetch("".concat(t.url,"/cards"),{headers:t.headers}).then(n)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];s.textContent=o.name,p.textContent=o.about,_.src=o.avatar,s.id=o._id,c.forEach((function(e){!function(e,t){e.append(t)}(S,P(e))}))})).catch((function(e){console.log(e)})),q.addEventListener("submit",(function(e){var r,o=document.querySelector(".popup_opened").querySelector(A.submitButtonSelector);e.preventDefault(),I(k),(r={name:g.value,link:E.value},fetch("".concat(t.url,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify(r)}).then(n)).then((function(e){S.prepend(P(e)),O(b),q.reset()})).catch((function(e){console.log(e)})).finally((function(){M(k),c(o,!1,A)}))})),_.addEventListener("click",(function(){j(y)})),v.addEventListener("submit",(function(e){var r,o=document.querySelector(".popup_opened").querySelector(A.submitButtonSelector);e.preventDefault(),I(x),(r={avatar:m.value},fetch("".concat(t.url,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify(r)}).then(n)).then((function(e){_.src=e.avatar,O(y),m.value=""})).catch((function(e){console.log(e)})).finally((function(){M(x),c(o,!1,A)}))}));var I=function(e){e.textContent=e.textContent+"..."},M=function(e){e.textContent=e.textContent.replace("...","")},N=function(e,r,o){var c;e.target.classList.contains("card__img_active")?(c=r._id,fetch("".concat(t.url,"/cards/likes/").concat(c),{method:"DELETE",headers:t.headers}).then(n)).then((function(e){!function(e,t){e.querySelector(".card__img").classList.remove("card__img_active"),e.querySelector(".card__volume-likes").textContent=t.likes.length}(o,e)})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.url,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then(n)}(r._id).then((function(e){!function(e,t){e.querySelector(".card__img").classList.add("card__img_active"),e.querySelector(".card__volume-likes").textContent=t.likes.length}(o,e)})).catch((function(e){console.log(e)}))},J=function(e,r){var o;(o=r._id,fetch("".concat(t.url,"/cards/").concat(o),{method:"DELETE",headers:t.headers}).then(n)).then((function(t){e.target.closest(".card").remove()})).catch((function(e){console.log(e)}))}})();