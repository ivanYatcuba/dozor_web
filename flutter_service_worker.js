'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"myworker.js": "46f389a48df392b880e48254f96269ca",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"myworker.js.deps": "5dbf64bc98b210c547b505162577b119",
"sqflite_sw.js": "5d8ebc9ac17f92026dab65c0447c53b4",
"CNAME": "f03002bb83ea9f16fffe00069505aeed",
"version.json": "74d65b440af72cf566fa1b984ddf1c5d",
"index.html": "aae87d7a03104c54967028ae9bfec924",
"/": "aae87d7a03104c54967028ae9bfec924",
"myworker.js.map": "0c1fd89d349442e8657a2154f388c279",
"manifest.json": "085e01ca9d9736d32dfc581ca0dccb56",
"assets/AssetManifest.smcbin": "116dcd1281087b5da1e7816864a0a6a9",
"assets/FontManifest.json": "d7f6576692c0a1432e3bd8e1c50f17fa",
"assets/device_online_indicator.svg": "75a4a7eef29e618db8cd5a26783dbc8e",
"assets/ic_truck_empty.svg": "58a3d563bd4632811841b5bc2bfd0f4f",
"assets/btn_location.svg": "6105c6fb485a28acfbf02848b096e2fe",
"assets/dozor_header_logo.png": "b1d75ba51a17ba0de8629927fc3c34fe",
"assets/state_stop_ignition_on.svg": "35d62a14558e27503dc8a0b9da52731f",
"assets/state_no_satelites.svg": "3e9ccca0fe3c6871f93c49c4fe0d1634",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/toolbar_monitoring.svg": "8dd616ee89175d2ae3d11b8f4e044fd1",
"assets/device_tree.svg": "98d02efa175894e09f40d1688b09b224",
"assets/NOTICES": "11e0cb18a63cb1e6db74385ac2e7f560",
"assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/device_export.svg": "d09ee514f0a6a7d1ea6800dbb721c249",
"assets/fonts/MaterialIcons-Regular.otf": "4f098cdb595ba20ba21451ae1338a996",
"assets/state_stop_ignition_off.svg": "1d64125e90107709bc18f0f4804a1327",
"assets/web/assets/device_online_indicator.svg": "75a4a7eef29e618db8cd5a26783dbc8e",
"assets/web/assets/ic_truck_empty.svg": "58a3d563bd4632811841b5bc2bfd0f4f",
"assets/web/assets/btn_location.svg": "6105c6fb485a28acfbf02848b096e2fe",
"assets/web/assets/dozor_header_logo.png": "b1d75ba51a17ba0de8629927fc3c34fe",
"assets/web/assets/state_stop_ignition_on.svg": "35d62a14558e27503dc8a0b9da52731f",
"assets/web/assets/state_no_satelites.svg": "3e9ccca0fe3c6871f93c49c4fe0d1634",
"assets/web/assets/toolbar_monitoring.svg": "8dd616ee89175d2ae3d11b8f4e044fd1",
"assets/web/assets/device_tree.svg": "98d02efa175894e09f40d1688b09b224",
"assets/web/assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/web/assets/device_export.svg": "d09ee514f0a6a7d1ea6800dbb721c249",
"assets/web/assets/state_stop_ignition_off.svg": "1d64125e90107709bc18f0f4804a1327",
"assets/web/assets/device_filter.svg": "94d17ad2aabd0ea969f7ecccf69da179",
"assets/web/assets/toolbar_tracking.svg": "da51cf563c029b89e6233fb3e2a038aa",
"assets/web/assets/DozorAndroid.ttf": "296b1f3614f977d16f88bec2ed9f8f51",
"assets/web/assets/state_moving.svg": "9668bd146cfb5dc844eb3c517f93f7a6",
"assets/web/assets/state_stop.svg": "4dca6a483693a285fd3452f6edb71af1",
"assets/web/assets/ic_separator.svg": "211440d45ebd3bcb1f450cb2be33d93e",
"assets/web/assets/dozor_logo_login.png": "04f5f1d63d8372631ff0c33dde24b363",
"assets/web/assets/state_offline.svg": "6a138f38a0cb5e8b4ab9bda9fca9d1d3",
"assets/assets/animation/loading.flr": "7736b6bf5f593b1bcf4d4bad1f1aa142",
"assets/assets/fonts/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/assets/svg/truck-big-icon.svg": "d3fede71d6b51701ed847cb273a069d7",
"assets/assets/svg/undefined-icon.svg": "be30d18dabf7f452b29c481646ff00e4",
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
"assets/assets/svg/bus-icon.svg": "fc9ffea1e3e67a78c2b3537973a97ce0",
"assets/assets/svg/truck-smoll-iccon.svg": "3f976d70e54217223efdadcc65a97673",
"assets/assets/svg/truck-small-icon.svg": "7bb52201c2b4e336a371aaffc699816a",
"assets/assets/svg/tank-truck-icon.svg": "1679ebc4b97e8b43e86f74c42ad046ad",
"assets/assets/svg/other-icon.svg": "6292d30b0de022464fca9697c67bfd5a",
"assets/assets/img/dozor_logo.png": "34dc0266cdc2a3737644d445453f6a2b",
"assets/assets/img/track_pin.png": "e6788385d95a461fc2b9ce01886cf319",
"assets/device_filter.svg": "94d17ad2aabd0ea969f7ecccf69da179",
"assets/toolbar_tracking.svg": "da51cf563c029b89e6233fb3e2a038aa",
"assets/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/state_moving.svg": "9668bd146cfb5dc844eb3c517f93f7a6",
"assets/state_stop.svg": "4dca6a483693a285fd3452f6edb71af1",
"assets/ic_separator.svg": "211440d45ebd3bcb1f450cb2be33d93e",
"assets/AssetManifest.json": "da57f5de939be5bbdb1e1bdb0a0b2ae4",
"assets/dozor_logo_login.png": "04f5f1d63d8372631ff0c33dde24b363",
"assets/state_offline.svg": "6a138f38a0cb5e8b4ab9bda9fca9d1d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "d078a9b539a926fde2dea4a3c2b15c58",
"worker.js": "d83dc24e2af78640ab09c356b5d9da1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/ORIG_HEAD": "b722457a93f2bbd7f6037c7b6530c9f4",
".git/refs/remotes/origin/master": "9fa764de69c7c581dd2941d2cb0b2244",
".git/refs/heads/master": "9fa764de69c7c581dd2941d2cb0b2244",
".git/index": "76e7ae8b5fbccfa3debde3487dc4da17",
".git/config": "08f0f3226a0081670f27ed0fe31071ee",
".git/objects/3f/89c8887f335f12d39f285f3ff6be68064c830e": "dc66e82d2018016c576a96184653f30d",
".git/objects/4a/16651a80bfab16748a340848415d0c843a7ab0": "49056fb2435094e0c1bd31dcc8ea1834",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d8/9ada08d4a41525d3572788e75b23186723f53a": "2a7fba002630a026b6aa924f22a4f8f9",
".git/objects/d8/c2ce889381663edda3fa886c62812499746863": "652fee26613d464d61781d31d5ab715b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/50/ca2b42f958d1ac1066a8d15beb7db940374237": "4a1af15e2d27e4c2f586f8ca2fc9b9a1",
".git/objects/41/dd4960ad654fc273cdf69c124efd1219377401": "7c99b3909ca0ab04a48df68d7a2fcd9f",
".git/objects/59/de5e7ff528b1ba744ca55db364c3670f420091": "df4792120d92ee46db0c145316f519c2",
".git/objects/59/0ee1a05a109a1561ee8eb31354788b42e84001": "9ac2c0d1673c01f39b163e294bf6f65e",
".git/objects/bb/7043eb10ebe72dcd3e9eb2251f8dc96a16df7b": "635dfda612f48cee97f6fc895a9fac32",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/22/30ab587e060c1fd9516b2997701f421cae538e": "15c41e04c18f729a80e112160faca718",
".git/objects/22/feaa660ca4dec01475d780648a994c4668b715": "1b370ddb638317baa96f6449bb993661",
".git/objects/ff/1e7b9e6457bbf04bbfc8375b9bd0104a9a0fb6": "e9766f056c65b00c3f4331dd8a973575",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/20ec2fe713a03b08f82242ccaf90f720e3b5f5": "1a54143fb9319bebddf0394a6a0d699f",
".git/objects/86/d9f2ebb3ed6edddbd29a45815fbeb7ac7e8ee3": "86f98f4b386d0e066e2bac8cd63d0450",
".git/objects/e7/869843f8d49d42f1b42619b5fa2b69521fc201": "80a7c8f72fb9370d15924316f64ac673",
".git/objects/a5/36b1560201282afbfef5e8475d94ae36729fb4": "d8bf318952e50c01cbfb428bdde3dff5",
".git/objects/8c/7521f546ffd046adbcc0e3558145c996c55804": "ee9a8f315a9f186f4b9ade64a12b2e5b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/5e/151d1cc3f286134cb784dd7e79a654323534e5": "5bdf7e954a11f0c17d28dc4ba02d3107",
".git/objects/5e/74c9f8e947c7b740271d545f1618e83442d5c7": "e4bbc4db11b1ae0e2592e7d9b32065e9",
".git/objects/88/5faf7dc77728c067c3feef165ca77818211225": "8bdebb355732d8c9588a8f90795b86cd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f0/52a3a1e7baebbc82e5025adc2496357e348e9f": "958eb57da84bdb5f9f2eb952e43ccc54",
".git/objects/b5/96e1274909c5725220784849e84b21962c639e": "15eaa02ab24449eb750af99cdfd89cd5",
".git/objects/b5/0f8a5cbdb34427c1d7b766bcf60e6466005661": "a3322e5b8e038d88eac6b272967043e8",
".git/objects/20/81bc6078ee9d09fbc949102a61a370806e4d98": "46d4c9c78a1b89263958bdcaa951aa64",
".git/objects/e1/719589ac9fb4dca5bc5cb2e5abfc70e9c6e725": "1c6707ee40748dd2888449431b91c08c",
".git/objects/18/7b1b7308edb2e516cdac12b275c1307a1baa1f": "1c4349edfc2dd9192811c4e1b44d065e",
".git/objects/18/a4f81e387de192638c889b0580f42d6e84a705": "8081fafc9a7aa6148fe5c9a2579273bb",
".git/objects/b3/8496d0e44d720ea4ecb06e4686336775e64451": "8cdf3c0a4b35eb6e384452e7d847f0b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ac/8127d419e5914ced6a54f87ba6304b0c4352d7": "f77528bf3bb3352ff3b64bf41f0444e5",
".git/objects/ac/e260bdf4b9f1de30e28abd14924b29f5f126a3": "c6f25e52ca9224b1179f810f67ba6b52",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/cc8f0b084f184cdc23ff2f57545c623ec37f21": "075ae9a84503c80b4c7bb23df545fed8",
".git/objects/f7/abf90cdafce688a6859e1c6f0960b9663c14e6": "a5faf24c861e3aaee99742a6b15933e9",
".git/objects/f7/da15bb9bf029b9e8baee86b800e117834b2969": "d42706cacd364dac88cd952ae2fab31b",
".git/objects/f7/893fe5fd49deeeda151546b9e6ee8e9873f62e": "ab66c76c798225dafb203ee613c0ea13",
".git/objects/98/7fe3d05329809882bdf3fcf27e9c258682e857": "56bb0f153e20edf18efc2bc87a904ece",
".git/objects/42/bb3abd08c0d3159130109a80064811ee8dd9a8": "a51666b2f35bea69a90c1a37582dc99d",
".git/objects/84/feaaa3809aea1acd6634d4265d40e393675297": "47bb9f57f356ae00ffde502b181c6d8b",
".git/objects/84/eb46b190326a2b6a0303b8e933606f8c294963": "6805bc9559ee005509cfc23e39e6a4a8",
".git/objects/84/de03a3901912c68d63fbd52546410ca64841be": "ad3be2c7a349e15709d20645a362f4f0",
".git/objects/9b/9e85f9396f302c0e20ed17039279f951f12d3b": "0aca40ccc405137620206c2cfa635f44",
".git/objects/9b/ae12be32a317c1e5f9feb9a7865cfc70b36fa0": "55e06619a1a785e605a1d2004f63534a",
".git/objects/82/058093a60e5e5d0ed640238f313c56b6ae3195": "a3a4aa1fb5b021bb698669d5bb8c694d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/60ef06ca2418b33842256b8deadf4124b27506": "958ca7f43d03d8d3e97ddcdb536b44f2",
".git/objects/08/b876450b5faf016d09029bbefc8d9478532398": "e3559fe2b640d5148d23cf29de2d04cd",
".git/objects/3c/a526bd478b7f35070669fbefdf98b1c1ba0eed": "cde202b877e6dfcf8fa86022ee56e823",
".git/objects/d4/58dceb8f863c2e091f255da0c66a2e9baf88c9": "c317d69c7bb701fe7eea222930acefee",
".git/objects/48/1e0e23766bc51ce738e3a773020ceb79e4a900": "dbfb283ad963d4af3c6fb01429bb4380",
".git/objects/26/f7b4f662c7e43bf9a014ff8eda0e29aa3aa154": "48b70ea055899d817305865c838f7510",
".git/objects/26/3d622270c51c1bc715b07d4cbf973f61411344": "68a6b5b0e121d5b34e80f7ed45f881cb",
".git/objects/29/f9af2574c05c58cecb9e83efa8d5853cb4f5d3": "66a59ec010028c7604e3360b40a2d54b",
".git/objects/91/890465bc2139135f33dfba37ee7080e9e4bcb3": "a0c41da4f4478ae81e524563584a63fd",
".git/objects/4e/8aec2d1590a8900afd5b30c286409f9f8a668e": "57440aaf049505c7649cf63bfa1dc482",
".git/objects/4e/123e673c09de5ab75e01814ef237beadd3a1c5": "54b9d9562be96028fdf828ed536b549c",
".git/objects/4e/5191fc062bba62dc6aa3017a45e5da85f90774": "6360ea59346e431a86840f2ad8c33884",
".git/objects/9a/86338061d6a2425d1d2e78dc8ed85556373851": "2cdc708a3c6288f68945a89f2881264f",
".git/objects/06/d442c4163a986bc29ec6c23ed95eee7e0929ce": "69735995e4ee9db97adc4e0a237a1072",
".git/objects/06/16b12a737c6ea9eaccb985e671ec828f4dafec": "48d34d37faee1c0c9ce7a4f46e8ff08d",
".git/objects/a8/fa10869ac26300e6bb27135257255b84f5ae5d": "327c16d2f2f27917904ef129524f79f3",
".git/objects/f9/f04e3e634d8f85219d431a436af593458a979f": "c5fa2a4e83bf4fa0c460be22dc253228",
".git/objects/d1/484b0b1f127f0526140c79058d5d172676e161": "b1f4251c44b65133b4b4ae9ac26d9b74",
".git/objects/44/9edb0a48ac63fa498b20ff7f37dd5a200d5b2c": "b3e591ca43cb213d6af2664fca0086cc",
".git/objects/44/5ae5752f4e58f90eb7449ed555f48b6323f58f": "460cebc8b3d6759037fe91ef92d6fcc1",
".git/objects/dd/36f17831737941acf9a4369bd4a1116ac09df6": "2bd073fb7908ba2d92995c6665b0f523",
".git/objects/69/74228b58d66d57d988eb2b2d47ff37c1065e5f": "47cb0e9eb3688e130e115c874faddaba",
".git/objects/e4/e7702755abe833500d6652d6ae07d7b6e352f5": "4be88ae746501b9613cbd7de3253f2bb",
".git/objects/ed/a06bf895a80a215e91c1599252e3c65a5a9006": "00ad2ca8e7074ee0430070994dbe3b7b",
".git/objects/7e/e8ab5da025bf92e5e50092b891bf2b60d66f90": "c3fab3a35ecc8484e83f7d5d2f14c93e",
".git/objects/7e/9a52335867d511c3fee307179d0bff2b8e4592": "a0431db6e4de23239864c7b7464c81cb",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/df/3c68f431bcce7abc9e405fe4f660d196ea5a4f": "89f288de9675345093d69048315eaa61",
".git/objects/45/560e3c19ad3f9606c27b1cbe449251d8212c50": "2919f42507cd8502c84144619d26f68a",
".git/objects/32/c9166bcde68b3e0b4581548daa2b3d3bb37103": "2a25221a9792549b5b63057a9e4abe66",
".git/objects/32/5f3962cd4ba416b18bca54bfe4cdf11e0d9f75": "d574c5a29a06aae3cc1630160eddd8fa",
".git/objects/55/dda3efd840affa792f4b6a1faf9f3f41183224": "44be49a817fe0daaf928b462093f1d8e",
".git/objects/1a/0f9923d852725f42f7ee99a02afe9bc201d797": "fc4cc9ea55933ab7b7719d21a83c6167",
".git/objects/a0/02d59fe5c3f3315ae5b9d234a9ac96a050975e": "367eba2150d4798247cfd0e26e4bd193",
".git/objects/39/03dea673bf7ae9cae1686babd0fb3438f459ee": "9c9f1a044aaa1a7a81c4df6fd9c00a3b",
".git/objects/39/772af3fcca95f76945b2af5ddf7ced75ce1fb1": "7304c8963489810d531202de104cdc4a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/3bead3db1228323fcc2f80870357b8e9708184": "9ab191a9b809bb08772f9970b680c00a",
".git/objects/ea/b8f6e90482e7f545f15e958d975cb5b60d2af5": "f41d9e9bc0e2c41113450a3f8e903b61",
".git/objects/ea/3508bfdfa1406b217fe8ab0efb70f38e5eea62": "a46e445a97ba16e8d7c006fd7ce09e46",
".git/objects/c0/c6cda9990054d3c339e1f76cea279d99741256": "b8c17d2449f8425b4b4d7f42a0fd98b4",
".git/objects/80/b5eafbdbf2d2a2e8163f483a5572e1078aad98": "dc8714d7c7188e9930281bfaba5cea67",
".git/objects/73/78fd9298da18c11f6faeecf6f42300aa9d4b88": "e3e59d5588c1fc14e567d79a783cdae4",
".git/objects/ca/486c57c99d183dedfebcd260e2da8ff3de94d2": "f4ee1289c34dfb25d9e66ed425514130",
".git/objects/40/163975f66ad26beac69de8eb8034ed630d5521": "aed1cf0f48938d161ef80f3cab8a8f91",
".git/objects/f5/555cccaf2f92308fb330260b6ce2aa5507f64d": "c2e887431d5d782de488f12ebb346c8f",
".git/objects/e8/53c0670f437f4e6c786c40fd3a4962927a7dc8": "5b373c3f2b8667251d4e8d8eeea686c2",
".git/objects/e8/0d90ddc5103c480a9b26d9ea2b31f49dc61c33": "8f50d4ba65b07c7cf83a82d055326b3c",
".git/objects/27/2712918a9765ecab31eb8b61ed2ade944620f5": "e7d2a65ef05f27370bf02acddb1b7b83",
".git/objects/7b/6d6e9c02b376a1d8212d2751943120804d739c": "c622e415ac90bdc949ea3cd45c04e153",
".git/objects/f3/a307778e7ab7ce97dd90baba67b2cc55c2e0a5": "4a1a59427d7526f9facb78e06387c194",
".git/objects/d7/d62a279619534d9eb2620176f6b447a90c6293": "0f3439548654cff0b87ece334c081f7e",
".git/objects/d7/a114d5323abb53325bd104c3f92fcd2ee7e01a": "42ecbba5a7f27c6ef1b6e6a9bb2be3d2",
".git/objects/e2/6d3beb8a996e009f8a019086e6af1e110dd6d7": "97693c555c1eaade06df71c0299142ae",
".git/objects/10/b9d778ab1b08acc5742a0375a2d4a92d0181c0": "e8b1a850bfdb37705d69c812802f1d23",
".git/objects/7d/46dbe1c03f76ac0f715cac5e9249af6b9c06c8": "093161253a07baeeafde676adcd9206f",
".git/objects/7d/1cc2b1eeb993f99a10311279f13ce4cc090223": "67e6cc7c1c818d111b557cb2eadee123",
".git/objects/c2/94470c18db06fc8d9c225123baa23ff86faa84": "af295f69ffe7627e4ee3312a83d01500",
".git/objects/cf/4cc11ac0888f007ff064d895525d5d0d98bec5": "4b1de3f34c18bdeb9bef415e61557f62",
".git/objects/09/ca7f90a5606f779d63a56202fd434f986b0a50": "60bb69f13cb2ed5e8e8c79048fb93f5d",
".git/objects/38/ae9316409d3dbffa7f9047729ee3c86a61a5c0": "2dd7edc3e3527415c9ad773088631d69",
".git/objects/dc/7b853dadcf83e705967987c09e23072a4a70e2": "df86c914c09a300bea95c3ce8c45b783",
".git/objects/fa/deaa1496de12541a1a55bc6f34888285a748a8": "c372e575888da13b50c543552f318e24",
".git/objects/4f/bead472b02cd77251587713b93cbc1c17152c9": "94d4e562097782180ca2e396ec52c816",
".git/objects/be/65f1c87d51c797670a3986a8db2ed7dbfe3a7b": "b1749cd7b2900f20172fd5c948fa07f7",
".git/objects/33/a13860615217429f3e0ea344a3d6167fda83ec": "9486c6958fa359b244b4cb0a4e709249",
".git/objects/72/5f9fcbb2c587f213985caf1dcd73a0d989a72e": "23fa04f2e70e28f4799feeb3d4ccd8e5",
".git/objects/83/0f031d72ff84b7c311dd3f2b596d51eaaafcfa": "a6fdaa4797ec92a018abb17d4e5b1bf9",
".git/objects/7a/8ef7a7d339b4e173b2611f04127639c065bfa7": "3c848d6bc092587974bca83d0e96b7b3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/fc/b00f98c7d7312525d46b6a4ec1bf95473a377e": "3d7211f97b65ce8a7f70cd7bd887c2de",
".git/objects/21/2168acea0b36db8bad3bcb66ad4f055519b767": "fb5d352c804608328ac937fce05909cb",
".git/objects/af/b0a2cd8c7e0e3ebcfb67bbe844e2d2768d7732": "69c133decbc02cff50025171e0871133",
".git/objects/ad/abb1477526c97a671dc721c21f2088a5ed7136": "b711be201eea61a313d78dfb46c273af",
".git/objects/a7/f05e9587a50250427f658288f8bb4a310c2395": "85c2b661ead8a59a608bc1552df131ef",
".git/objects/a7/317324d7bff5e4b4f3cd90b87d188ab6c8dc94": "713bcda60c9b2ea4d835543a5b7e4280",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/a6/842335a94c53bd6f465e892095afe784d2504f": "0407d449017cfbadd1f4a3d589edff62",
".git/objects/5c/82ee7e400d0b7697be7c4be8fbdbe4b56518cf": "33cc5fa46f302c87d2bbeacab27ef623",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/b07d5e91fe7013dfe58495b28123f1a9e06975": "4df1dfde94309b54a5094b44dab9a7e8",
".git/objects/b7/fea7498d6e53e39a87ec1461413cf294606d18": "3234096e233ce66aec777da93d8e0c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/13/3ae4a58451ecb439d6f397d835afef555fa01b": "247e7cbb10ccdcf3b05dfa197b27f89a",
".git/objects/13/1c072e3ee51227518472b4c451b971cdc1f2f3": "12e28cba26ecf4680da12f0c020c3119",
".git/objects/65/adb1fadfd033de91cab3f2b4b2dff36aa52e1d": "6add5cdfce50b7ede0b4f1baae474967",
".git/objects/65/8b3ce7ea262a4144e7f9fe13a976ea5679795e": "05a6846d4995ca4bbdd5713551aaac96",
".git/objects/4c/022b90c300344a0751cdb5a63f1086d4aeff53": "b092b7e80c492c4b2256d3fe0b320831",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/76/898af3f049a7c61de5382226c69c51ad8e60e6": "fe35781e71bdcf85d7e491eaf98807e3",
".git/objects/76/c483d65b8fcdf01707c30dc2cc7aa379948035": "aa62f5169e721bb46ef59879e752adfa",
".git/objects/67/3c69b514ddb9506ec235ee9cedddbafa6d53a4": "190316addf3ca9b0ae4382710517d755",
".git/objects/67/b7f641c6503f89ac7db27d449e6ae392112c90": "c6f07402a0c175480dee40a6fe3d0b91",
".git/objects/ef/fcc7e7b39934005f9a166d6fe3335757a7f21f": "059311392b233481da6b1cf4b6313b21",
".git/objects/ef/4f721738a84e67863a916ab2ef77cf51688401": "d4a6054baf06e385cebd0fe04653ce90",
".git/objects/ef/afed3f72ea3936f4f7955cba78c8cc7204cc39": "761a9c98c677e20d4ef091727f3d533b",
".git/objects/25/8672ecd8e7b48328572d457923f37f8150dbee": "0eff81d895ff3c6cd042ef8d40ad8ab3",
".git/objects/30/8d2cbe8c11494b1342c5e8bc2566d87bb90129": "d765af8aba2fa16e74441513785eec1e",
".git/objects/30/842a22c864f26b6978facb972ceea4c370009c": "1ea9f344915590ca55babb555572f034",
".git/objects/2c/7a1299ccb981e8c17b08472f49b6084cbc4d62": "241074496a84754d5d1070446b8662be",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/24b001e22b9a6011c6b89baa7c1fdcb93ba26d": "c7de9e5f1be7cfac2ef4a165645e86e1",
".git/objects/71/f2c6b9dcbe42c90bc3a4838a7e617fb51ffe59": "dcc8db83869e52424c8e7189c7d4c6e6",
".git/objects/28/8ba120f9cbb65a1eb20ffdf44c64c3948fd5b4": "40fed59ad15a3fa788cf2a457b07745a",
".git/objects/28/fad032929f574cf364255351ac0ceea527e9f5": "928a39097b65f8f1c1e14d0f943c207d",
".git/objects/da/41655f7ce1a01c3bf3202d9e5586e285235924": "9ba33f7823c9b6bac5323969281d0576",
".git/objects/da/c3c15e6ef38ecccd16dfad9c7465f8ebef1591": "48be9445078a7f0b3861d9550667d554",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/00/216b82a95691fbbb14b2bd97ff206f6a03a126": "ed9952f6eba62e45390c4ad807c566df",
".git/objects/00/1a85a1b0f3591d94a8dcd9f07cf3d19c383db5": "de98e73b913429eba7adbb434d7e37e7",
".git/objects/bc/fa67cdf1d411414e82dca1775e3b1e08030017": "41278a0273243b9698f0dbb157b99d89",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fd/f0aa4e5851c50f15c4f43ccde78c640974f5ba": "5e6717b939599f054433594b5d74661c",
".git/objects/fd/cb073d601e39259bf9bf183bf93c975a222bd8": "779805cf09baff64d3f0e6baf706e900",
".git/objects/31/7d330754a59f448c74815b3131e47321fb3223": "9417e055306bef4a249b33f25b6cbbd1",
".git/objects/5f/784e7b8110e3b9a818461ff021e928f147d94e": "a6b212e9dcbb52886e8bc88505183bdd",
".git/objects/3a/4310aa787eff617aaf7bac4edaf1c793583780": "5344862f69d7697ef6c3d43de41f65b3",
".git/objects/3b/0afd6ece70f41d19961e24331815410151e0e3": "3c94ae9f59626e69523e3c01d0da0450",
".git/objects/02/fee14278382a1e380b2704c264457ad110032c": "152062c0baaf5c566dfb4913745fe9f5",
".git/objects/61/845292bb22a265ba1901c2b98a6874830e94bc": "dc7844f2419b57292d7b73f0dc45416e",
".git/objects/78/b689f928588955e19f4f1151523299e2d62d76": "c5ded3e7c84d6294bd06b86117d36a27",
".git/objects/57/4b9f355360e2a3a4d2d8471ba2f89747a270a0": "4dee8558a62374df051acc32edc40899",
".git/objects/12/1a9650542fe742a77e196ef6adc3a9fec508c0": "92fba25d244b06326b4001915710b5d7",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/507efa990c26fa5cbc5de1bc12a548b30e0024": "128f27ad8958a7c07ba33cc5dcc07c66",
".git/objects/5d/daadb19b426073c8a7adadfef87b4284bd30e4": "9c913e3af8488d64562c0d905c29a8cc",
".git/objects/c8/6f2a44e9f975b74eae5c6af70b159ea0d1978e": "281ba51401c6818880d815f6a79687e4",
".git/objects/c8/bd05c700899820453d3bc1bf44d88b4fa12994": "ccd00ae1d451fd2817a3af3831433bdb",
".git/objects/c8/dd1fdd2064d9fbacfacc32bee732aad5d267b2": "21179d7c22bad3885bffb35031319f07",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6798809edad862539b4d9a9805d385b5",
".git/logs/refs/remotes/origin/master": "43528363c40778be893d6d8fd08ae21f",
".git/logs/refs/heads/master": "3317467238591c7f352218e34206dec5",
".git/FETCH_HEAD": "3255716e910438929aa3ee42fa15e536",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
