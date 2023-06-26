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
"index.html": "712f5ae7ea42917a2ff7029413bb0e3a",
"/": "712f5ae7ea42917a2ff7029413bb0e3a",
"myworker.js.map": "0c1fd89d349442e8657a2154f388c279",
"manifest.json": "085e01ca9d9736d32dfc581ca0dccb56",
"assets/AssetManifest.smcbin": "4da632d4afc08961568dcc400501e179",
"assets/FontManifest.json": "d7f6576692c0a1432e3bd8e1c50f17fa",
"assets/device_online_indicator.svg": "75a4a7eef29e618db8cd5a26783dbc8e",
"assets/btn_location.svg": "6105c6fb485a28acfbf02848b096e2fe",
"assets/dozor_header_logo.png": "b1d75ba51a17ba0de8629927fc3c34fe",
"assets/state_stop_ignition_on.svg": "dbd4fa7b80e9dac90eb94cba6a9fe265",
"assets/state_no_satelites.svg": "3b17f54f5c66fa5a6db421010f0b430b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/toolbar_monitoring.svg": "8dd616ee89175d2ae3d11b8f4e044fd1",
"assets/device_tree.svg": "98d02efa175894e09f40d1688b09b224",
"assets/NOTICES": "c960853acdec72fe98f1ae038a251fa1",
"assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/device_export.svg": "d09ee514f0a6a7d1ea6800dbb721c249",
"assets/fonts/MaterialIcons-Regular.otf": "9d0e267943a5e3a87c84605d52dd4137",
"assets/state_stop_ignition_off.svg": "b3f5faf7829d8bcf5a4b3306fdf26e18",
"assets/web/assets/device_online_indicator.svg": "75a4a7eef29e618db8cd5a26783dbc8e",
"assets/web/assets/btn_location.svg": "6105c6fb485a28acfbf02848b096e2fe",
"assets/web/assets/dozor_header_logo.png": "b1d75ba51a17ba0de8629927fc3c34fe",
"assets/web/assets/state_stop_ignition_on.svg": "dbd4fa7b80e9dac90eb94cba6a9fe265",
"assets/web/assets/state_no_satelites.svg": "3b17f54f5c66fa5a6db421010f0b430b",
"assets/web/assets/toolbar_monitoring.svg": "8dd616ee89175d2ae3d11b8f4e044fd1",
"assets/web/assets/device_tree.svg": "98d02efa175894e09f40d1688b09b224",
"assets/web/assets/login_background.png": "ad8f50447b6ff4788089b6409e617d3c",
"assets/web/assets/device_export.svg": "d09ee514f0a6a7d1ea6800dbb721c249",
"assets/web/assets/state_stop_ignition_off.svg": "b3f5faf7829d8bcf5a4b3306fdf26e18",
"assets/web/assets/device_filter.svg": "94d17ad2aabd0ea969f7ecccf69da179",
"assets/web/assets/toolbar_tracking.svg": "da51cf563c029b89e6233fb3e2a038aa",
"assets/web/assets/DozorAndroid.ttf": "296b1f3614f977d16f88bec2ed9f8f51",
"assets/web/assets/state_moving.svg": "a2b07f4c984529fa5f2a3df45f4429a8",
"assets/web/assets/state_stop.svg": "f25e04166ed2d96b04c7fd191550a712",
"assets/web/assets/dozor_logo_login.png": "04f5f1d63d8372631ff0c33dde24b363",
"assets/web/assets/state_offline.svg": "80186ce296987f98d42653bf3b4d393d",
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
"assets/assets/img/track_pin.png": "e6788385d95a461fc2b9ce01886cf319",
"assets/device_filter.svg": "94d17ad2aabd0ea969f7ecccf69da179",
"assets/toolbar_tracking.svg": "da51cf563c029b89e6233fb3e2a038aa",
"assets/DozorAndroid.ttf": "7f913061205e71c78ad9d95f81c43cee",
"assets/state_moving.svg": "a2b07f4c984529fa5f2a3df45f4429a8",
"assets/state_stop.svg": "f25e04166ed2d96b04c7fd191550a712",
"assets/AssetManifest.json": "6d0c1290317e315722bd2a91b3a38e64",
"assets/dozor_logo_login.png": "04f5f1d63d8372631ff0c33dde24b363",
"assets/state_offline.svg": "80186ce296987f98d42653bf3b4d393d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "c2bcdc8ddc148e5e6927a1f2956fbe80",
"worker.js": "d83dc24e2af78640ab09c356b5d9da1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/remotes/origin/master": "1d05a96d3d05b8732cd0f16c001519db",
".git/refs/heads/master": "1d05a96d3d05b8732cd0f16c001519db",
".git/index": "59a63bc4501448d1a2c64642f3f7bf41",
".git/config": "0b465888a8277f81f9fea823e420908c",
".git/objects/3f/89c8887f335f12d39f285f3ff6be68064c830e": "dc66e82d2018016c576a96184653f30d",
".git/objects/4a/16651a80bfab16748a340848415d0c843a7ab0": "49056fb2435094e0c1bd31dcc8ea1834",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d8/c2ce889381663edda3fa886c62812499746863": "652fee26613d464d61781d31d5ab715b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/59/de5e7ff528b1ba744ca55db364c3670f420091": "df4792120d92ee46db0c145316f519c2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/22/30ab587e060c1fd9516b2997701f421cae538e": "15c41e04c18f729a80e112160faca718",
".git/objects/ff/1e7b9e6457bbf04bbfc8375b9bd0104a9a0fb6": "e9766f056c65b00c3f4331dd8a973575",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/20ec2fe713a03b08f82242ccaf90f720e3b5f5": "1a54143fb9319bebddf0394a6a0d699f",
".git/objects/86/d9f2ebb3ed6edddbd29a45815fbeb7ac7e8ee3": "86f98f4b386d0e066e2bac8cd63d0450",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f0/52a3a1e7baebbc82e5025adc2496357e348e9f": "958eb57da84bdb5f9f2eb952e43ccc54",
".git/objects/b5/96e1274909c5725220784849e84b21962c639e": "15eaa02ab24449eb750af99cdfd89cd5",
".git/objects/b5/0f8a5cbdb34427c1d7b766bcf60e6466005661": "a3322e5b8e038d88eac6b272967043e8",
".git/objects/20/81bc6078ee9d09fbc949102a61a370806e4d98": "46d4c9c78a1b89263958bdcaa951aa64",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/f7/da15bb9bf029b9e8baee86b800e117834b2969": "d42706cacd364dac88cd952ae2fab31b",
".git/objects/98/7fe3d05329809882bdf3fcf27e9c258682e857": "56bb0f153e20edf18efc2bc87a904ece",
".git/objects/84/eb46b190326a2b6a0303b8e933606f8c294963": "6805bc9559ee005509cfc23e39e6a4a8",
".git/objects/9b/9e85f9396f302c0e20ed17039279f951f12d3b": "0aca40ccc405137620206c2cfa635f44",
".git/objects/9b/ae12be32a317c1e5f9feb9a7865cfc70b36fa0": "55e06619a1a785e605a1d2004f63534a",
".git/objects/82/058093a60e5e5d0ed640238f313c56b6ae3195": "a3a4aa1fb5b021bb698669d5bb8c694d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/60ef06ca2418b33842256b8deadf4124b27506": "958ca7f43d03d8d3e97ddcdb536b44f2",
".git/objects/08/b876450b5faf016d09029bbefc8d9478532398": "e3559fe2b640d5148d23cf29de2d04cd",
".git/objects/29/f9af2574c05c58cecb9e83efa8d5853cb4f5d3": "66a59ec010028c7604e3360b40a2d54b",
".git/objects/91/890465bc2139135f33dfba37ee7080e9e4bcb3": "a0c41da4f4478ae81e524563584a63fd",
".git/objects/9a/86338061d6a2425d1d2e78dc8ed85556373851": "2cdc708a3c6288f68945a89f2881264f",
".git/objects/d1/484b0b1f127f0526140c79058d5d172676e161": "b1f4251c44b65133b4b4ae9ac26d9b74",
".git/objects/44/5ae5752f4e58f90eb7449ed555f48b6323f58f": "460cebc8b3d6759037fe91ef92d6fcc1",
".git/objects/dd/36f17831737941acf9a4369bd4a1116ac09df6": "2bd073fb7908ba2d92995c6665b0f523",
".git/objects/69/74228b58d66d57d988eb2b2d47ff37c1065e5f": "47cb0e9eb3688e130e115c874faddaba",
".git/objects/ed/a06bf895a80a215e91c1599252e3c65a5a9006": "00ad2ca8e7074ee0430070994dbe3b7b",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/32/c9166bcde68b3e0b4581548daa2b3d3bb37103": "2a25221a9792549b5b63057a9e4abe66",
".git/objects/32/5f3962cd4ba416b18bca54bfe4cdf11e0d9f75": "d574c5a29a06aae3cc1630160eddd8fa",
".git/objects/55/dda3efd840affa792f4b6a1faf9f3f41183224": "44be49a817fe0daaf928b462093f1d8e",
".git/objects/a0/02d59fe5c3f3315ae5b9d234a9ac96a050975e": "367eba2150d4798247cfd0e26e4bd193",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ea/b8f6e90482e7f545f15e958d975cb5b60d2af5": "f41d9e9bc0e2c41113450a3f8e903b61",
".git/objects/ea/3508bfdfa1406b217fe8ab0efb70f38e5eea62": "a46e445a97ba16e8d7c006fd7ce09e46",
".git/objects/73/78fd9298da18c11f6faeecf6f42300aa9d4b88": "e3e59d5588c1fc14e567d79a783cdae4",
".git/objects/f3/a307778e7ab7ce97dd90baba67b2cc55c2e0a5": "4a1a59427d7526f9facb78e06387c194",
".git/objects/10/b9d778ab1b08acc5742a0375a2d4a92d0181c0": "e8b1a850bfdb37705d69c812802f1d23",
".git/objects/c2/94470c18db06fc8d9c225123baa23ff86faa84": "af295f69ffe7627e4ee3312a83d01500",
".git/objects/09/ca7f90a5606f779d63a56202fd434f986b0a50": "60bb69f13cb2ed5e8e8c79048fb93f5d",
".git/objects/33/a13860615217429f3e0ea344a3d6167fda83ec": "9486c6958fa359b244b4cb0a4e709249",
".git/objects/72/5f9fcbb2c587f213985caf1dcd73a0d989a72e": "23fa04f2e70e28f4799feeb3d4ccd8e5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/21/2168acea0b36db8bad3bcb66ad4f055519b767": "fb5d352c804608328ac937fce05909cb",
".git/objects/a7/317324d7bff5e4b4f3cd90b87d188ab6c8dc94": "713bcda60c9b2ea4d835543a5b7e4280",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5c/82ee7e400d0b7697be7c4be8fbdbe4b56518cf": "33cc5fa46f302c87d2bbeacab27ef623",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/fea7498d6e53e39a87ec1461413cf294606d18": "3234096e233ce66aec777da93d8e0c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/13/1c072e3ee51227518472b4c451b971cdc1f2f3": "12e28cba26ecf4680da12f0c020c3119",
".git/objects/65/8b3ce7ea262a4144e7f9fe13a976ea5679795e": "05a6846d4995ca4bbdd5713551aaac96",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/67/3c69b514ddb9506ec235ee9cedddbafa6d53a4": "190316addf3ca9b0ae4382710517d755",
".git/objects/67/b7f641c6503f89ac7db27d449e6ae392112c90": "c6f07402a0c175480dee40a6fe3d0b91",
".git/objects/ef/4f721738a84e67863a916ab2ef77cf51688401": "d4a6054baf06e385cebd0fe04653ce90",
".git/objects/ef/afed3f72ea3936f4f7955cba78c8cc7204cc39": "761a9c98c677e20d4ef091727f3d533b",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/da/41655f7ce1a01c3bf3202d9e5586e285235924": "9ba33f7823c9b6bac5323969281d0576",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/00/216b82a95691fbbb14b2bd97ff206f6a03a126": "ed9952f6eba62e45390c4ad807c566df",
".git/objects/00/1a85a1b0f3591d94a8dcd9f07cf3d19c383db5": "de98e73b913429eba7adbb434d7e37e7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fd/f0aa4e5851c50f15c4f43ccde78c640974f5ba": "5e6717b939599f054433594b5d74661c",
".git/objects/3a/4310aa787eff617aaf7bac4edaf1c793583780": "5344862f69d7697ef6c3d43de41f65b3",
".git/objects/78/b689f928588955e19f4f1151523299e2d62d76": "c5ded3e7c84d6294bd06b86117d36a27",
".git/objects/57/4b9f355360e2a3a4d2d8471ba2f89747a270a0": "4dee8558a62374df051acc32edc40899",
".git/objects/12/1a9650542fe742a77e196ef6adc3a9fec508c0": "92fba25d244b06326b4001915710b5d7",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/5d/daadb19b426073c8a7adadfef87b4284bd30e4": "9c913e3af8488d64562c0d905c29a8cc",
".git/objects/c8/dd1fdd2064d9fbacfacc32bee732aad5d267b2": "21179d7c22bad3885bffb35031319f07",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77780d293b49f65bad8497f7f7a3eff4",
".git/logs/refs/remotes/origin/master": "b0e209a1208f752cf944e6cb53be01cf",
".git/logs/refs/heads/master": "8dab913d4f62a80844e8b546c7bb83c4",
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
