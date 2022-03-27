var _authenticator;

$(document).ready(function() {
	$('.dropdown-menu .no-close').on("click", function(e) {
		var collapse_elem = $(e.target).next('.collapse');
		if (collapse_elem.hasClass('show')) {
			collapse_elem.collapse('hide');
		}
		else {
			collapse_elem.collapse('show');
		}
		e.stopPropagation();
		// e.preventDefault();
	});
})

function searchSubmit() {
	var url = "";
	var text = document.getElementById('searchText');
	var checkbox = document.getElementById('customCheckBox1');
	var search1 = document.getElementById('searchButton_1');
	var search2 = document.getElementById('searchButton_2');
	var search_default = document.getElementById('searchButton');

	if (search_default) {
		search_default.disabled = true;
		search_default.classList.add("disabled");
	}
	if (search1) {
		search1.disabled = true;
		search1.classList.add("disabled");
	}
	if (search2) {
		search2.disabled = true;
		search2.classList.add("disabled");
	}
	
	if (checkbox.checked == true) {
		url = "path=/aawardsph/"+window.location.pathname;
	}

	window.location.href = window.location.protocol+ "//" +window.location.hostname+ "/search?" +encodeURI(url)+ "&SearchableText=" +encodeURIComponent(text.value)+ "&facet=true&facet.field=portal_type&facet.field=review_state" +_authenticator;
}

function setAuth(obj, authenticator) {
	_authenticator = authenticator;
	obj.remove();
}