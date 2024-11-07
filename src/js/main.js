import '../styles/main.scss'

// -- modal ---

const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
	const btnElems = document.querySelectorAll(btnOpen);
	const modalElem = document.querySelector(modal);

	modalElem.style.cssText = `
	display: flex;
	visibility: hidden;
	transform: translateY(-100%);
	transition: ${time}ms
`;

	const closeModal = event => {
		const target = event.target;

		if (
			target === modalElem ||
			(btnClose && target.closest(btnClose)) ||
			event.code === 'Escape'
		) {
			modalElem.style.transform = 'translateY(-100%)';

			setTimeout(() => {
				modalElem.style.visibility = 'hidden';
			}, time);

			window.removeEventListener('keydown', closeModal);
		}
	}

	const openModal = () => {
		modalElem.style.visibility = 'visible';
		modalElem.style.transform = 'translateY(0)';
		window.addEventListener('keydown', closeModal)
	}

	btnElems.forEach(btn => {
		btn.addEventListener('click', openModal)
	})

	modalElem.addEventListener('click', closeModal)
};

modalController({
	modal: '.modal',
	btnOpen: '.header__btn-menu',
	btnClose: '.modal__close',
});




// --- Mask phone ---

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