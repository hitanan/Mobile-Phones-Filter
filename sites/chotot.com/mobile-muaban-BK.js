var keywords= ['lock', 'htc', 'lg', 'huawei', 'blackberry', 'asus', 'zenphone', 'oppo', 'zen', 'sony', 'lenovo', 'xác', 'meizu', 'lumia', 'không vân tay', 'hư vân tay', 'iphone 4', 'sky', 'nokia', 'vertu'];
var MIN_VALUE = 1000000;
var MAX_VALUE = 7000000;

var DEBUG = false;
// get options data
var dataObj = {
	'laptop-max-value':'',
	'open-only-first':false, 
	'laptop-title-exclude': ''
};

	
chrome.storage.local.get(dataObj, function(obj) {
	dataObj['laptop-max-value'] = parseInt(obj['laptop-max-value'], 10);
	
	
	if (DEBUG) {
		console.log(dataObj['laptop-max-value']);
	}

	
});

$(window).load(function () {
	setTimeout(function() {
		$("#universal-main-container main .row.no-margin .col-md-8 div:nth-child(5) ul li").each(function(){
			
			// get title
			var item = $(this).find("h3[itemprop='name']");
			var itemTitle= $(item).text().toLowerCase();
			if (DEBUG) {
				console.log(itemTitle);
			}
			
			// get price
			var price = $(this).find("span[itemprop='price']").text().trim().replace(' đ', '').replace(/\.|/g, '');
			if (DEBUG) {
				console.log(price);
			}
			if ((keywords.length > 0 && containsKeywordsIn(itemTitle)) || (price && isHighPrice(price))) {
				$(this).remove();
			} else {
				/*$(this).find("div#div-gpt-des-mid-list").remove();
				$(this).find("span.ad-type-suf").remove();
				if (DEBUG) {
					console.log($(this).find("a"));
				}*/
				$(this).find("a").attr('target', '_blank').attr('onclick', "this.target='_blank'");
			}

		});
	}, 1000);
		
});

 


function isHighPrice(price) {
	if(DEBUG) { console.log(dataObj['laptop-max-value']); }
	if(dataObj['laptop-max-value'] == '') {
		return false;
	}
	real = parseInt(price, 10);
	return real < MIN_VALUE || real > MAX_VALUE;
}

function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}
