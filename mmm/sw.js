const version = "0.6.11";
const cacheName = `MMM-${version}`;
self.addEventListener('install', e => {
	const timeStamp = Date.now();
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				'/PWA/mmm/views/',
				'/PWA/mmm/views/index.html',
				'/PWA/mmm/views/bed.html',
				'/PWA/mmm/views/product.html',
				'/PWA/mmm/views/product-features.html',
				'/PWA/mmm/views/product-series.html',
				'/PWA/mmm/views/result.html',
				'/PWA/mmm/Scripts/js/bed.min.js',
				'/PWA/mmm/Scripts/js/common.min.js',
				'/PWA/mmm/Scripts/js/factory.min.js',
				'/PWA/mmm/Scripts/js/product.min.js',
				'/PWA/mmm/Scripts/plugin/createjs/createjs-2015.11.26.min.js',
				'/PWA/mmm/Scripts/plugin/jquery/jquery.min.js',
				'/PWA/mmm/Scripts/plugin/pwacompat.min.js',
				'/PWA/mmm/Content/img/bed/bed_b_01.png',
				'/PWA/mmm/Content/img/bed/bed_b_02.png',
				'/PWA/mmm/Content/img/bed/bed_bg.jpg',
				'/PWA/mmm/Content/img/bed/bed_chk.png',
				'/PWA/mmm/Content/img/bed/bed_s_01.png',
				'/PWA/mmm/Content/img/bed/bed_s_02.png',
				'/PWA/mmm/Content/img/bed/box-bg.png',
				'/PWA/mmm/Content/img/bed/boy_01.png',
				'/PWA/mmm/Content/img/bed/boy_02.png',
				'/PWA/mmm/Content/img/bed/cat_01.png',
				'/PWA/mmm/Content/img/bed/cat_02.png',
				'/PWA/mmm/Content/img/bed/cat_03.png',
				'/PWA/mmm/Content/img/bed/cat_04.png',
				'/PWA/mmm/Content/img/bed/cat_05.png',
				'/PWA/mmm/Content/img/bed/cat_06.png',
				'/PWA/mmm/Content/img/bed/cat_07.png',
				'/PWA/mmm/Content/img/bed/cat_08.png',
				'/PWA/mmm/Content/img/bed/dog_02.png',
				'/PWA/mmm/Content/img/bed/dog_03.png',
				'/PWA/mmm/Content/img/bed/dog_04.png',
				'/PWA/mmm/Content/img/bed/dog_05.png',
				'/PWA/mmm/Content/img/bed/dog_06.png',
				'/PWA/mmm/Content/img/bed/dog_07.png',
				'/PWA/mmm/Content/img/bed/dog_08.png',
				'/PWA/mmm/Content/img/bed/dog_09.png',
				'/PWA/mmm/Content/img/bed/foot_01.png',
				'/PWA/mmm/Content/img/bed/foot_02.png',
				'/PWA/mmm/Content/img/bed/girl_01.png',
				'/PWA/mmm/Content/img/bed/girl_02.png',
				'/PWA/mmm/Content/img/bed/hand_01.png',
				'/PWA/mmm/Content/img/bed/hand_02.png',
				'/PWA/mmm/Content/img/bed/icon_01.png',
				'/PWA/mmm/Content/img/bed/icon_02.png',
				'/PWA/mmm/Content/img/bed/line_lr.png',
				'/PWA/mmm/Content/img/bed/loading.png',
				'/PWA/mmm/Content/img/bed/remove.png',
				'/PWA/mmm/Content/img/bed/reset.png',
				'/PWA/mmm/Content/img/bed/resize.png',
				'/PWA/mmm/Content/img/bed/share_bg_01.png',
				'/PWA/mmm/Content/img/bed/share_bg_02.png',
				'/PWA/mmm/Content/img/bed/share_sign_01.png',
				'/PWA/mmm/Content/img/bed_m/icon_01.png',
				'/PWA/mmm/Content/img/bed_m/icon_02.png',
				'/PWA/mmm/Content/img/bed_m/reset.png',
				'/PWA/mmm/Content/img/index/index.png',
				'/PWA/mmm/Content/img/not-support/chrome.png',
				'/PWA/mmm/Content/img/not-support/firefox.png',
				'/PWA/mmm/Content/img/not-support/ie.png',
				'/PWA/mmm/Content/img/not-support/safari.png',
				'/PWA/mmm/Content/img/product/features/breathable01.png',
				'/PWA/mmm/Content/img/product/features/breathable02.png',
				'/PWA/mmm/Content/img/product/features/compare01.png',
				'/PWA/mmm/Content/img/product/features/compare02.png',
				'/PWA/mmm/Content/img/product/features/Cool-Down.png',
				'/PWA/mmm/Content/img/product/features/feature01.png',
				'/PWA/mmm/Content/img/product/features/feature02.png',
				'/PWA/mmm/Content/img/product/features/feature03.png',
				'/PWA/mmm/Content/img/product/features/feature04.png',
				'/PWA/mmm/Content/img/product/features/mites.png',
				'/PWA/mmm/Content/img/product/features/wash01.png',
				'/PWA/mmm/Content/img/product/features/wash02.png',
				'/PWA/mmm/Content/img/product/item1/01b.jpg',
				'/PWA/mmm/Content/img/product/item1/01s.png',
				'/PWA/mmm/Content/img/product/item1/02b.jpg',
				'/PWA/mmm/Content/img/product/item1/02s.png',
				'/PWA/mmm/Content/img/product/item1/03b.jpg',
				'/PWA/mmm/Content/img/product/item1/03s.png',
				'/PWA/mmm/Content/img/product/item1/pattern.png',
				'/PWA/mmm/Content/img/product/item2/01b.jpg',
				'/PWA/mmm/Content/img/product/item2/01s.png',
				'/PWA/mmm/Content/img/product/item2/02b.jpg',
				'/PWA/mmm/Content/img/product/item2/02s.png',
				'/PWA/mmm/Content/img/product/item2/pattern.png',
				'/PWA/mmm/Content/img/product/merchandise/01.png',
				'/PWA/mmm/Content/img/product/merchandise/02.png',
				'/PWA/mmm/Content/img/product/merchandise/03.png',
				'/PWA/mmm/Content/img/product/merchandise/04.png',
				'/PWA/mmm/Content/img/product/gift.png',
				'/PWA/mmm/Content/img/product/nieh.png',
				'/PWA/mmm/Content/img/product/product.png',
				'/PWA/mmm/Content/img/product/product-features.png',
				'/PWA/mmm/Content/img/product/title.png',
				'/PWA/mmm/Content/img/result/demo.png',
				'/PWA/mmm/Content/img/result/result.png',
				'/PWA/mmm/Content/img/shared/favicon.ico',
				'/PWA/mmm/Content/img/shared/fb.png',
				'/PWA/mmm/Content/img/shared/icon-192.png',
				'/PWA/mmm/Content/img/shared/icon-512.png',
				'/PWA/mmm/Content/img/shared/icons.png',
				'/PWA/mmm/Content/css/bed.css',
				'/PWA/mmm/Content/css/index.css',
				'/PWA/mmm/Content/css/product.css',
				'/PWA/mmm/Content/css/result.css',
				'/PWA/mmm/Content/css/style.css'
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