var keywords= ['macbook', 'xps', 'samsung', 'acer', 'vaio', 'sony'];
var ADS = [
	{name: 'Ngân', src:'https://static.chotot.com.vn/imaginary/98cbf53b45e1aec4880bd9f99758ccd01e9e2893/profile_avatar/70ba024193b65884fa1f59212052f008d4f13950/thumbnail?width=32'},
	{name: 'Tân', src:'https://static.chotot.com.vn/imaginary/3bb188afec0da6df45fe3a10ced82ed1923b1a06/profile_avatar/7826d13ec28117fadf23d58aaca6cc0f50aeb706/thumbnail?width=32'},
	{name: 'nguyen pham', src:'https://static.chotot.com.vn/imaginary/8c2bdacc767b22f30b3d5dfceced884d424fa2b0/profile_avatar/a082755c86752188cae3456160c3d05d712ffc90/thumbnail?width=32'},
	{name: '01696177627', src:'https://static.chotot.com.vn/imaginary/98cbf53b45e1aec4880bd9f99758ccd01e9e2893/profile_avatar/70ba024193b65884fa1f59212052f008d4f13950/thumbnail?width=32'},
	{name: 'Anh Tên là', src:'https://static.chotot.com.vn/imaginary/f615d6544c728c5cf91951a08b8d9a177f6455f9/profile_avatar/88d39a5b507209ddc8227d9a89edcb3efcd583da/thumbnail?width=32'},
	{name: 'Anh Đường Băng', src:'https://static.chotot.com.vn/imaginary/3ee138adcfa4ff1ecb66abe14ce9232a18337b61/profile_avatar/c04447ca182744bb27be7495055622ff6f396cb4/thumbnail?width=32'},
	{name: 'Long AKA', src:'https://static.chotot.com.vn/imaginary/33dda3a2c2e030ce36e93903cef104632f7749d1/profile_avatar/86202eaa11a3395fb239e8812791cafe9b6b4e5a/thumbnail?width=32'},
	{name: 'TiềN', src:'https://static.chotot.com.vn/imaginary/355f34729f1f5fdba4b74cbe9c647b3125c2b774/profile_avatar/668c830fff64c735df4ae1725a9dc37b66c7359b/thumbnail?width=32'},
	{name: 'Minh Hằng', src:'https://static.chotot.com.vn/imaginary/6f0082739ac2ef5647b5171393bf77295d585641/profile_avatar/f2efe08dd479b40e61834d21b980d219e82f688d/thumbnail?width=32'},
	{name: 'Lương', src:'https://static.chotot.com.vn/imaginary/c5cc4921a01cb8c59d0b75a00d651981f69af987/profile_avatar/1d49641e29bdffcedb5395466818be65d2b4601e/thumbnail?width=32'},

	
];
setTimeout(function() {
	// $('#universal-main-container main .row.no-margin .col-md-8 div:nth-child(7) > div > div:first-child').remove();
	$(".ctStickyAdsListing").next().find("ul li").each(function(){

		// get title
		var item = $(this).find("h3[itemprop='name']");
		var itemTitle= $(item).text().toLowerCase();
		// if (DEBUG) {
		// 	console.log(itemTitle);
		// }

		var image = $(this).find("a span img").attr('src');
		if (DEBUG) {
			console.log(image);
		}
		
		// get price
		var price = $(this).find("span[itemprop='price']").text().trim().replace(' đ', '').replace(/\.|/g, '');
		// if (DEBUG) {
		// 	console.log(price);
		// }
		if (containsKeywordsIn(itemTitle) || containsImagesIn(image) ) {
			$(this).remove();
		} else {
			/*$(this).find("div#div-gpt-des-mid-list").remove();
			$(this).find("span.ad-type-suf").remove();
			if (DEBUG) {
				console.log($(this).find("a"));
			}*/
			$(this).find("a").attr('target', '_blank');
		}

	});

	$('.ctStickyAdsListing, #afscontainer1').remove();
	
}, 3000);

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

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
        if (itemTitle.includes(keywords[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}

function containsImagesIn(image) {
    for (var i = 0; i < ADS.length; i++) {
        if (image && (image == ADS[i].src || image.includes(ADS[i]).src )) {
            return true;
        }
    }
    return false;
}