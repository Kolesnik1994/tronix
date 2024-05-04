/**
 * 
 */

 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyge9dyR6OtyfE2lir6f4cI32kX-7QSSRAqEgIILZeR4Z2M3JSQqoPdDheuImIkwpRg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Дякую! Ваше повідомлення відправленно успішно." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


