document.addEventListener('DOMContentLoaded', () => {
	const dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach(dropdown => {
		const dropdownValue = dropdown.querySelector('.dropdown__value');
		const dropdownList = dropdown.querySelector('.dropdown__list');

 
		dropdownValue.addEventListener('click', (event) => {
			event.stopPropagation();  
			dropdownList.classList.toggle('dropdown__list_active');
		});

		 
		dropdownList.addEventListener('click', (event) => {
			event.preventDefault();  
			const target = event.target.closest('.dropdown__item');
			if (target) {
				const selectedValue = target.textContent;  
				dropdownValue.textContent = selectedValue;  
				dropdownList.classList.remove('dropdown__list_active');  
			}
		});
	});
 
	document.addEventListener('click', () => {
		dropdowns.forEach(dropdown => {
			const dropdownList = dropdown.querySelector('.dropdown__list');
			dropdownList.classList.remove('dropdown__list_active');
		});
	});
});