window.addEventListener('DOMContentLoaded', () => {
	// ACCORDEON
	$('.questions__wrapper-burger').click(function(e) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	// MODAL
	$('[data-modal="course"]').on('click', function() {
		$('.overlay, #modal').fadeIn();
	});
	$('.modal__close').on('click', () => {
		$('.overlay, #modal, #modal-thanks').fadeOut();
	});
	// VALIDATE
	function valideForm(form) {
		$(form).validate({
			rules: {
				name: "required",
				email: {
				  required: true,
				  email: true
				}
			},
			messages: {
			  name: "Пожалуйста, введите свое имя",
			  email: {
				 required: "Введите ваш почтовый адрес",
				 email: "Неправильно введен почтовый адрес"
			  }
			}
	
		});
	}
	valideForm('#modal form');
	valideForm('#modal-main');
	// MAIL
	$('#modal-main, #modal form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val("");
			$('#modal').fadeOut();
			$('#modal-thanks, .overlay').fadeIn('slow');
			setTimeout(closeThanks, 3000);

			function closeThanks() {
				$('#modal-thanks, .overlay').fadeOut('slow');
			}

			$('form').trigger('reset');
		});
		return false;
	});
	// SMOOTH and ARROW-UP
	$(window).scroll(() => {
		if($(this).scrollTop() > 1400) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});
	$(".arrow-up").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 800);
		return false;
  });

//   ========ANIMATION=========
  
	
	
	
	
	
	
	
	
	
	

});