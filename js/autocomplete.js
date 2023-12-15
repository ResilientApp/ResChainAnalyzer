var search_terms = doStuff(jsonFile);

function autocompleteMatch(input) {
	  if (input == '') {
		      return [];
		    }
	  var reg = new RegExp(input)
	  return search_terms.filter(function(term) {
		  	  if (term.match(reg)) {
				    	  return term;
				  	  }
		    });
}

function showResults(val) {
	  res = document.getElementById("result");
	  res.innerHTML = '';
	  let list = '';
	  let terms = autocompleteMatch(val);
	  for (i=0; i<terms.length; i++) {
		      list += '<li>' + terms[i] + '</li>';
		    }
	  res.innerHTML = '<ul>' + list + '</ul>';
}


function doStuff(jsonFile) {
	var dict = [];
	
	jsonFile = JSON.parse(jsonFile);
	for (const jsonObj of jsonFile) {
		try {
			if (!dict.includes(jsonObj.inputs[0].owners_before[0]))
			{
				dict.push(jsonObj.inputs[0].owners_before[0])
			}
		} catch (error) {}
	}

	return dict;
}