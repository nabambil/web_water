'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8371e581de695c88c122d961c738641c",
"index.html": "8bb85c3e65f976f5cf62d010d518428b",
"/": "8bb85c3e65f976f5cf62d010d518428b",
"main.dart.js": "0b0a3d2c7bb9324de47d1f324617b2d7",
"README.md": "75b97b424181b03bd23478a6cebaba11",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "829b0dc782f4afab9d061c8199329534",
".git/config": "978e05405b43410120527cc3601229ba",
".git/objects/3b/a002ba403ef8a8a46acfa03dcab792af71b27a": "353040842d3b65defd4770f3a376e29c",
".git/objects/6f/80bfd621bb6f28569c9e56019761335a96d5e5": "bb26cdbc81ee3572f83ab98e01c291da",
".git/objects/6a/96a44a3840c00436d45fb9c3305b467fffe70b": "17a2ad9dc39c35382bef3dd8c6df329c",
".git/objects/94/c163d561078bd791344952aaad184f1f181008": "0ee33168b842253405c850d7cf5c310d",
".git/objects/33/037926c6a89073d890566e4f7e8f7ac153d7f5": "c68ce0a2664526c10e0b26239d3dd066",
".git/objects/a3/72c55cae2dcffb05914bfbdea5c0aa411242e4": "f144945bc495853e10e2470bf589e86e",
".git/objects/df/ad6fa7ad6b8841ef899d00730726fb712d7e0c": "b4cb787872593b8e752f8131589c9032",
".git/objects/pack/pack-afb6f15999c0ea3a32ed5d26e53bf13165bccc34.idx": "9c773854943d1c9ad6aa28e03998d24e",
".git/objects/pack/pack-afb6f15999c0ea3a32ed5d26e53bf13165bccc34.pack": "5b6f6d8cb210198bb3db6ecc33f24ea2",
".git/objects/42/59d6056909c22113767a8f0b220e5c8fced62d": "08996ee2723a24b1948c4adb56a85f71",
".git/objects/09/b012d9181736c6ac9d9fd837d312e654183739": "8e80aa0e30a3ec34092713bf96ad0bb4",
".git/objects/96/cf223fb5307b65834a814e14d37f4c17789629": "021ea9925bc51d6929a0b7d6dd609c86",
".git/objects/52/c69da6ac515fe335b538064acb065c5329e2fb": "4145e0c2dc5b6b8cc994636a85aaad0d",
".git/objects/55/de2311029ff4651939b38c45813974562ccf16": "3e01a0c98d82b7bb6f4ffa0fe5272ef5",
".git/objects/b1/9de08f4e2fc6fc1dcea4cf451846d0f59da6e9": "b73c96312759bf9449b6c26902a3f58b",
".git/objects/d2/1b0cab6096ee7cc5683939076b28e1cd4ebf3c": "3b86b45cc1aa25a83d2ceaab149fe6e4",
".git/objects/f9/a88509c8862ed503223c004da0d4d708f48314": "efe7b76f31fb227fb828c83be090a9b2",
".git/objects/c5/b0283e50edcdfb05227011bb82b59a11ac9ef5": "b6a7e08ef235fc5365a5191b5e1b666d",
".git/objects/ce/ff125d07d102a5323e8508e015d5607fa9af2a": "812d05fc481b25d4bd9bb03d5fa8d230",
".git/objects/2d/5a43678f7dc7ae65808c14080939b77781d47b": "18936e3c4a1e85b9e11b3f950e212213",
".git/objects/41/fa015dee7083ec784d108bc7f6af3be68e3eba": "2d1fb1b567369ecaec3fb94c7d6073e9",
".git/objects/83/0fe69d6efad83ca56d430026a834222acc341b": "a0321617bf4194e746782acd5687a55b",
".git/HEAD": "23f0603cacb03deeee8472aa5922a9d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d56df86828422117e987017feea3db13",
".git/logs/refs/heads/prod": "b56f7023ece32a211365d5334e1ee1fc",
".git/logs/refs/heads/main": "d43da8fec4b2f6fc9cde78c784c97308",
".git/logs/refs/remotes/origin/prod": "922ec6dd14cbd2f2d44d05be254b4816",
".git/logs/refs/remotes/origin/HEAD": "a4b5248ddde0fd3e3bb81ec3183efda2",
".git/logs/refs/remotes/origin/main": "15ad87116dbc4caa429a18d761f21eb6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/prod": "ab9ec10da200072356fe974e440577fe",
".git/refs/heads/main": "ab9ec10da200072356fe974e440577fe",
".git/refs/remotes/origin/prod": "ab9ec10da200072356fe974e440577fe",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ab9ec10da200072356fe974e440577fe",
".git/index": "4c3141d0391e5e82566496b4d3ea87aa",
".git/packed-refs": "6c9a285a80062c0aeaa58c8157142529",
".git/COMMIT_EDITMSG": "aaa8bcd9313d6a14fc454a8295074bd2",
".git/FETCH_HEAD": "7c9e77cf8e3714901cf23c93c3a82871",
"assets/AssetManifest.json": "0b0572ef85851f4a183784d66f4300aa",
"assets/NOTICES": "cf8c8722646d8867eb1a3498e89e51db",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/shaders/ink_sparkle.frag": "a616c9605bb3ba3bfd999e199024481a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/noCode_UI_onLight@3x.png": "31a147c697b62bd9ae28372460fe1757",
"assets/assets/images/noCode_UI_onDark@3x.png": "0531597a7a9ebfbd2ace28601346a04c",
"assets/assets/images/splash_dashboard_03@3x.png": "f240e04a18c2519d05058b23ca64ce14",
"assets/assets/images/app_launcher_icon.png": "d27dd2c0f2ca6fb6a13d822225476c3c",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/hygrometer.png": "d27dd2c0f2ca6fb6a13d822225476c3c",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Lexend%2520Deca-SemiBold.ttf": "4e35c5c5270efa6aed1b719e6708ac24",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
