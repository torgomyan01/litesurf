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

faqItem.forEach((item) => {
  item.addEventListener('click', function (){
    faqItem.forEach((_item) => {
        _item.classList.remove(active);
    })

    item.classList.toggle(active)
  })
})
