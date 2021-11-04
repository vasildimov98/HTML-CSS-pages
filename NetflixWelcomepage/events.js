/*Question JavaScripts Events*/

const questionBtns = document.querySelectorAll('.question-btn');
const questionInfo = document.querySelectorAll('.question-info');

questionBtns.forEach(x => x.addEventListener('click', showInfo));

function showInfo() {
    const infoNode = this.nextElementSibling;
    const plusSign = this.querySelector('.plus');


    if (infoNode.classList.contains('show')) {
        infoNode.classList.remove('show');
        plusSign.classList.remove('rotated');
        return;
    }

    removeShowingElement();
    infoNode.classList.add('show');
    plusSign.classList.add('rotated');
}

function removeShowingElement() {
    questionInfo.forEach(x => x.classList.remove('show'));
    questionBtns.forEach(x => x.querySelectorAll('.plus').forEach(x => x.classList.remove('rotated')));
}