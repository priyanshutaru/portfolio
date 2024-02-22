'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b47495335b1c19f37cc09255059b536a",
"assets/AssetManifest.bin.json": "dee350853a711f14f63f3689b084061c",
"assets/AssetManifest.json": "007d28c8f2ce229fcc219b060d1df8e6",
"assets/assets/android_icon.png": "4f917f91ac87a78d2f1643b996db3d4b",
"assets/assets/apple_icon.png": "f0b9176ae7fd92f8fb97f513053d14c2",
"assets/assets/aws_icon.png": "52e6899a2fe018087bea1dad6257d442",
"assets/assets/bird_image.png": "adf03c5e3c90d4e867f7116a3a331ba1",
"assets/assets/dart_icon.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/dealer_project.png": "486dbdf0d1c28c662a7c591a563a29d3",
"assets/assets/desktop_icon.png": "cca6a940ecb113c796cdaf7b716e1f54",
"assets/assets/docker_icon.png": "83c53b1f96c677f060f996590d1868ec",
"assets/assets/driver_project.jpg": "d36e95dfedf2b58be66c0a41e42e54a1",
"assets/assets/firebase_icon.png": "51d4601db0a3d48e24f3cc6c0b1f7c3b",
"assets/assets/flutter_icon.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/geeksforgeeks.png": "f9c138594985c68b1aa2f5cada1cda18",
"assets/assets/github_black.png": "d6f78d8b061c36440c46bfd9461dcd95",
"assets/assets/github_icon.png": "50472625bd666f1693cc4ee9fd6dfe50",
"assets/assets/github_outlined.png": "0775bd25f13c6b7d40a71f87934ba102",
"assets/assets/instagram_icon.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/assets/Isoping_project.png": "66ac5ef4b8c0ba483918a0a42574722e",
"assets/assets/isoping_work_project.png": "f65ddfbfed9e473e1d7e23e25f259477",
"assets/assets/leetcode.png": "440307ecd53b77283962125d5d24a1f0",
"assets/assets/linkedin_icon.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/logo_image.png": "d59d0e8266b087a7a7f8a61c50ad4f6e",
"assets/assets/mongo_db_icon.png": "47ebf39a276947933b89ce55de713881",
"assets/assets/music_project.jpg": "861bba50628df7cb314ad028bb136103",
"assets/assets/nodejs_icon.png": "e84e544b9ac1cc3cc93678fa3f3cc86e",
"assets/assets/sql_icon.png": "c240047cfc54a1a359e77bbd830489d7",
"assets/assets/teligram_icon.png": "30b901ba097e261cb6c8a4f9dacf19e2",
"assets/assets/twitter_icon_old.png": "b140ca3d5f022c5dae356d9871a02ad0",
"assets/assets/visitor_mng_project.png": "7747bdab0ab0b2dd75805d609a56e622",
"assets/assets/web_icon.png": "5ed05f710645527997ba23ae60291db1",
"assets/assets/weddify_project.png": "52d7fc5f5a7756fa61db8e8a2cf0f4bd",
"assets/assets/whatsapp_icon.png": "35323afcb9d6c0f3949a0b44619b85db",
"assets/assets/x_icon.png": "ef3ff0963233da4259fa3a868e87083c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "94202d914102b16c47ff848189a863b5",
"assets/NOTICES": "92167d765158353411e1a7f1af8bf683",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d10d5eb25a0e4f9322a29261f17de8f",
"/": "4d10d5eb25a0e4f9322a29261f17de8f",
"main.dart.js": "f77262266198dc0b0ff6bd661b8fd82f",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
