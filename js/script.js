const {
  active,
  none,
  all,
  one,
  show
} = {
  active: 'active',
  none: 'd-none',
  show: 'show'
}


const faqItem = document.querySelectorAll('.faq-item');
const pricesSwitch = document.querySelector('.prices-switch');
const mobileMenuBoard = document.querySelector('.mobile-menu-board');
const mobileMenuBoardBody = document.querySelector('.mobile-menu-board-body');
const mobileMenuBoardFon = document.querySelector('.mobile-menu-board-fon');

faqItem.forEach((item) => {

  item.id = Math.floor(Math.random() * 2000) + '_and';

  item.addEventListener('click', function (){
    faqItem.forEach((_item) => {
      if(this.id !== _item.id)
        _item.classList.remove(active);
    })

    item.classList.toggle(active)
  })
})

pricesSwitch.addEventListener('click', function (){
  pricesSwitch.classList.toggle(active)
})

mobileMenuBoard.addEventListener('click', function (){
  if(mobileMenuBoard.classList.contains(active)){
    mobileMenuBoard.classList.remove(active);
    mobileMenuBoardBody.classList.remove(active);
    mobileMenuBoardFon.classList.remove(active);
  } else {
    mobileMenuBoard.classList.add(active);
    mobileMenuBoardBody.classList.add(active);
    mobileMenuBoardFon.classList.add(active);
  }
})


mobileMenuBoardFon.addEventListener('click', function (){
  mobileMenuBoard.classList.remove(active);
  mobileMenuBoardBody.classList.remove(active);
  mobileMenuBoardFon.classList.remove(active);
})


const resultsItemTitle = document.querySelectorAll('.results-item-title');

resultsItemTitle.forEach((item) => {
  changeMarginTop(item);
})


window.addEventListener('resize', function (){
  resultsItemTitle.forEach((item) => {
    changeMarginTop(item);
  })
})



function changeMarginTop(item){

  if(window.innerWidth < 992){
    item.parentElement.style.marginTop = `${item.offsetHeight + 20}px`;
  }
}

// COOKIE
const messageCookie = document.querySelector('.message-cookie');
const messageCookieButton = document.querySelector('.message-cookie button');
const messageCookieStatus = +window.localStorage.getItem('cookie');

if(!messageCookieStatus){
  messageCookie.classList.add(active);
}

messageCookieButton.addEventListener('click', function (){
  messageCookie.classList.remove(active)
  window.localStorage.setItem('cookie', '1')
})

// form Validation
const defForm = document.querySelectorAll('.def-form');

defForm.forEach((form) => {

  form.link.parentElement.insertAdjacentHTML('beforeend',`
    <span class="error-message">Текст ошибки в пять слов или больше</span>
  `)

  form.addEventListener('submit', function (e){
    e.preventDefault();
    const getValue = e.target.link.value;

    if(getValue.length < 5){
      form.classList.add('error')
    } else {
      form.classList.remove('error')
    }
  })
})

const controlItem = document.querySelectorAll('.control-item');
const imgSee = document.getElementById('img-see');

const modalSeeImage = new bootstrap.Modal('#see-images', {
  keyboard: false
})

controlItem.forEach((imgBlock) => {
  imgBlock.addEventListener('click', function (){
    const imageUrl = imgBlock.dataset.see;
    imgSee.setAttribute('src', imageUrl);
    modalSeeImage.show()
  })
})