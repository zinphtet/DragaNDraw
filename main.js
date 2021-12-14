const empties = document.getElementsByClassName('empty');
const fill = document.querySelector('.fill');

for (const empty of empties) {
	empty.addEventListener('dragover', function (e) {
		e.preventDefault();
		console.log('Drag Over');
	});
	empty.addEventListener('dragenter', function () {
		this.className += ' enter';
	});
	empty.addEventListener('dragleave', function () {
		this.className = 'empty';
	});

	empty.addEventListener('drop', function (e) {
		this.appendChild(fill);
		this.className = 'empty';
	});
}

fill.addEventListener('dragstart', function () {
	// this.className = 'invisible'
});

fill.addEventListener('dragend', function () {
	// this.className='fill'
});
