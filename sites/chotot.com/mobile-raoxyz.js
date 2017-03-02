DEBUG = true;
keywords= ['lock', 'htc', 'lg', 'huawei', 'blackberry', 'asus', 'zenphone', 'oppo', 'zen', 'sony', 'lenovo', 'xác', 'meizu', 'lumia', 'không vân tay', 'hư vân tay', 'iphone 4', 'sky', 'nokia', 'vertu', '(công ty)'];
var MIN_VALUE = 1500000;
var MAX_VALUE = 7000000;

var LIST_QUERY = "#content .DiscussionList ul li";
var ITEM_NAME = "h3.DiscussionListItem-title";
var ITEM_PRICE = "h3.DiscussionListItem-title";
var ITEM_PRICE_UNIT = ' đ';
setTimeout(function() {
	$(LIST_QUERY).each(function(){
		
		// get title
		var item = $(this).find(ITEM_NAME);
		var itemTitle= $(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = priceFilter(itemTitle);
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
}, 700);


function priceFilter(title) {
	var moneyIdx = title.indexOf('.000 đ');
	if (moneyIdx > 0) {
		
		// go to previous to find '-' char
		var i = moneyIdx;
		while (i > 0) {
			if (title[i] == '-') {
				var price = title.substring(i + 2, moneyIdx + 6);
				if (DEBUG) {
					console.log('price in priceFilter:' +price);
				}
				return price.replace(ITEM_PRICE_UNIT, '').replace(/\.|/g, '');
			}
			i--;
		}
	}
	return '';
}
 
function isHighPrice(price) {
	var real = parseInt(price, 10);
	return real < MIN_VALUE || real > MAX_VALUE;
}


function containsKeywordsIn(itemTitle) {
	if(DEBUG) { console.log('-> check title'); }
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}