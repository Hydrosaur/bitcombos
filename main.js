function createBits(bits) {
	var bitcombos = [];
	while(bitcombos.length != Math.pow(bits, 2)){
		var bitweld = "";
		for (var i = 0; i < bits; i++) {
			var ran = Math.floor(Math.random() * (2 - 0));
			bitweld = bitweld + ran;
		}
		bitcombos.push(bitweld)
	}
	for (var i = 0; i < bitcombos.length; i++) {
	    for (var j = 0; j < bitcombos.length; j++){
	        if (i != j) {
	            if (bitcombos[i] == bitcombos[j]) {
	                var bitweldfix = "";
					for (var i = 0; i < bits; i++) {
						var ran = Math.floor(Math.random() * (2 - 0));
						bitweldfix = bitweldfix + ran;
					}
					bitcombos[j] = bitweldfix;
					console.log("Fixed Duplicate")
	            }
	        }
	    }
	}
	console.log(bitcombos);
}

createBits()

function bitFix(bits){
	var trufal = false;
	
}