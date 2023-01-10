'use strict';

import {listService, listExplanation, categoryList, categoryContainer, loadMoreButton, photoContainer} from './constants.js';

listService.addEventListener('click', e => {
	const target = e.target;

	[...listService.children].forEach(item => {
		item.classList.remove('active');

		if (item === target) {
			item.classList.add('active');
		}
	});
});

listService.addEventListener('click', e => {
	const target = e.target;

	[...listService.children].forEach(item => {
		if (item === target) {
			item.classList.add('switch');
		} else {
			item.classList.remove('switch');
		}
	});
});

listService.addEventListener('click', e => {
	const target = e.target;

	[...listExplanation.children].forEach(item => {
		if (item.dataset.tab === target.dataset.tab) {
			item.classList.add('switch');
		} else {
			item.classList.remove('switch');
		}
		if (item.dataset.tab !== target.dataset.tab) {
			item.classList.add('hidden');
		} else {
			item.classList.remove('hidden');
		}
	});
});

categoryList.addEventListener('click', e => {
	const target = e.target;

	[...categoryList.children].forEach(item => {
		if (item === target) {
			item.classList.add('switch');
		} else {
			item.classList.remove('switch');
		}
	});
});

categoryList.addEventListener('click', e => {
	const target = e.target;

	[...categoryContainer.children].forEach(item => {
		if (item.dataset.category === target.dataset.category) {
			item.classList.add('switch');
		} else {
			item.classList.remove('switch');
		}
		if (item.dataset.category !== target.dataset.category) {
			item.classList.add('hidden');
		} else {
			item.classList.remove('hidden');
		}
		if (item.dataset.all === target.dataset.all) {
			item.classList.remove('hidden');
		}
	});
});

loadMoreButton.addEventListener('click', () => {
	photoContainer.classList.remove('hidden');
	loadMoreButton.classList.add('change-color');

	function deleteButton () {
		loadMoreButton.classList.add('escape');
	}
	setTimeout(() => {
		deleteButton();
	}, 1500);
});









































