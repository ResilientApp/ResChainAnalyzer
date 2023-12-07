var search_terms = ['2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk', '1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK', '1ELoystWhosX2ufo1MpdqeabiEBawPCPoK', '1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg', '17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE', '1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn', '1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK', '1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7', '1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu', '1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH', '1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h', '1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG', '1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif', '1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7', '138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8', '1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj', '1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi', '1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4', '1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P', '1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD']

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
