var keywords= [];

setTimeout(function() {
	jQuery("#universal-main-container main .row.no-margin .col-md-8 div:nth-child(5) ul li").each(function(){

		// get title
		var item = jQuery(this).find("h3[itemprop='name']");
		var itemTitle= jQuery(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = jQuery(this).find("span[itemprop='price']").text().trim().replace(' đ', '').replace(/\.|/g, '');
		if (DEBUG) {
			console.log(price);
		}
		if ((keywords.length > 0 && containsKeywordsIn(itemTitle)) || (price && isHighPrice(price))) {
			jQuery(this).remove();
		} else {
			/*jQuery(this).find("div#div-gpt-des-mid-list").remove();
			jQuery(this).find("span.ad-type-suf").remove();
			if (DEBUG) {
				console.log(jQuery(this).find("a"));
			}*/
			jQuery(this).find("a").attr('target', '_blank');
		}

	});
}, 500);

function isHighPrice(price) {
	if(DEBUG) { console.log(dataObj['laptop-max-value']); }
	if(dataObj['laptop-max-value'] == '') {
		return false;
	}
	real = parseInt(price, 10);
	return real > dataObj['laptop-max-value'];
}


function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}