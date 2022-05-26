var foundYou = document.getElementById('overview')
// console.log(foundYou)
// console.log(foundYou.innerText)

// foundYou.innerText = '>>I changed you<<'

// accessing by Id

var foundYou = document.getElementsByTagName('p')
// console.log(foundYou)
// console.log(foundYou[1].innerText)
// foundYou[1].innerText = '..i changed you<<'

// accessing by tag name

var foundYou = document.getElementsByName('description')
// console.log(foundYou[1].innerText)
// foundYou[1].innerText = '>>changed<<'

// accessing by name

var foundYou = document.getElementsByClassName('smallCenter')
// console.log(foundYou[0].innerText)
// foundYou[0].innerText = '>> SS <<'

// accessing by class name

var foundYou = document.querySelectorAll('ul#fn_list li')
// console.log(foundYou[0].innerText)
// console.log('length of list >>' + foundYou.length)
// foundYou[0].innerText = '>> link <<'

// accessing by query selector all

var foundYou = document.getElementById('sw_list')
// console.log(foundYou)
// var childArray = foundYou.getElementsByTagName('li')
// console.log(childArray)
// childArray[0].innerText = '>> items <<'
// childArray[1].innerText = '>> item <<'
// childArray[2].innerText = '>> items <<'

// chnaged list using combination 1

var newOptions = ['black', 'red', 'blue']

var foundYou = document.getElementById('myForm')
// console.log(foundYou)

var selectArray = foundYou.getElementsByTagName('option')
// console.log(selectArray)

// for (i=0; i < selectArray.length; i++){
//     selectArray[i].innerText = newOptions[i]
// }

// changed drop down using combination 2

var foundYou = document.getElementById('myForm')
// console.log(foundYou)

var selectArray = foundYou.getElementsByTagName('input')
// console.log(selectArray)

// for (i=0; i < selectArray.length; i++){
//     console.log(selectArray[i].value)
// }

// accessing values in box using combination 3