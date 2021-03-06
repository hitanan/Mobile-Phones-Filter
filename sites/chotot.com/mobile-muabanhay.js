DEBUG = true;
keywords= ['lock', 'htc', 'lg', 'huawei', 'blackberry', 'asus', 'zenphone', 'oppo', 'zen', 'sony', 'lenovo', 'xác', 'meizu', 'lumia', 'không vân tay', 'hư vân tay', 'iphone 4', '4s', 'sky', 'nokia', 'vertu', 'loa', 'cable', 'ốp lưng', 'ctv'];
var MIN_VALUE = 1000000;
var MAX_VALUE = 7000000;

var LIST_QUERY = "#home .searchrs, #home .div_page .searchrs";
var ITEM_NAME = "span a p label:eq(0)";
var ITEM_PRICE = "span a p label:eq(1)";
var ITEM_PRICE_UNIT = /[đ,]/g;
setTimeout(function() {
	$(LIST_QUERY).each(function(){
		
		// get title
		var item = $(this).find(ITEM_NAME);
		var itemTitle= $(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = $(this).find(ITEM_PRICE).text().trim().replace(ITEM_PRICE_UNIT, '').replace(/\.|/g, '');
		if (DEBUG) {
			console.log(price);
		}
		if ((keywords.length > 0 && containsKeywordsIn(itemTitle)) || (price && isHighPrice(price))) {
			$(this).remove();
				if (DEBUG) {
				console.log('--> removed');
			}
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