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
	{name: 'Võ Hoàn Gaming SalE', src:'https://static.chotot.com.vn/imaginary/a3cf63fee5f208f313a54eca171a913239388293/profile_avatar/8c11f553b06b1bae43875ba2bf03dcd81e5cdd6a/thumbnail?width=32'},
	{name: 'THANH BÌNH', src:'https://static.chotot.com.vn/imaginary/e9748359fbd7f22f7515e75a1fbacae4cbf1fa7d/profile_avatar/608e287057549caaf8277f03461d33c51b2ba51b/thumbnail?width=32'},
	{name: 'NgỌc ÁNH Gaming STorT', src:'https://static.chotot.com.vn/imaginary/d3f593e5495153c08637564b04f73449271270b2/profile_avatar/e3e635cfb0b220311e9271b67c65c1ce3216d44d/thumbnail?width=32'},
	{name: 'Như', src:'https://static.chotot.com.vn/imaginary/3cf0bd4cc44c81d094ca048cd6662543bcb5dce0/profile_avatar/2eddba0f970b1bf5cff62cbbae41eaf1d69e59eb/thumbnail?width=32'},
	{name: 'Trang Kute', src:'https://static.chotot.com.vn/imaginary/a0d3ee9fba1b389ce519a1c4cb7f534680611c2e/profile_avatar/0ba090e767029297973192d4d303380264fb3ff1/thumbnail?width=32'},
	{name: 'Lảo Đại', src:'https://static.chotot.com.vn/imaginary/fcdef694140e1d2e6887fe0ba1eea6ed3ee75063/profile_avatar/3086dc721c89c33309598185a01fd793481c7526/thumbnail?width=32'},
	{name: 'Duy Mạnh', src:'https://static.chotot.com.vn/imaginary/8737ff73799abb6bc9e88f8522d02875aeb168b3/profile_avatar/def1fc0084049a7cded06c486a97462af8225acc/thumbnail?width=32'},
	{name: 'phÚ', src:'https://static.chotot.com.vn/imaginary/82e33c8735062619882caf1e670350a52dcf4f85/profile_avatar/21e0a2f8ba36fdd4809df8d56a8b2825dcf59bad/thumbnail?width=32'},
	{name: '9999', src:'https://static.chotot.com.vn/imaginary/b3b44a9fbba0684d284934b2e1faf76ebf36bd12/profile_avatar/2b85393cb80eeaa5ccd03ed4601f5267bc0b9802/thumbnail?width=32'},
	{name: 'Anh Bảy Chợ Gà', src:'https://static.chotot.com.vn/imaginary/748797f8f30e55570937b9f7b680b90dc79a9959/profile_avatar/111f096c72ad041eb5edb4f6f03df5e27cccfe2d/thumbnail?width=32'},
	{name: 'Bánh Bèo 123', src:'https://static.chotot.com.vn/imaginary/13cd3420c1f788215662472a3fd60f3b4bd14b25/profile_avatar/948f151c3cc4b9933af4ee42704e9454552f9bcc/thumbnail?width=32'},
	{name: 'Trung Hiếu', src:'https://static.chotot.com.vn/imaginary/8946d7758943696659d64bec48bf08f30979a44d/profile_avatar/c264f868c2eeb076b6e13e44f4ad2d50412e4d95/thumbnail?width=32'},
	{name: 'phiêU', src:'https://static.chotot.com.vn/imaginary/507ce7991e7fb5ef443f446f8df66b29cb237a5b/profile_avatar/26b0c8c271dcd88b654f95d34e810871dd8d491b/thumbnail?width=32'},
	{name: 'hoang hai', src:'https://static.chotot.com.vn/imaginary/05bfc83c41f97ae782eb0adf4259c7987fb67dcd/profile_avatar/db116712aa5ea719485e6f102185bc057cbd4015/thumbnail?width=32'},
	{name: 'bóng mâY', src:'https://static.chotot.com.vn/imaginary/ccb6d91ca2e0684bc85662bca3789382d2e5e097/profile_avatar/f8c348aa0d7a38e2d113ddbf26184a2e054de204/thumbnail?width=32'},
	{name: 'vô minH', src:'https://static.chotot.com.vn/imaginary/6f86b8688355ab9c2f3badd0ad3315d7458807a3/profile_avatar/f1dadfcf6d90d46d4c7c559a23e37c65458ac5f1/thumbnail?width=32'},
	{name: 'chị 14', src:'https://static.chotot.com.vn/imaginary/e485196c25a3d01ea6d3b2650cd00f5f2255d437/profile_avatar/2a7e44b08432ad4a5cc713d20cc290f7fccb892a/thumbnail?width=32'},
	{name: 'cường tỏi', src:'https://static.chotot.com.vn/imaginary/aff479ff1b496413dc65a82c5df39cfe8e919a8c/profile_avatar/1296848126ded1044694b0adfe3e45d72e844e71/thumbnail?width=32'},
	{name: 'bánh ích ốm nhách', src:'https://static.chotot.com.vn/imaginary/1a918da89319e885e886ef6bf4f4d358aedcd33f/profile_avatar/6ac8febb97a9046c5fe09d9164782b17855573fa/thumbnail?width=32'},
	{name: 'DESPACITO', src:'https://static.chotot.com.vn/imaginary/31fcacba59f6480017be54626664d8a59a7db7f6/profile_avatar/4f24ad8a15f64018101ec78dc1741e0cac515b41/thumbnail?width=32'},
	{name: 'linH', src:'https://static.chotot.com.vn/imaginary/23c53dae2124dae26722ea0ff0471e64b625a9aa/profile_avatar/ef96e09ad7a67aa778b670c026af8f19a32d572e/thumbnail?width=32'},
	{name: 'Hiền hỒ', src:'https://static.chotot.com.vn/imaginary/3e13cc3de915ce7f10b3b92f73775f29a661406e/profile_avatar/e6c8c72ea6e050dd1e4673d9fc74bd93d9216fdb/thumbnail?width=32'},
	{name: 'Kim Chu', src:'https://static.chotot.com.vn/imaginary/6b018cbb1b2a23ffd9a71bb7a950f933a5f481b5/profile_avatar/3489aa0a90a6a7b338e38c2e4f0951620741e943/thumbnail?width=32'},
	{name: 'Kim nhã', src:'https://static.chotot.com.vn/imaginary/193fc26dadf6647470fcb6b0c438ec6cc87af410/profile_avatar/6e70520fd586e02e0660197dbc7b8195fe70018d/thumbnail?width=32'},
	{name: 'ngốC', src:'https://static.chotot.com.vn/imaginary/173295cd04189216d2209c50a3f00f59e00f374c/profile_avatar/96ad7f54609318e422ebb34136fbd9b65fdcff71/thumbnail?width=32'},
	{name: 'Morphin', src:'https://static.chotot.com.vn/imaginary/a8fca5cdae58aa4a3d8335edc346fbbd9c5e1a36/profile_avatar/d3f71f7735ccfbcd72e38425590990a1f6a3ec69/thumbnail?width=32'},
	{name: 'Tèo Em', src:'https://static.chotot.com.vn/imaginary/4752ce88a6e234329da02e12112642b451b50fcf/profile_avatar/ad9408ea49a5f49c595490db791cc966c82eae5e/thumbnail?width=32'},
	{name: 'Juva', src:'https://static.chotot.com.vn/imaginary/b009ad7b93fffc7fecd6f8f426c94ecb9460a70b/profile_avatar/5155b69e165971094c4a881fce308efd21a7885c/thumbnail?width=32'},
	{name: 'Khương Toàn', src:'https://static.chotot.com.vn/imaginary/9bd3d21fe776b16479d2bbe28d33920d836895ff/profile_avatar/05c158bacd4638aada5b09354161afa87c907190/thumbnail?width=32'},
	{name: 'Mỹ Miều', src:'https://static.chotot.com.vn/imaginary/640b7acf31f5c1453b63559e3d8c4d6cbfd61655/profile_avatar/1066a0033a5eff732e582595691434c0cb6794da/thumbnail?width=32'},
	{name: 'SAVE ME', src:'https://static.chotot.com.vn/imaginary/d398754bffd194cdb1c9ba869f25caf56c836bc0/profile_avatar/b2c0631482d4ff9f036e5056a877977c94264465/thumbnail?width=32'},
	{name: 'Bồ Tèo', src:'https://static.chotot.com.vn/imaginary/3f2952f072d62f440aa5f33cb713d2d74eeed0d2/profile_avatar/ccb1484492549ffe1bfbbb093db013b5dbf3c233/thumbnail?width=32'},
	{name: 'Kathy', src:'https://static.chotot.com.vn/imaginary/348a1aa901feecc47e3e9ee7bcb90432012906d8/profile_avatar/160b828c71a6d1423baa48b4cbc55e7d69c21995/thumbnail?width=32'},
	{name: 'hạ sơn', src:'https://static.chotot.com.vn/imaginary/ab836c44eb868563248ea32ccb2d71b952053f69/profile_avatar/ca818c1b4c9d3bbbe6b0dedf05f5b9e83cef100d/thumbnail?width=32'},
	{name: 'MIU MIU', src:'https://static.chotot.com.vn/imaginary/0df6e15760daee0f6f3e04d03f9af5a47bfac18d/profile_avatar/dac270518edf705200ed3214a4755cc0620d40e1/thumbnail?width=32'},
	{name: 'Voz TòNG', src:'https://static.chotot.com.vn/imaginary/6e55ca263383021e998b02ed2faded47fd7bb424/profile_avatar/de7cba146dbeec49718da3f52af3fddab133afd8/thumbnail?width=32'},
	{name: 'long akA', src:'https://static.chotot.com.vn/imaginary/9963259dce614716d7945a3a1eefb23d3cb0bfef/profile_avatar/3b8c509265ce81606520f63a5e3eb1219bf9b3a4/thumbnail?width=32'},
	{name: 'Vũ VăN', src:'https://static.chotot.com.vn/imaginary/eb19a167189ad7ad101ca17fc4169c33e9faa754/profile_avatar/d5990b338b98088f00ced940370cb40c2f28dc9b/thumbnail?width=32'},
	{name: 'Jay Jay', src:'https://static.chotot.com.vn/imaginary/42236940a84b14c4ed5031dfc54165c99a2271e6/profile_avatar/2a9bc8703a19893cbcd4a22f23cfd1f2362ccb57/thumbnail?width=32'},
	{name: 'Ngân Nguyễn', src:'https://static.chotot.com.vn/imaginary/893eba71c1f7d0b6ce0a4bf15c57b81643c3e2e1/profile_avatar/5db63b21cfc798bfafaec1ff4e3902786e51f6b2/thumbnail?width=32'},
	{name: 'Quỳnh Như', src:'https://static.chotot.com.vn/imaginary/b1c825ec7c8146499a26e8b887be208209897182/profile_avatar/e2b0c126de75d4c103b9c4ea085ad426c3adfad5/thumbnail?width=32'},
	{name: 'Cúc Trâm', src:'https://static.chotot.com.vn/imaginary/fad60793a0fdb3b5fbbed190ba4f3c5657b80708/profile_avatar/3a3db181c90876bab7974e2dbc94daadb7911510/thumbnail?width=32'},
	{name: 'long gÀ', src:'https://static.chotot.com.vn/imaginary/8130c846be4e7e7db1b03a08e0da6d598020e1fc/profile_avatar/5ac4ae1d4c52ba6117ac0e4ff3c83ea7f0f35020/thumbnail?width=32'},
	{name: 'minh nguyễn', src:'https://static.chotot.com.vn/imaginary/a0bacac29bd5bbc8a9ec9e2cf3bd61cb9b66e2fa/profile_avatar/4183a745297dfc6eaa180496fce9e20147d1b0e3/thumbnail?width=32'},
	{name: 'Mỹ Doanh', src:'https://static.chotot.com.vn/imaginary/70fc585723ab14c6a2644aba6974adc55e0a319c/profile_avatar/91162cc5f74eac59f8c6e23e99a09d40ad2e75f1/thumbnail?width=32'},
	{name: 'SinH', src:'https://static.chotot.com.vn/imaginary/e8c2e97970ece908e9af23de27c450d09c44cc17/profile_avatar/ea5a2c17136ebcc11ea4bd09053ea6c51ea2b7bb/thumbnail?width=32'},
	{name: 'Dũng CòI', src:'https://static.chotot.com.vn/imaginary/9d400cf03ee7fee7ba7b7d7236ca3f541e8a4cfd/profile_avatar/54ff1753d267327fb26a73b1f1b00df590c257d7/thumbnail?width=32'},
	{name: 'ĐẠT LonG', src:'https://static.chotot.com.vn/imaginary/df075c9bd4cd1b4627c69ff71c1e9f8be22f2186/profile_avatar/0bf7415b0c4806d9c2e36ac2733c0d35fbd7ba9b/thumbnail?width=32'},
	{name: 'tiêu long', src:'https://static.chotot.com.vn/imaginary/ea24c7fc04fe81a3c973bdf6a9f31e858d58d7cc/profile_avatar/50627476a259cfd13e5176761d7d5f437fae8b76/thumbnail?width=32'},
	{name: 'nguyễn sơn chuyên pc game ming', src:'https://static.chotot.com.vn/imaginary/eb8b7a3ae32ca226a04060a8b57519c67e88aab4/profile_avatar/71638e7b371e887320cc90e89da7eee77650cd9b/thumbnail?width=32'},
	{name: 'hưng', src:'https://static.chotot.com.vn/imaginary/2740232e3742c64780b55000d24e729c7ee8011c/profile_avatar/035ec3d9ed08b234be6e6ce27b4a69a9b36dfabf/thumbnail?width=32'},
	{name: 'TuấN', src:'https://static.chotot.com.vn/imaginary/6fad03058b13917eb73b4b7132fd5e5bee266a7f/profile_avatar/45ee150f3080944d875929c510a428e8078063ff/thumbnail?width=32'},
	{name: 'TíN', src:'https://static.chotot.com.vn/imaginary/9f48d7385458afacddd4a338568d2c0383f8303b/profile_avatar/3eaf81f4da2e313fc636fcedafdf206a3baae3c2/thumbnail?width=32'},
	{name: 'Benni Châu', src:'https://static.chotot.com.vn/imaginary/25a004b1c5912ea898bdadf6ce348bac939819a8/profile_avatar/1a322e47498c80884f7153c6d4a559535aa6e35f/thumbnail?width=32'},
	{name: 'QuÝ', src:'https://static.chotot.com.vn/imaginary/69fb49f56a25c3530a90f05b85822338e635c366/profile_avatar/351861744312e5b3c8ae731c1b2a8cc49c242114/thumbnail?width=32'},
	{name: 'TùnG', src:'https://static.chotot.com.vn/imaginary/624cbd62e4f0f162355e56b986e6861967ebae0b/profile_avatar/d8113826b3ac69882b94ee15c4542c91d0eb2ccb/thumbnail?width=32'},
	{name: 'Phước Lộc Thọ', src:'https://static.chotot.com.vn/imaginary/40a80c34bf89c6f8c6e7649d54794928a5f53142/profile_avatar/529437345f97f7084d0cbe12614ea4e6434e273f/thumbnail?width=32'},
	{name: 'LuâN', src:'https://static.chotot.com.vn/imaginary/f4b4565287fcf33d52cd0d8328f620b941492ce9/profile_avatar/ad732380285df3f34a484ab27827801c93ce5a3e/thumbnail?width=32'},
	{name: 'LuâN', src:'https://static.chotot.com.vn/imaginary/ebc34cba36f61961882282a09400da16cdd7b034/profile_avatar/e98bd6625236c0f657c0b8711d5b55406394d2ff/thumbnail?width=32'},
	{name: 'Kim Phụng', src:'https://static.chotot.com.vn/imaginary/e43623e030a396294f7252888bbbb013934360a5/profile_avatar/05c913f9ff8cd9c2a699d151721b92b5fe4c9261/thumbnail?width=32'},
	{name: 'gianG', src:'https://static.chotot.com.vn/imaginary/8689d322cf4020150d6aa079c14483b7aec2de07/profile_avatar/a9a5a209fd6c8ab01ccea4063cf4223a284ba2cb/thumbnail?width=32'},
	{name: 'Vân QuỳnH', src:'https://static.chotot.com.vn/imaginary/31111a04a61bd45e329e66e0ecf0efbdfbf99f7b/profile_avatar/02c1468d49cba76da4a6a368e2a81f427be8447a/thumbnail?width=32'},
	{name: 'Tri Kỹ', src:'https://static.chotot.com.vn/imaginary/d311742c2104c1a1a4421a4bd03b226479792529/profile_avatar/0d7aa20cb1656a66b9635e4849de1bbc158d820c/thumbnail?width=32'},
	{name: 'vô minH', src:'https://static.chotot.com.vn/imaginary/21ce47a8c9ceb892950585de0f44bd6a2bb6fdde/profile_avatar/2c632f06e4288144fe4b165b170bd4e503a57afe/thumbnail?width=32'},
	{name: 'Hoà Nhã', src:'https://static.chotot.com.vn/imaginary/53569e9c4107272ccf26ab661547258da7d6f1ba/profile_avatar/14776d37df83f80667e753ff489430f6992c1978/thumbnail?width=32'},
	{name: 'tìnH', src:'https://static.chotot.com.vn/imaginary/a876105962a1ec8a19b84205a095773c1eb7fffc/profile_avatar/6263f09ea2ab802696db84d919d4c4d429b4918c/thumbnail?width=32'},
	{name: 'Try Ân', src:'https://static.chotot.com.vn/imaginary/15a9c59258dc0665a6bc41a50e84aae1e5ee38d1/profile_avatar/7662ed00c932cf6d690743a0c97d20883ee85c4a/thumbnail?width=32'},
	{name: 'phong bA', src:'https://static.chotot.com.vn/imaginary/2c012833ef37f99fb42cfee237831d81b2baecf1/profile_avatar/e193fd1e18f9f470cf97ce792c637a142ec846f9/thumbnail?width=32'},
	{name: 'Kim Chi', src:'https://static.chotot.com.vn/imaginary/bb086c2acd4ffa8a9cddc26d26f5db486141cb50/profile_avatar/c5d773696d15c064d1db6ca4f22586c80bb9e15f/thumbnail?width=32'},
	{name: 'Quế Chi', src:'https://static.chotot.com.vn/imaginary/7542f4d8b762a369606bd2ac969fc4a09e20b8a8/profile_avatar/777882be9b094b2300a37040944cf48fa6d44be0/thumbnail?width=32'},
	{name: 'nhÂn', src:'https://static.chotot.com.vn/imaginary/787f1763fb7eb2f8549a91e934b793f5d6de0590/profile_avatar/878a0e44c977772975699053bb2e9bc440b9d760/thumbnail?width=32'},
	{name: 'long gÀ', src:'https://static.chotot.com.vn/imaginary/2db8f88a4f8c76b244395a2627b7049d8ebf40de/profile_avatar/8fa419ff002daa02ed33d11151a79d012cdd18ca/thumbnail?width=32'},
	{name: 'tự tạI', src:'https://static.chotot.com.vn/imaginary/918d852473d0e66112e7fd575791561aa45480be/profile_avatar/c8513c9ea51051185b793193920c61297fb03a53/thumbnail?width=32'},
	{name: 'cHương', src:'https://static.chotot.com.vn/imaginary/02281f434802aabdf12448f3a81c4c65a9d3c3e5/profile_avatar/c5af57634b016c36b1fb0a285fadbabe015c926d/thumbnail?width=32'},
	{name: 'NgốK', src:'https://static.chotot.com.vn/imaginary/d0bf6c7efdd9f7fc9b71e797266760060c0cc3b8/profile_avatar/02b36313e66463b451511da0fccd557ed12bd220/thumbnail?width=32'},
	
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
}, 2000);

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