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
  item.parentElement.style.marginTop = `${item.offsetHeight + 20}px`;
}