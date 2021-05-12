$('#form').on('submit', (e) => {
	e.preventDefault();
	swal({
		title: 'Success!',
		text: 'Thank you for filling the form!',
		icon: 'success',
	});
});
