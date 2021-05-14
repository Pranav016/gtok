$(document).ready(() => {
	$('#form').on('submit', (e) => {
		e.preventDefault();
		const name = $('#name').val();
		const email = $('#email').val();
		const message = $('#message').val();
		// console.log({ name, email, message });
		$.ajax({
			url: '/',
			data: {
				name: name,
				email: email,
				message: message,
			},
			method: 'POST',
			contentType: 'application/x-www-form-urlencoded',
			success: () => {
				swal({
					title: 'Success!',
					text: 'Thank you for filling the form!',
					icon: 'success',
				});
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
			},
			error: (err) => {
				swal({
					title: 'Error!',
					text: 'Try again later!',
					icon: 'error',
				});
				console.log(err);
			},
		});
	});
});
