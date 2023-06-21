'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"myworker.js": "46f389a48df392b880e48254f96269ca",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"myworker.js.deps": "5dbf64bc98b210c547b505162577b119",
"sqflite_sw.js": "5d8ebc9ac17f92026dab65c0447c53b4",
"version.json": "74d65b440af72cf566fa1b984ddf1c5d",
"index.html": "1f64effb1ab31f4208fe052cef7c48b6",
"/": "1f64effb1ab31f4208fe052cef7c48b6",
"myworker.js.map": "0c1fd89d349442e8657a2154f388c279",
"manifest.json": "085e01ca9d9736d32dfc581ca0dccb56",
"assets/AssetManifest.smcbin": "1314c1cdbac5740d86b392a7f2adeceb",
"assets/FontManifest.json": "d7f6576692c0a1432e3bd8e1c50f17fa",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "c960853acdec72fe98f1ae038a251fa1",
"assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/fonts/MaterialIcons-Regular.otf": "9d0e267943a5e3a87c84605d52dd4137",
"assets/web/assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/web/assets/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/assets/animation/loading.flr": "7736b6bf5f593b1bcf4d4bad1f1aa142",
"assets/assets/fonts/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/assets/svg/truck-big-icon.svg": "d3fede71d6b51701ed847cb273a069d7",
"assets/assets/svg/undefined-icon.svg": "ea2a5581cdf825f2141ae7d8af5b3e1f",
"assets/assets/svg/car-icon.svg": "39be9e6543e4dd4b77f519e44cbc17a1",
"assets/assets/svg/truck-big-iccon.svg": "7f4ec895a85f92bdda5600d182e22c5b",
"assets/assets/svg/opr-icon.svg": "b95bf19f48907859330604b8d0294dbb",
"assets/assets/svg/comb-2-icon.svg": "366fea9ea08e5c640b0d8fad984f5125",
"assets/assets/svg/pogr-icon.svg": "37495954eccbad26c0d50ea4565e3781",
"assets/assets/svg/comb-1-icon.svg": "ca28b7707da3b985258ff34198a3a989",
"assets/assets/svg/status/status_moving.svg": "bbfc754a51933508c7a151e1be0b5eb0",
"assets/assets/svg/status/icon.svg": "d1c1b56c195c5399fe1e3e2513fa6d94",
"assets/assets/svg/status/status_nogps.svg": "4ded245c072a0692375cac90bb0c5324",
"assets/assets/svg/status/status_ignition.svg": "e90270010d6bae394366112a2eafc905",
"assets/assets/svg/status/status_noconnection.svg": "58c29992537637291d3dcdc2e25671db",
"assets/assets/svg/status/status_status_noengine.svg": "71484a150ffc5be06cb4ebdc9ddfde25",
"assets/assets/svg/status/status_standing.svg": "ec6de311c4057fc0c6d7410ef3bb07b3",
"assets/assets/svg/comb-3-icon.svg": "69ad24221294188f5fd1f4a1a34ac289",
"assets/assets/svg/build-icon.svg": "c635d2fc42c959b7958c420c866f5d15",
"assets/assets/svg/train-icon.svg": "f61c18f92ba6a44c88274ee5fd9ea46e",
"assets/assets/svg/bus-icon.svg": "ad6c5bec9a18e26fa7bb8d5422b135be",
"assets/assets/svg/truck-smoll-iccon.svg": "3f976d70e54217223efdadcc65a97673",
"assets/assets/svg/truck-small-icon.svg": "7bb52201c2b4e336a371aaffc699816a",
"assets/assets/svg/tank-truck-icon.svg": "1679ebc4b97e8b43e86f74c42ad046ad",
"assets/assets/svg/other-icon.svg": "6292d30b0de022464fca9697c67bfd5a",
"assets/assets/img/dozor_logo.png": "34dc0266cdc2a3737644d445453f6a2b",
"assets/assets/img/toolbar_monitoring.svg": "8dd616ee89175d2ae3d11b8f4e044fd1",
"assets/assets/img/track_pin.png": "e6788385d95a461fc2b9ce01886cf319",
"assets/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/AssetManifest.json": "74a4b3b3a42153dd5498e077732185c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "68962db8b5d08aa2d77684ddd63ec6f5",
"worker.js": "d83dc24e2af78640ab09c356b5d9da1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
