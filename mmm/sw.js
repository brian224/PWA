const version = "0.6.11";
const cacheName = `MMM-${version}`;
self.addEventListener('install', e => {
	const timeStamp = Date.now();
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				'/',
				'/index.html',
				'/bed.html',
				'/product.html',
				'/product-features.html',
				'/product-series.html',
				'/result.html',
				'/Scripts/js/bed.min.js',
				'/Scripts/js/common.min.js',
				'/Scripts/js/factory.min.js',
				'/Scripts/js/product.min.js',
				'/Scripts/plugin/createjs/createjs-2015.11.26.min.js',
				'/Scripts/plugin/jquery/jquery.min.js',
				'/Scripts/plugin/pwacompat.min.js',
				'/Content/img/bed/bed_b_01.png',
				'/Content/img/bed/bed_b_02.png',
				'/Content/img/bed/bed_bg.jpg',
				'/Content/img/bed/bed_chk.png',
				'/Content/img/bed/bed_s_01.png',
				'/Content/img/bed/bed_s_02.png',
				'/Content/img/bed/box-bg.png',
				'/Content/img/bed/boy_01.png',
				'/Content/img/bed/boy_02.png',
				'/Content/img/bed/cat_01.png',
				'/Content/img/bed/cat_02.png',
				'/Content/img/bed/cat_03.png',
				'/Content/img/bed/cat_04.png',
				'/Content/img/bed/cat_05.png',
				'/Content/img/bed/cat_06.png',
				'/Content/img/bed/cat_07.png',
				'/Content/img/bed/cat_08.png',
				'/Content/img/bed/dog_02.png',
				'/Content/img/bed/dog_03.png',
				'/Content/img/bed/dog_04.png',
				'/Content/img/bed/dog_05.png',
				'/Content/img/bed/dog_06.png',
				'/Content/img/bed/dog_07.png',
				'/Content/img/bed/dog_08.png',
				'/Content/img/bed/dog_09.png',
				'/Content/img/bed/foot_01.png',
				'/Content/img/bed/foot_02.png',
				'/Content/img/bed/girl_01.png',
				'/Content/img/bed/girl_02.png',
				'/Content/img/bed/hand_01.png',
				'/Content/img/bed/hand_02.png',
				'/Content/img/bed/icon_01.png',
				'/Content/img/bed/icon_02.png',
				'/Content/img/bed/line_lr.png',
				'/Content/img/bed/loading.png',
				'/Content/img/bed/remove.png',
				'/Content/img/bed/reset.png',
				'/Content/img/bed/resize.png',
				'/Content/img/bed/share_bg_01.png',
				'/Content/img/bed/share_bg_02.png',
				'/Content/img/bed/share_sign_01.png',
				'/Content/img/bed_m/icon_01.png',
				'/Content/img/bed_m/icon_02.png',
				'/Content/img/bed_m/reset.png',
				'/Content/img/index/index.png',
				'/Content/img/not-support/chrome.png',
				'/Content/img/not-support/firefox.png',
				'/Content/img/not-support/ie.png',
				'/Content/img/not-support/safari.png',
				'/Content/img/product/features/breathable01.png',
				'/Content/img/product/features/breathable02.png',
				'/Content/img/product/features/compare01.png',
				'/Content/img/product/features/compare02.png',
				'/Content/img/product/features/Cool-Down.png',
				'/Content/img/product/features/feature01.png',
				'/Content/img/product/features/feature02.png',
				'/Content/img/product/features/feature03.png',
				'/Content/img/product/features/feature04.png',
				'/Content/img/product/features/mites.png',
				'/Content/img/product/features/wash01.png',
				'/Content/img/product/features/wash02.png',
				'/Content/img/product/item1/01b.jpg',
				'/Content/img/product/item1/01s.png',
				'/Content/img/product/item1/02b.jpg',
				'/Content/img/product/item1/02s.png',
				'/Content/img/product/item1/03b.jpg',
				'/Content/img/product/item1/03s.png',
				'/Content/img/product/item1/pattern.png',
				'/Content/img/product/item2/01b.jpg',
				'/Content/img/product/item2/01s.png',
				'/Content/img/product/item2/02b.jpg',
				'/Content/img/product/item2/02s.png',
				'/Content/img/product/item2/pattern.png',
				'/Content/img/product/merchandise/01.png',
				'/Content/img/product/merchandise/02.png',
				'/Content/img/product/merchandise/03.png',
				'/Content/img/product/merchandise/04.png',
				'/Content/img/product/gift.png',
				'/Content/img/product/nieh.png',
				'/Content/img/product/product.png',
				'/Content/img/product/product-features.png',
				'/Content/img/product/title.png',
				'/Content/img/result/demo.png',
				'/Content/img/result/result.png',
				'/Content/img/shared/favicon.ico',
				'/Content/img/shared/fb.png',
				'/Content/img/shared/icon-192.png',
				'/Content/img/shared/icon-512.png',
				'/Content/img/shared/icons.png',
				'/Content/css/bed.css',
				'/Content/css/index.css',
				'/Content/css/product.css',
				'/Content/css/result.css',
				'/Content/css/style.css'
			]).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open(cacheName).then(cache => cache.match(event.request, {ignoreSearch: true})).then(response => {
			return response || fetch(event.request);
		})
	);
});

self.addEventListener('notificationclick', function(event) {
	var _notification = event.notification;
	var _action = event.action;

	// console.log(notification);
	if(_action === 'confirm') {
		console.log('使用者點選確認');
		_notification.close();
	} else {
		console.log('使用者沒興趣',event);
		_notification.close();
	}
});