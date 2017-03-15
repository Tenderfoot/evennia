
$(function() {

	function reset_attrs() {
		$('.attr_val').hide();
		$('.default_textbox').show();
	}


	$('select[name=objects]').bind('change', function() {

		var selected_object = $('option:selected', 'select[name=objects]').val();

		$.each($('.object_parent_div'), function(i, e) {
			if($(e).attr('name') == selected_object)
			{
				$(e).show();
			}
			else
			{
				$(e).hide();
			}
		});

		reset_attrs();

	});

	$('select[name=filter]').bind('change', function() {
		var selected_typeclass = $('option:selected', 'select[name=filter]').val();
		var that = this;

		$.each($('option', "select[name=objects]"), function(i, element) {
			var test = $(element).attr("typeclass");
			test = test.substr(test.lastIndexOf(".")+1, test.length);
			console.log(selected_typeclass);
			console.log(test);
			if(selected_typeclass == "all")
			{
				$(element).show();
			}
			else if(selected_typeclass == test)
			{
				$(element).show();
			}
			else
			{
				$(element).hide();
			}
		});
	});

	$('select[name=attributes]').bind("change", function(i, element) {

		var that = this;
		var attr_choice = i.target.value;

		$.each($('.attr_val'), function(i, attriter) {

			if(attr_choice == $(attriter).attr('key'))
			{
				$(attriter).show();
			}
			else
			{
				$(attriter).hide();
			}

		});

	});

});	