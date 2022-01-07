// определеяем переменные
var firstNameId = 'first-name';
// находим элемент по айдишнику и результат (найденный элемент) присваиваем переменной firstNameEl
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId= 'avatar-wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);

debugger;
function alertValues() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
    console.log(citiesEl.value);

}

alertValues();


// если тому, что слева присваивается то, что справа от оператора присваивания =
// то это значит, что firstEl.value приобретет новое значение 'Andrey'
firstNameEl.value = 'Andrey';
lastNameEl.value = 'Kamasutra';
lastNameEl.title = 'Wrong last name';
firstNameEl.setAttribute('value', 'Andrey');
avatarEl.src = 'https://sun2.6789.userapi.com/s/v1/if1/ZlNegbJJmE_0n4QWcNUPMpKrPrA2Uhbjf2jJzBOasYVs4cbgHUyKzU1f45x2Bm53gzLY2pJ8.jpg?size=200x200&quality=96&crop=796,0,1709,1709&ava=1';




avatarEl.title = 'I am avatar';
citiesEl.value = 'Moscow';
hobbiesEl.value = 'Hey, hello, I love you!';
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';

//console.log(lastNameEl.className);
lastNameEl.className = 'address-input default-input error-input';


//var listId = 'list';
//var numberList = document.getElementById(listId);
// заменяем одной строчкой:

var numberList = document.getElementById('list');

console.log(numberList.innerHTML);