DEBUG = true;
keywords= ['tủ lạnh', 'tủ mát', 'tủ đông', 'máy giặt', 'dakin', 'nagakawa', 'carrier', 'national'];
mySmartphones= ['panasonic', 'lg'];
var MIN_VALUE = 4000000;
var MAX_VALUE = 7000000;
var MAX_MY_SMARTPHONE_VALUE = 4000000;


var LIST_QUERY = "#universal-main-container main .row.no-margin .col-md-8 div:nth-child(5) ul li";
var ITEM_NAME = "h3[itemprop='name']";
var ITEM_PRICE = "span[itemprop='price']";
var ITEM_PRICE_UNIT = ' đ';
setTimeout(function() {
	var alertMessage = '';
	
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
		} else {
			/*$(this).find("div#div-gpt-des-mid-list").remove();
			$(this).find("span.ad-type-suf").remove();
			if (DEBUG) {
				console.log($(this).find("a"));
			}*/
			var realPrice = parseInt(price, 10);
			if (isMySmartphone(itemTitle) && realPrice && realPrice <= MAX_MY_SMARTPHONE_VALUE) {
				alertMessage += itemTitle + ': ' + price + '\n';
			}
			$(this).find("a").attr('target', '_blank').attr('onclick', "this.target='_blank'");
		}

	});
	
	alertMessage = false;
	if (alertMessage) {
		alert(alertMessage);
		document.title = alertMessage;
	} else {
		document.title = "Alarm me";
	}
	
	
}, 700);


setTimeout(function(){
   window.location.reload(1);
}, 15*60*1000);

 
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

function isMySmartphone(itemTitle) {
	if(DEBUG) { console.log('-> check title'); }
    for (var i = 0; i < mySmartphones.length; i++) {
        if (itemTitle.includes(mySmartphones[i])) {
            return true;
        }
    }
    return false;
}


$( document ).ready(function() {
    document.title = "Alarm me";
});
