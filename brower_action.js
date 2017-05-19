var data = {
	'timphong':[
		'https://www.facebook.com/thuenhadn',
		'https://muaban.net/nha-tro-phong-tro-da-nang-l15-c3405?min=1000&max=3000&cr=1000',
		'http://rongbay.com/Da-Nang/Nha-tro-Phong-tro-Thue-va-cho-thue-nha-c272-t788-d141.html?pr=6&md=141',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-phong-tro?mre=2'
	],
	'timnha':[
		'http://chothuedanang.net/nha-dat-cho-thue-da-nang/-1/2/-1/-1.htm',
		'https://muaban.net/cho-thue-nha-dat-da-nang-l15-c34?min=1000&max=3000&cr=1000',
		'https://muaban.net/nha-hem-ngo-da-nang-l15-c3407?min=1000&max=3000',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-nha-dat?max_monthly_rent=2&mre=2'
	],
	'timlaptop': [
		'http://rongbay.com/Da-Nang/Laptop-Netbook-May-tinh-va-Laptop-c1-t28.html',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/mua-ban-may-tinh-laptop',
		'https://muaban.net/laptop-may-de-ban-may-chu-da-nang-l15-c63?min=1000&max=3000&cr=1000'
	],
	'timlaptopnew': [
		'https://www.thegioididong.com/laptop?p=duoi-8-trieu&o=gia-thap-den-cao',
		'http://fptshop.com.vn/may-tinh-xach-tay?tinh-nang=&muc-gia=tu-5-10-trieu&bo-xu-ly=intel-core-i3&ram=4-gb&sl=gia-thap-den-cao',
		'https://vienthonga.vn/laptop?subcats=Y&features_hash=V20122.V20104.P12'
	],
	'timtu': ['https://www.chotot.com/quang-nam-da-nang/da-nang/mua-ban-noi-ngoai-that-cay-canh?q=t%E1%BB%A7'
	],
	'timtulanh':[
		'https://www.chotot.com/quang-nam-da-nang/da-nang/mua-ban?q=t%E1%BB%A7+l%E1%BA%A1nh'
	],
	'timdienthoai':[
		'https://muaban.net/dien-thoai-di-dong-da-nang-l15-c62?min=1000&max=10000',
		'http://muabanhay.com/list/1300/dien-thoai-vien-thong?region_id=9',
		'http://raoxyz.com/t/da-nang*dien-thoai-di-dong',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/mua-ban-dien-thoai-di-dong?f=p'
	]
	

};

function gotoPaths(urls) {
	for (var u of urls) {
		chrome.tabs.create({
			url: u
		});
	}
	window.close();
}


function gotoIndex(idx) {
	var patternURL = links[idx];
	chrome.tabs.query({currentWindow: true}, function (tabs) {
		// From last url to first.
		var i = tabs.length - 1;
		while(i >= 0) {
			var curTab = tabs[i];
			if (curTab.url.indexOf(patternURL) >= 0) {
				chrome.tabs.update(curTab.id, {
					active: true, 
					highlighted: true, 
					url: patternURL
				});
				window.close();
				break;
			}
			
			i--;
		}
		if (i < 0) {
			chrome.tabs.create({
				active: true, 
				url: patternURL
			});
			window.close();
		}

	});
}


// function getIndex(thisId) {
	// var i = thisId.lastIndexOf('_');
	// var n = thisId.substring(i+1, thisId.length);
	// return n;
// }

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	
    $('#timphong').on('click', function(e) {
		gotoPaths(data.timphong);
	});
	$('#timnha').on('click', function(e) {
		gotoPaths(data.timnha);
	});
	$('#timlaptop').on('click', function(e) {
		gotoPaths(data.timlaptop);
	});
	$('#timlaptopnew').on('click', function(e) {
		gotoPaths(data.timlaptopnew);
	});
	$('#timtu').on('click', function(e) {
		gotoPaths(data.timtu);
	});
	$('#timtonghop').on('click', function(e) {
		/*var ids = [1,2,8];
		gotoPaths(ids);
		*/
	});
	$('#timtulanh').on('click', function(e) {
		gotoPaths(data.timtulanh);
	});
	$('#timdienthoai').on('click', function(e) {
		gotoPaths(data.timdienthoai);
	});
	
	$('#tim').on('click', function(e) {
		var paths = [
			data.timdienthoai[data.timdienthoai.length - 2],
			data.timdienthoai[data.timdienthoai.length - 1]
		];
		gotoPaths(paths);
	});
	/*
	// create string link ids
	
	var linkIds = '';
	for (let i = 0; i < links.length; i++) {
		linkIds += '#link_' + i;
		if (i != (links.length - 1)) {
			linkIds += ',';
		}
	}
	// addd listener
	$(linkIds).on('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	*/



});