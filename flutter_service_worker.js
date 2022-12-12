'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8371e581de695c88c122d961c738641c",
"index.html": "a0f104126b2f7f1ec602b571cac6e6f1",
"/": "a0f104126b2f7f1ec602b571cac6e6f1",
"main.dart.js": "75d452ac26231bdb080544fc71f46fb9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "829b0dc782f4afab9d061c8199329534",
".git/config": "ee7fa8bf1748892675baf1e31eb89ced",
".git/objects/59/cf837b4e97635c0e39e0814dfe3ed762c931ae": "26f48090ad321f8ad212d2c579c3b7b3",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/0b/5ad93108d98f1e5d162fa11e9114a024d95b61": "becddc6f7dbbd8692e34544a9cd5abd7",
".git/objects/5f/1ebb816cf46e18655187cac3a3ad3897fef5c9": "8b2bd0ba0a43503bb626bc197c08366d",
".git/objects/05/d3e6848e73f4a48c39f587afef6b25fd2ca32a": "2e741a0a0677bd83ce0c04216af0f8cb",
".git/objects/9d/8620163ab0ff0d3a1170678d09be49d529be43": "1f87382c05ad81c1ba16d4520a8702da",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/b5/ec0337078939258baf53cf83d3f6f97888d09c": "31b626cf73fa1403919581a495373f00",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/a5/c0652c6837a8cbb4a3eb4a47c5e7e66b13fb81": "44255e05ce2f4b8e3fe8ccca9c849482",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/374ec09dc9ed53f809d64e9350a3d924ce3785": "0deb3620fb52186e359461a8fb5544bd",
".git/objects/fb/1e289971f970e097c625449463a303b87379e3": "e61439108310041f218ecf1f7445fadb",
".git/objects/20/d0abf329b9539de3f8c611711b4c2229c6dba0": "aedac2c115a2f6002d227f7ee79df8a4",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/29/554060887dbb345282cecd3005147c8e224753": "28c28b0e45131c2c5473646bcdf2d65e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/89/e4e3ae64357cce8a76641ef6ad5bc730196980": "33bd49ffa10e8a5d5fbe6ae981893597",
".git/objects/89/ccba6379fa76fd6a25c632fb08e2df513e68b1": "1c584c32dce02e4ef23e96b90e007634",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/7dc03d82d0b126fd73320a7f8e99e4d3b3b85a": "c51018ae12639e3cf01ac4228b272367",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/64c99c685bdf3fc2537ce9babeb69a44e9db80": "314a90a30542bd494565349209fdaf19",
".git/objects/9a/e09a68456d3a5523ac7ea895df4831feb7341e": "04a25fce056fee8370858d0df970534c",
".git/objects/36/8bac0745be0b81473571901193d49b66532ddb": "facc3a2260134929e09d194658694256",
".git/objects/65/5961109b35f053856d63e61853e0ef7f703563": "a365a67a0fc02b0771bfd82c3f973984",
".git/objects/3a/d18fdbeae9bb9c27473c2fbce9ea52ebabf1ab": "2512894ccaa6cca910fc3976df09967f",
".git/objects/53/6d8afb9462d7d957537557301c50f79bebd0dc": "e9064e7ded75b29032f2ae1d8c6f86fe",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/28721d60521a6b9bf78d5a4213daf087554452": "aa56f930f1ed9bafb0c028bbfb7a8af1",
".git/objects/01/0f0b6e11ef58a014b7ac4e417716df2de9e82a": "0f945d386f05fb446e6161bcc99e2add",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/b795139d809c46ef9672fd799ce1aed5c49dfb": "c8f1e5f5dfc5c52dc7d22d92a8653bcb",
".git/objects/b1/3ac2125e800a2970acb8e6cbaa8443f69a2ed7": "419c3f30b9382f4f1f3e4f13b8456687",
".git/objects/b1/c4cc220df0d3767b2b0ae94324ecd779f2b375": "c7c540d8b9f176d87f807c1ff26f90dd",
".git/objects/dc/9eadb11c0e87a7d713bce87d64065ccda23977": "5c7f5a2b77740aa12ec69bd4aaddc649",
".git/objects/d2/9e084d8ca847c413db0314efcc3f58dd2950d9": "455f88ad162f8435dc4e66cbc3b04edd",
".git/objects/af/8316b0110a009fd4a90d213f186c3c41c8cdad": "7e3e2a0a9478dad1fb7763a0a636953b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fa7b9ed50b896646ec403fca83b94aa898cef3": "969eb52ce3e447f8dde7dcc35232e8ea",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/232e33ce1b1ed4187033e3447732f69c70c124": "ebf5a32d11d98f25a3b134726222b00d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/d06bc34895735fea9aac3eb78877ef45570739": "8ce38466f23044c060c74bf1b57f99ec",
".git/objects/e9/bbb11577dc766154c17d09be6dd67cf8cf07ee": "70f20998cb6416a53e188b87c8838f7a",
".git/objects/ce/b2b4ea92d65d44fbd636e286bb3264ba9cef4a": "c9952b0f2602886c30100bafcfd62a7e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/7d95d18083ab550b326df85c33e9d4264ed65c": "384c9f5c2514fa14af222adc477ddd3e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1c/4c8600bd5488ca3f48dc7479015245151dd428": "f8863747e42cc3945cb83b7bc8267601",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/5d7aeb2f8a59682f67eaaa1a17f8f601866457": "9d413f7246001a227adb6c9db705394b",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a8feb532f5abced94b5e90c73372ac3",
".git/logs/refs/heads/master": "a3b9e50b8b094ed676f948be6c834dc7",
".git/logs/refs/heads/main": "c37e5bcb38695df7f3f7278f1197139e",
".git/logs/refs/remotes/origin/HEAD": "f8ee2a9e4e55b82919fb576fe390c211",
".git/logs/refs/remotes/origin/master": "fc304aea641e8427f6ab3c1aabafcc0e",
".git/logs/refs/remotes/origin/main": "26db07bfda5830ef2e2f41b1c45e89aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "424d1efc52ba8b2b3d29834b2be9a500",
".git/refs/heads/main": "3792db09472a333cd84c6a34643f199b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/master": "424d1efc52ba8b2b3d29834b2be9a500",
".git/refs/remotes/origin/main": "b21a9a13705689c09e61605ddc095a7e",
".git/index": "cd219cfe81874f78981769f4878a0c8a",
".git/COMMIT_EDITMSG": "b07d60710bc2d3054c6a32b3e85acab5",
".git/FETCH_HEAD": "f2d0d25179f6736280e8968752f5f902",
"assets/AssetManifest.json": "0b0572ef85851f4a183784d66f4300aa",
"assets/NOTICES": "c118c897733f4c259befcae39d077a73",
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
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
