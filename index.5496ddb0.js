({onOpenBtn:document.querySelector(".header_btn")}).onOpenBtn.addEventListener("click",(function(e){document.querySelector("body").insertAdjacentHTML("afterbegin",' <section class="modal">\n   <div class="modal_container">\n       <svg  class="modal_logo">\n           <use href="/sprite.f14d31f7.svg#icon-logo" ></use>\n       </svg>\n       <button class="modal_btn" type="button"><svg class="modal_btn-svg">\n    <use  href="/sprite.f14d31f7.svg#icon-menu"></use>\n       </svg></button>       \n   </div>\n   <ul class="modal_list">\n       <li class="modal_item">\n           <a href="#about">About us</a>\n       </li>\n       <li class="modal_item">\n           <a href="#program">Program</a>\n       </li>\n       <li class="modal_item">\n           <a href="#reviews">Reviews</a>\n       </li>\n       <li class="modal_item">\n           <a href="#contacts">Contacts</a>\n       </li>\n   </ul>\n   \n</section>'),console.log(document.querySelector(".modal")),document.querySelector(".modal").addEventListener("click",(()=>{document.querySelector(".modal").remove("modal")}))}));
//# sourceMappingURL=index.5496ddb0.js.map