 import cart from "./cart";
 const refs = {
    onOpenBtn: document.querySelector(`.header_btn`),
   
 }
//  console.log(refs.onOpenBtn);

//  console.log(refs.onModal);
//  console.log(refs.onCloseBtn);

 refs.onOpenBtn.addEventListener(`click`, openModal);

 function openModal(e) {
// document.querySelector(`body`).classList.add('modal_show')

    
   const markUp = ` <section class="modal">
   <div class="modal_container">
       <svg  class="modal_logo">
           <use href="/sprite.f14d31f7.svg#icon-logo" ></use>
       </svg>
       <button class="modal_btn" type="button"><svg class="modal_btn-svg">
    <use  href="/sprite.f14d31f7.svg#icon-menu"></use>
       </svg></button>       
   </div>
   <ul class="modal_list">
       <li class="modal_item">
           <a href="#about">About us</a>
       </li>
       <li class="modal_item">
           <a href="#program">Program</a>
       </li>
       <li class="modal_item">
           <a href="#reviews">Reviews</a>
       </li>
       <li class="modal_item">
           <a href="#contacts">Contacts</a>
       </li>
   </ul>
   
</section>`;

document.querySelector(`body`).insertAdjacentHTML("afterbegin", markUp);
console.log(document.querySelector(`.modal`))
document.querySelector(`.modal`).addEventListener(`click`, () => {
    document.querySelector(`.modal`).remove('modal')
    
});


 };

