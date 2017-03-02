DEBUG = true;
// get options data

dataObj = {
	'laptop-max-value':'',
	'open-only-first':false, 
	'laptop-title-exclude': ''
};

	
chrome.storage.local.get(dataObj, function(obj) {
	dataObj['laptop-max-value'] = parseInt(obj['laptop-max-value'], 10);
	/*keywords = obj['laptop-title-exclude'].split('\n').filter((t) => t != '').map(t => t.toLowerCase());
	if (DEBUG) {
		console.log(keywords);
	}
	*/
	
	if (DEBUG) {
		console.log(dataObj['laptop-max-value']);
	}

	
});
*/