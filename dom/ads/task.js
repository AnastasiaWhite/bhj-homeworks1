document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        function showNextCase() {
            cases[currentIndex].classList.remove('rotator__case_active');

             
            currentIndex = (currentIndex + 1) % cases.length;

             
            const nextCase = cases[currentIndex];
            nextCase.classList.add('rotator__case_active');

             
            const color = nextCase.getAttribute('data-color');
            nextCase.style.color = color;

            
            const speed = nextCase.getAttribute('data-speed');
            setTimeout(showNextCase, speed);
        }

         
        showNextCase();
    });
});