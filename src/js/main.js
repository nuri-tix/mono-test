import '../styles/main.scss'

import IMask from 'imask';

const element = document.getElementById('phone');

const maskOptions = {
	mask: '+{7}(000)000-00-00',
	lazy: false,
	placeholderChar: '_',
};

let mask = null

console.log(mask)

element.addEventListener('focus', () => {
	mask = IMask(element, maskOptions);
})