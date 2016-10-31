(function( $ ){

	$(function() {
		
		$('#form2').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form2').serialize(),
						success: function () {
							$("#form2 .form-control").val("");
							$("#good2").css("display", "block");
							setTimeout(function(){
								$("#good2").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
		
		$('#form3').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form3').serialize(),
						success: function () {
							$("#form3 .form-control").val("");
							$("#form3 .textarea").val("");
							$("#good3").css("display", "block");
							setTimeout(function(){
								$("#good3").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
		
		$('#form4').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form4').serialize(),
						success: function () {
							$("#form4 .form-control").val("");
							$("#form4 .textarea").val("");
							$("#good4").css("display", "block");
							setTimeout(function(){
								$("#good4").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
		$('#form5').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form5').serialize(),
						success: function () {
							$("#form5 .form-control").val("");
							$("#form5 .textarea").val("");
							$("#good5").css("display", "block");
							setTimeout(function(){
								$("#good5").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
		$('#form6').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form6').serialize(),
						success: function () {
							$("#form6 .form-control").val("");
							$("#form6 .textarea").val("");
							$("#good6").css("display", "block");
							setTimeout(function(){
								$("#good6").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
		$('#form7').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},1000);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
						type: 'POST',
						url: 'post.php',
						data: $('#form7').serialize(),
						success: function () {
							$("#form7 .form-control").val("");
							$("#form7 .textarea").val("");
							$("#good7").css("display", "block");
							setTimeout(function(){
								$("#good7").removeAttr('style');
							},4000);
						}
          			});
				}
			});
			
		});
		
	});

})( jQuery );