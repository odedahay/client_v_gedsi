$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip()
});

function searchTable (input_name, table_name) {
	var searchvalue = $(input_name).val().toLowerCase();
	$(table_name + " tr").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1)
	});
}