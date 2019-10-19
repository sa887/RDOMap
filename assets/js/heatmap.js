/**
 * Created by Jean on 2019-10-19.
 */

var Heatmap = {};

Heatmap.data = {
    "loon": [{"lat": "-28.03125", "lng": "155.78125", "count": "1"},{"lat": "-29.03125", "lng": "155.0625", "count": "1"},{"lat": "-30", "lng": "154.28125", "count": "1"},{"lat": "-31", "lng": "153.5", "count": "1"},{"lat": "-32.09375", "lng": "152.8125", "count": "1"},{"lat": "-33", "lng": "152.3125", "count": "1"},{"lat": "-33.8125", "lng": "151.625", "count": "1"},{"lat": "-34.5625", "lng": "150.875", "count": "1"},{"lat": "-35.25", "lng": "149.5625", "count": "1"},{"lat": "-36.0625", "lng": "149.1875", "count": "1"},{"lat": "-37.25", "lng": "149.6875", "count": "1"},{"lat": "-38.125", "lng": "150.1875", "count": "1"},{"lat": "-39.0625", "lng": "150.1875", "count": "1"},{"lat": "-39.9375", "lng": "149.625", "count": "1"},{"lat": "-39.25", "lng": "148.25", "count": "1"},{"lat": "-38.8125", "lng": "147.25", "count": "1"},{"lat": "-39.125", "lng": "146", "count": "1"},{"lat": "-40.375", "lng": "145.375", "count": "1"},{"lat": "-41.625", "lng": "145.625", "count": "1"},{"lat": "-42.8125", "lng": "146.1875", "count": "1"},{"lat": "-43.5", "lng": "146.9375", "count": "1"},{"lat": "-44.375", "lng": "147.4375", "count": "1"},{"lat": "-45.8125", "lng": "147.5625", "count": "1"},{"lat": "-47.125", "lng": "147.8125", "count": "1"},{"lat": "-48.3125", "lng": "147.9375", "count": "1"},{"lat": "-49.4375", "lng": "147.75", "count": "1"},{"lat": "-49.1875", "lng": "149.5625", "count": "1"},{"lat": "-50", "lng": "150.25", "count": "1"},{"lat": "-50.8125", "lng": "150", "count": "1"},{"lat": "-51.625", "lng": "149.0625", "count": "1"},{"lat": "-48.9375", "lng": "148.5", "count": "1"},{"lat": "-51", "lng": "149.5", "count": "1"},{"lat": "-49.8125", "lng": "148.6875", "count": "1"},{"lat": "-46.9375", "lng": "147.8125", "count": "1"},{"lat": "-45.3125", "lng": "147.75", "count": "1"},{"lat": "-44", "lng": "147", "count": "1"},{"lat": "-41.9375", "lng": "145.75", "count": "1"},{"lat": "-40.4375", "lng": "145.6875", "count": "1"},{"lat": "-39.1875", "lng": "146.25", "count": "1"},{"lat": "-39.3125", "lng": "148.375", "count": "1"},{"lat": "-38.625", "lng": "149.625", "count": "1"},{"lat": "-35.75", "lng": "149.75", "count": "1"},{"lat": "-34.1875", "lng": "150.25", "count": "1"},{"lat": "-33.3125", "lng": "151.5625", "count": "1"},{"lat": "-31.9375", "lng": "153.125", "count": "1"},{"lat": "-30.3125", "lng": "154.125", "count": "1"},{"lat": "-28.5625", "lng": "154.75", "count": "1"},{"lat": "-28.25", "lng": "155.5625", "count": "1"},{"lat": "-50.75", "lng": "147.125", "count": "1"},{"lat": "-50.28125", "lng": "147.09375", "count": "1"},{"lat": "-51.6875", "lng": "147.5625", "count": "1"},{"lat": "-51.53125", "lng": "151.375", "count": "1"},{"lat": "-50.1875", "lng": "151.5625", "count": "1"},{"lat": "-48.9375", "lng": "151.03125", "count": "1"},{"lat": "-48.03125", "lng": "150.78125", "count": "1"},{"lat": "-47.375", "lng": "149.59375", "count": "1"},{"lat": "-57.46875", "lng": "147.8125", "count": "1"},{"lat": "-57.34375", "lng": "146.59375", "count": "1"},{"lat": "-57.96875", "lng": "146.09375", "count": "1"},{"lat": "-58.90625", "lng": "146.03125", "count": "1"},{"lat": "-59.875", "lng": "146.34375", "count": "1"},{"lat": "-60.90625", "lng": "146.90625", "count": "1"},{"lat": "-61.4375", "lng": "147.75", "count": "1"},{"lat": "-59", "lng": "147.65625", "count": "1"},{"lat": "-60.3125", "lng": "148.125", "count": "1"},{"lat": "-61.28125", "lng": "148.5", "count": "1"},{"lat": "-75.90625", "lng": "144.75", "count": "1"},{"lat": "-75.96875", "lng": "145.8125", "count": "1"},{"lat": "-75.96875", "lng": "147", "count": "1"},{"lat": "-75.75", "lng": "147.84375", "count": "1"},{"lat": "-76.15625", "lng": "148.40625", "count": "1"},{"lat": "-76.84375", "lng": "148.15625", "count": "1"},{"lat": "-77.34375", "lng": "147.15625", "count": "1"},{"lat": "-77.5", "lng": "145.78125", "count": "1"},{"lat": "-77.28125", "lng": "144.8125", "count": "1"},{"lat": "-76.65625", "lng": "146.59375", "count": "1"},{"lat": "-74.9375", "lng": "149.28125", "count": "1"},{"lat": "-75.28125", "lng": "149.90625", "count": "1"},{"lat": "-76.46875", "lng": "150", "count": "1"},{"lat": "-77.375", "lng": "150", "count": "1"},{"lat": "-77.53125", "lng": "149", "count": "1"},{"lat": "-75.25", "lng": "148.53125", "count": "1"},{"lat": "-79.75", "lng": "118.875", "count": "1"},{"lat": "-80.875", "lng": "118.3125", "count": "1"},{"lat": "-81.9375", "lng": "117.25", "count": "1"},{"lat": "-82.6875", "lng": "116.9375", "count": "1"},{"lat": "-83.75", "lng": "117.25", "count": "1"},{"lat": "-84.625", "lng": "118.5", "count": "1"},{"lat": "-85.8125", "lng": "119", "count": "1"},{"lat": "-87.0625", "lng": "119.5", "count": "1"},{"lat": "-88", "lng": "120.0625", "count": "1"},{"lat": "-89.0625", "lng": "121", "count": "1"},{"lat": "-89.5625", "lng": "121.6875", "count": "1"},{"lat": "-91.1875", "lng": "121.5", "count": "1"},{"lat": "-92.25", "lng": "121.6875", "count": "1"},{"lat": "-90.9375", "lng": "121.25", "count": "1"},{"lat": "-89.6875", "lng": "120.5625", "count": "1"},{"lat": "-89.8125", "lng": "119.4375", "count": "1"},{"lat": "-89.6875", "lng": "119", "count": "1"},{"lat": "-88.0625", "lng": "118.25", "count": "1"},{"lat": "-85.5625", "lng": "117.8125", "count": "1"},{"lat": "-84.875", "lng": "117.3125", "count": "1"},{"lat": "-84.125", "lng": "117", "count": "1"},{"lat": "-86.625", "lng": "118", "count": "1"},{"lat": "-87.4375", "lng": "118", "count": "1"},{"lat": "-88.625", "lng": "118.5625", "count": "1"},{"lat": "-89.875", "lng": "120.0625", "count": "1"},{"lat": "-91.0625", "lng": "120", "count": "1"},{"lat": "-80.875", "lng": "118.1875", "count": "1"},{"lat": "-79.875", "lng": "119", "count": "1"},{"lat": "-82.5", "lng": "118.5625", "count": "1"},{"lat": "-84.25", "lng": "119.5625", "count": "1"},{"lat": "-83.125", "lng": "119.125", "count": "1"},{"lat": "-85.9375", "lng": "120", "count": "1"},{"lat": "-87.25", "lng": "120.3125", "count": "1"},{"lat": "-87.9375", "lng": "120.9375", "count": "1"},{"lat": "-88.625", "lng": "117.375", "count": "1"},{"lat": "-87.25", "lng": "117.0625", "count": "1"},{"lat": "-85.875", "lng": "117.125", "count": "1"},{"lat": "-39.28125", "lng": "135.96875", "count": "1"},{"lat": "-40.0625", "lng": "135.15625", "count": "1"},{"lat": "-40.84375", "lng": "134.96875", "count": "1"},{"lat": "-41.59375", "lng": "135.46875", "count": "1"},{"lat": "-42.5", "lng": "135.71875", "count": "1"},{"lat": "-42.84375", "lng": "136.40625", "count": "1"},{"lat": "-42.6875", "lng": "137.25", "count": "1"},{"lat": "-41.9375", "lng": "137.96875", "count": "1"},{"lat": "-40.75", "lng": "138.0625", "count": "1"},{"lat": "-39.75", "lng": "137.84375", "count": "1"},{"lat": "-39.21875", "lng": "137.21875", "count": "1"},{"lat": "-40.65625", "lng": "136.875", "count": "1"},{"lat": "-41.25", "lng": "108.25", "count": "1"},{"lat": "-41.625", "lng": "107.25", "count": "1"},{"lat": "-42.4375", "lng": "106.4375", "count": "1"},{"lat": "-43.125", "lng": "106.1875", "count": "1"},{"lat": "-43.9375", "lng": "106.1875", "count": "1"},{"lat": "-44.75", "lng": "106.125", "count": "1"},{"lat": "-45.375", "lng": "105.875", "count": "1"},{"lat": "-46.0625", "lng": "105.1875", "count": "1"},{"lat": "-45.5625", "lng": "107.125", "count": "1"},{"lat": "-42.8125", "lng": "108.0625", "count": "1"},{"lat": "-41.625", "lng": "108.5", "count": "1"},{"lat": "-43.6875", "lng": "107.4375", "count": "1"},{"lat": "-44.3125", "lng": "107.5625", "count": "1"},{"lat": "-44.5625", "lng": "104.75", "count": "1"},{"lat": "-45.625", "lng": "104.1875", "count": "1"},{"lat": "-47.125", "lng": "105.875", "count": "1"},{"lat": "-46.75", "lng": "106.9375", "count": "1"},{"lat": "-46.1875", "lng": "108.0625", "count": "1"},{"lat": "-46.6875", "lng": "105.3125", "count": "1"},{"lat": "-47.1875", "lng": "104.5625", "count": "1"},{"lat": "-48.0625", "lng": "94.9375", "count": "1"},{"lat": "-48.5", "lng": "94.4375", "count": "1"},{"lat": "-49.6875", "lng": "94.6875", "count": "1"},{"lat": "-50.5625", "lng": "95", "count": "1"},{"lat": "-50.25", "lng": "96.0625", "count": "1"},{"lat": "-48.875", "lng": "95.875", "count": "1"},{"lat": "-49.75", "lng": "94.125", "count": "1"},{"lat": "-49.5625", "lng": "93.9375", "count": "1"},{"lat": "-50.3125", "lng": "94.375", "count": "1"},{"lat": "-48", "lng": "95.875", "count": "1"},{"lat": "-49.625", "lng": "96.6875", "count": "1"},{"lat": "-61", "lng": "104.3125", "count": "1"},{"lat": "-60.5625", "lng": "105.1875", "count": "1"},{"lat": "-61.0625", "lng": "105.625", "count": "1"},{"lat": "-62.0625", "lng": "106.3125", "count": "1"},{"lat": "-62.1875", "lng": "104.5", "count": "1"},{"lat": "-63", "lng": "103.0625", "count": "1"},{"lat": "-63.9375", "lng": "103.0625", "count": "1"},{"lat": "-64.9375", "lng": "102.625", "count": "1"},{"lat": "-65.6875", "lng": "102.4375", "count": "1"},{"lat": "-66.3125", "lng": "102.9375", "count": "1"},{"lat": "-66.625", "lng": "103.6875", "count": "1"},{"lat": "-66.5", "lng": "104.4375", "count": "1"},{"lat": "-66.1875", "lng": "105.375", "count": "1"},{"lat": "-65.8125", "lng": "106.625", "count": "1"},{"lat": "-64.75", "lng": "107.3125", "count": "1"},{"lat": "-63.4375", "lng": "107.0625", "count": "1"},{"lat": "-63.09375", "lng": "106.3125", "count": "1"},{"lat": "-63.25", "lng": "105.0625", "count": "1"},{"lat": "-64.71875", "lng": "104.4375", "count": "1"},{"lat": "-64.28125", "lng": "105.21875", "count": "1"},{"lat": "-63.4375", "lng": "104.1875", "count": "1"},{"lat": "-62.28125", "lng": "103.78125", "count": "1"},{"lat": "-66.25", "lng": "105.78125", "count": "1"},{"lat": "-64.5625", "lng": "106.90625", "count": "1"},{"lat": "-62.625", "lng": "106.71875", "count": "1"},{"lat": "-71.28125", "lng": "100.53125", "count": "1"},{"lat": "-71.625", "lng": "100.03125", "count": "1"},{"lat": "-72.09375", "lng": "99.375", "count": "1"},{"lat": "-73", "lng": "99.75", "count": "1"},{"lat": "-74.03125", "lng": "99.625", "count": "1"},{"lat": "-74.5", "lng": "99.53125", "count": "1"},{"lat": "-75.34375", "lng": "99.28125", "count": "1"},{"lat": "-76.78125", "lng": "98.6875", "count": "1"},{"lat": "-75.84375", "lng": "98.65625", "count": "1"},{"lat": "-77.625", "lng": "97.625", "count": "1"},{"lat": "-77.5", "lng": "97.71875", "count": "1"},{"lat": "-77.46875", "lng": "96.8125", "count": "1"},{"lat": "-76.9375", "lng": "95.75", "count": "1"},{"lat": "-76.625", "lng": "94.90625", "count": "1"},{"lat": "-76.78125", "lng": "93.75", "count": "1"},{"lat": "-76.96875", "lng": "92.1875", "count": "1"},{"lat": "-77.15625", "lng": "91.125", "count": "1"},{"lat": "-77.25", "lng": "90.78125", "count": "1"},{"lat": "-76.9375", "lng": "93.375", "count": "1"},{"lat": "-76.9375", "lng": "92.5", "count": "1"},{"lat": "-76.78125", "lng": "94.96875", "count": "1"},{"lat": "-75.71875", "lng": "91.40625", "count": "1"},{"lat": "-75.34375", "lng": "92.6875", "count": "1"},{"lat": "-75.3125", "lng": "93.78125", "count": "1"},{"lat": "-75.25", "lng": "95.40625", "count": "1"},{"lat": "-75.25", "lng": "96.21875", "count": "1"},{"lat": "-74.625", "lng": "97.375", "count": "1"},{"lat": "-75.53125", "lng": "97.09375", "count": "1"},{"lat": "-74.59375", "lng": "97.40625", "count": "1"},{"lat": "-73.34375", "lng": "97.9375", "count": "1"},{"lat": "-76", "lng": "99.5", "count": "1"},{"lat": "-77.4375", "lng": "98.9375", "count": "1"},{"lat": "-78.03125", "lng": "99.125", "count": "1"},{"lat": "-78.78125", "lng": "99.625", "count": "1"},{"lat": "-79.0625", "lng": "100.15625", "count": "1"},{"lat": "-67", "lng": "68.375", "count": "1"},{"lat": "-68.1875", "lng": "68.4375", "count": "1"},{"lat": "-68.9375", "lng": "68.6875", "count": "1"},{"lat": "-70.0625", "lng": "69.375", "count": "1"},{"lat": "-70.5", "lng": "70.3125", "count": "1"},{"lat": "-70.875", "lng": "71.625", "count": "1"},{"lat": "-71.0625", "lng": "72.625", "count": "1"},{"lat": "-71.3125", "lng": "73.5625", "count": "1"},{"lat": "-71.5", "lng": "74.75", "count": "1"},{"lat": "-70.9375", "lng": "75.5625", "count": "1"},{"lat": "-70", "lng": "75.9375", "count": "1"},{"lat": "-68.9375", "lng": "75.8125", "count": "1"},{"lat": "-68", "lng": "75.75", "count": "1"},{"lat": "-67.125", "lng": "74.6875", "count": "1"},{"lat": "-66.9375", "lng": "73.6875", "count": "1"},{"lat": "-66.9375", "lng": "73.125", "count": "1"},{"lat": "-67", "lng": "72.0625", "count": "1"},{"lat": "-67.25", "lng": "71.125", "count": "1"},{"lat": "-67.6875", "lng": "70.375", "count": "1"},{"lat": "-68.1875", "lng": "70.25", "count": "1"},{"lat": "-68.8125", "lng": "71.0625", "count": "1"},{"lat": "-69", "lng": "72.125", "count": "1"},{"lat": "-69.0625", "lng": "73.375", "count": "1"},{"lat": "-69.1875", "lng": "74.125", "count": "1"},{"lat": "-70.625", "lng": "70.78125", "count": "1"},{"lat": "-69.90625", "lng": "71.71875", "count": "1"},{"lat": "-70.0625", "lng": "73.4375", "count": "1"},{"lat": "-70.21875", "lng": "74.28125", "count": "1"},{"lat": "-67.90625", "lng": "74.84375", "count": "1"},{"lat": "-68.15625", "lng": "73.125", "count": "1"},{"lat": "-68.03125", "lng": "70.875", "count": "1"},{"lat": "-67.8125", "lng": "69.1875", "count": "1"},{"lat": "-67.71875", "lng": "68.21875", "count": "1"},{"lat": "-70", "lng": "68.40625", "count": "1"},{"lat": "-76.8125", "lng": "78.875", "count": "1"},{"lat": "-77.625", "lng": "79.4375", "count": "1"},{"lat": "-78.6875", "lng": "79.75", "count": "1"},{"lat": "-79.4375", "lng": "80", "count": "1"},{"lat": "-80.25", "lng": "80.6875", "count": "1"},{"lat": "-81.1875", "lng": "81.5", "count": "1"},{"lat": "-81.9375", "lng": "82.125", "count": "1"},{"lat": "-82.125", "lng": "83.6875", "count": "1"},{"lat": "-80.9375", "lng": "84.125", "count": "1"},{"lat": "-80.3125", "lng": "84.75", "count": "1"},{"lat": "-79.8125", "lng": "83", "count": "1"},{"lat": "-79.1875", "lng": "82.0625", "count": "1"},{"lat": "-78.8125", "lng": "81.5625", "count": "1"},{"lat": "-76.6875", "lng": "80", "count": "1"},{"lat": "-77.4375", "lng": "80.4375", "count": "1"},{"lat": "-78", "lng": "81.25", "count": "1"},{"lat": "-78.6875", "lng": "80.125", "count": "1"},{"lat": "-80.3125", "lng": "81.375", "count": "1"},{"lat": "-81", "lng": "82.8125", "count": "1"},{"lat": "-81.875", "lng": "82.5625", "count": "1"},{"lat": "-82.4375", "lng": "83.3125", "count": "1"},{"lat": "-81.25", "lng": "84.25", "count": "1"},{"lat": "-79.625", "lng": "83.625", "count": "1"},{"lat": "-82.375", "lng": "82", "count": "1"},{"lat": "-83.375", "lng": "83", "count": "1"},{"lat": "-83.3125", "lng": "84.0625", "count": "1"},{"lat": "-85.125", "lng": "72", "count": "1"},{"lat": "-85.3125", "lng": "71.125", "count": "1"},{"lat": "-85.8125", "lng": "70.5625", "count": "1"},{"lat": "-86.3125", "lng": "70.5", "count": "1"},{"lat": "-86.75", "lng": "72.3125", "count": "1"},{"lat": "-87.25", "lng": "72.5", "count": "1"},{"lat": "-86.875", "lng": "71.375", "count": "1"},{"lat": "-87.0625", "lng": "72.625", "count": "1"},{"lat": "-85.375", "lng": "72.8125", "count": "1"},{"lat": "-85.5", "lng": "71.5", "count": "1"},{"lat": "-87.25", "lng": "71.8125", "count": "1"},{"lat": "-99.34375", "lng": "84.140625", "count": "1"},{"lat": "-99.5625", "lng": "83.609375", "count": "1"},{"lat": "-100.0625", "lng": "83.203125", "count": "1"},{"lat": "-100.6875", "lng": "83.046875", "count": "1"},{"lat": "-101.6875", "lng": "82.890625", "count": "1"},{"lat": "-101.984375", "lng": "83.59375", "count": "1"},{"lat": "-101.578125", "lng": "84.5625", "count": "1"},{"lat": "-101", "lng": "85.46875", "count": "1"},{"lat": "-101.1875", "lng": "85.65625", "count": "1"},{"lat": "-100.265625", "lng": "85.84375", "count": "1"},{"lat": "-99.46875", "lng": "85.5", "count": "1"},{"lat": "-99.203125", "lng": "84.859375", "count": "1"}],
    "cougar": [{"lat": "-62.125", "lng": "67.625", "count": "1"},{"lat": "-61.78125", "lng": "68.484375", "count": "1"},{"lat": "-62.25", "lng": "69.53125", "count": "1"},{"lat": "-63.125", "lng": "69.046875", "count": "1"},{"lat": "-63.46875", "lng": "67.90625", "count": "1"},{"lat": "-62.6875", "lng": "68.46875", "count": "1"},{"lat": "-81.40625", "lng": "74.78125", "count": "1"},{"lat": "-82.3125", "lng": "73.90625", "count": "1"},{"lat": "-83.28125", "lng": "73.625", "count": "1"},{"lat": "-84.21875", "lng": "73.9375", "count": "1"},{"lat": "-84.875", "lng": "75.15625", "count": "1"},{"lat": "-85.53125", "lng": "76.03125", "count": "1"},{"lat": "-85.25", "lng": "77.03125", "count": "1"},{"lat": "-84.25", "lng": "77.5", "count": "1"},{"lat": "-82.96875", "lng": "77.5625", "count": "1"},{"lat": "-82.25", "lng": "76.9375", "count": "1"},{"lat": "-81.65625", "lng": "76.0625", "count": "1"},{"lat": "-81.6875", "lng": "74.53125", "count": "1"},{"lat": "-84", "lng": "74.25", "count": "1"},{"lat": "-83.34375", "lng": "75.40625", "count": "1"},{"lat": "-83.28125", "lng": "76.21875", "count": "1"},{"lat": "-83.8125", "lng": "75.640625", "count": "1"},{"lat": "-82.65625", "lng": "75.5625", "count": "1"},{"lat": "-92.4140625", "lng": "77.0390625", "count": "1"},{"lat": "-92.78125", "lng": "76.7265625", "count": "1"},{"lat": "-93.4140625", "lng": "76.8046875", "count": "1"},{"lat": "-93.7109375", "lng": "77.859375", "count": "1"},{"lat": "-94.0390625", "lng": "78.8203125", "count": "1"},{"lat": "-94.15625", "lng": "79.4375", "count": "1"},{"lat": "-93.9375", "lng": "80.2890625", "count": "1"},{"lat": "-92.6875", "lng": "80.296875", "count": "1"},{"lat": "-91.96875", "lng": "80.15625", "count": "1"},{"lat": "-91.2890625", "lng": "78.640625", "count": "1"},{"lat": "-91.6796875", "lng": "77.6875", "count": "1"},{"lat": "-92.1171875", "lng": "78.4765625", "count": "1"},{"lat": "-92.578125", "lng": "77.2890625", "count": "1"},{"lat": "-89.78125", "lng": "94.75", "count": "1"},{"lat": "-89.96875", "lng": "93.84375", "count": "1"},{"lat": "-90.28125", "lng": "93.375", "count": "1"},{"lat": "-90.921875", "lng": "93.046875", "count": "1"},{"lat": "-91.75", "lng": "93", "count": "1"},{"lat": "-92.515625", "lng": "93.1875", "count": "1"},{"lat": "-93.3125", "lng": "93.5", "count": "1"},{"lat": "-94", "lng": "94.078125", "count": "1"},{"lat": "-94.53125", "lng": "94.9375", "count": "1"},{"lat": "-94.40625", "lng": "95.90625", "count": "1"},{"lat": "-94.015625", "lng": "96.796875", "count": "1"},{"lat": "-93.28125", "lng": "97.375", "count": "1"},{"lat": "-92.28125", "lng": "97.578125", "count": "1"},{"lat": "-91.453125", "lng": "97.609375", "count": "1"},{"lat": "-90.078125", "lng": "95.6875", "count": "1"},{"lat": "-90.421875", "lng": "96.40625", "count": "1"},{"lat": "-91.5", "lng": "95.796875", "count": "1"},{"lat": "-92.15625", "lng": "94.9375", "count": "1"},{"lat": "-92.9375", "lng": "95.453125", "count": "1"},{"lat": "-91.890625", "lng": "96.640625", "count": "1"},{"lat": "-91.359375", "lng": "94.359375", "count": "1"},{"lat": "-94.375", "lng": "94.6875", "count": "1"},{"lat": "-92.984375", "lng": "95.25", "count": "1"},{"lat": "-99.03125", "lng": "38.9375", "count": "1"},{"lat": "-99.53125", "lng": "38.671875", "count": "1"},{"lat": "-99.9375", "lng": "38.0625", "count": "1"},{"lat": "-100.703125", "lng": "37.46875", "count": "1"},{"lat": "-100.953125", "lng": "37.25", "count": "1"},{"lat": "-101.890625", "lng": "36.296875", "count": "1"},{"lat": "-101.328125", "lng": "36.8125", "count": "1"},{"lat": "-102.625", "lng": "35.765625", "count": "1"},{"lat": "-103.609375", "lng": "35.40625", "count": "1"},{"lat": "-102.984375", "lng": "35.6875", "count": "1"},{"lat": "-104.640625", "lng": "35.25", "count": "1"},{"lat": "-105.21875", "lng": "35.421875", "count": "1"},{"lat": "-99.734375", "lng": "40.3125", "count": "1"},{"lat": "-100.3125", "lng": "40.09375", "count": "1"},{"lat": "-101.28125", "lng": "39.53125", "count": "1"},{"lat": "-102.203125", "lng": "39.03125", "count": "1"},{"lat": "-102.734375", "lng": "38.421875", "count": "1"},{"lat": "-103.3125", "lng": "38.140625", "count": "1"},{"lat": "-103.953125", "lng": "37.828125", "count": "1"},{"lat": "-104.640625", "lng": "37.3125", "count": "1"},{"lat": "-105.703125", "lng": "36.625", "count": "1"},{"lat": "-104.609375", "lng": "36.625", "count": "1"},{"lat": "-102.5625", "lng": "37.9375", "count": "1"},{"lat": "-101.46875", "lng": "38.65625", "count": "1"},{"lat": "-98.75", "lng": "40.734375", "count": "1"},{"lat": "-99.484375", "lng": "40.84375", "count": "1"},{"lat": "-100.015625", "lng": "41.1875", "count": "1"},{"lat": "-101.046875", "lng": "41.390625", "count": "1"},{"lat": "-101.765625", "lng": "41.46875", "count": "1"},{"lat": "-102.859375", "lng": "40.75", "count": "1"},{"lat": "-103.734375", "lng": "40.375", "count": "1"},{"lat": "-104.6875", "lng": "39.5", "count": "1"},{"lat": "-105.609375", "lng": "38.84375", "count": "1"},{"lat": "-105.96875", "lng": "37.84375", "count": "1"},{"lat": "-103.90625", "lng": "39.15625", "count": "1"},{"lat": "-105.765625", "lng": "37.21875", "count": "1"},{"lat": "-101.046875", "lng": "42.984375", "count": "1"},{"lat": "-100.828125", "lng": "42.453125", "count": "1"},{"lat": "-102.25", "lng": "43.265625", "count": "1"},{"lat": "-102.90625", "lng": "43", "count": "1"},{"lat": "-104.3125", "lng": "41.78125", "count": "1"},{"lat": "-103.6875", "lng": "42.1875", "count": "1"},{"lat": "-102.484375", "lng": "40.5", "count": "1"},{"lat": "-104.75", "lng": "40.953125", "count": "1"},{"lat": "-105.765625", "lng": "39.953125", "count": "1"},{"lat": "-105.875", "lng": "39.515625", "count": "1"},{"lat": "-98.59375", "lng": "39.75", "count": "1"},{"lat": "-106.3125", "lng": "38.625", "count": "1"},{"lat": "-99.5", "lng": "42.65625", "count": "1"},{"lat": "-99.125", "lng": "41.78125", "count": "1"},{"lat": "-101.34375", "lng": "42.8125", "count": "1"},{"lat": "-99.75", "lng": "28.15625", "count": "1"},{"lat": "-100.53125", "lng": "28.875", "count": "1"},{"lat": "-101.09375", "lng": "29.375", "count": "1"},{"lat": "-101.53125", "lng": "29.96875", "count": "1"},{"lat": "-102.03125", "lng": "30.625", "count": "1"},{"lat": "-102.5", "lng": "31.4375", "count": "1"},{"lat": "-102.90625", "lng": "31.8125", "count": "1"},{"lat": "-103.5", "lng": "32.46875", "count": "1"},{"lat": "-104", "lng": "32.625", "count": "1"},{"lat": "-104.53125", "lng": "33.25", "count": "1"},{"lat": "-104.625", "lng": "33.84375", "count": "1"},{"lat": "-105.625", "lng": "32.625", "count": "1"},{"lat": "-106.5625", "lng": "31.71875", "count": "1"},{"lat": "-106.59375", "lng": "30.9375", "count": "1"},{"lat": "-105.96875", "lng": "29.6875", "count": "1"},{"lat": "-105.78125", "lng": "29.09375", "count": "1"},{"lat": "-105.4375", "lng": "28.28125", "count": "1"},{"lat": "-104.96875", "lng": "27.75", "count": "1"},{"lat": "-104.5625", "lng": "27.03125", "count": "1"},{"lat": "-103.8125", "lng": "26.5625", "count": "1"},{"lat": "-103.34375", "lng": "26.25", "count": "1"},{"lat": "-102.46875", "lng": "26.15625", "count": "1"},{"lat": "-101.4375", "lng": "26.1875", "count": "1"},{"lat": "-100.46875", "lng": "26.3125", "count": "1"},{"lat": "-100.3125", "lng": "26.8125", "count": "1"},{"lat": "-101.25", "lng": "27.375", "count": "1"},{"lat": "-102.4375", "lng": "27.6875", "count": "1"},{"lat": "-103.0625", "lng": "28.40625", "count": "1"},{"lat": "-103.53125", "lng": "29.15625", "count": "1"},{"lat": "-104.0625", "lng": "29.90625", "count": "1"},{"lat": "-104.59375", "lng": "30.625", "count": "1"},{"lat": "-105.125", "lng": "31.28125", "count": "1"},{"lat": "-105.84375", "lng": "31.6875", "count": "1"},{"lat": "-106.53125", "lng": "30.09375", "count": "1"},{"lat": "-103.3125", "lng": "29.1875", "count": "1"},{"lat": "-102.5", "lng": "27.96875", "count": "1"},{"lat": "-104.15625", "lng": "28.1875", "count": "1"},{"lat": "-106.03125", "lng": "32.75", "count": "1"},{"lat": "-105.90625", "lng": "33.875", "count": "1"},{"lat": "-105.65625", "lng": "34.90625", "count": "1"},{"lat": "-104.84375", "lng": "35.21875", "count": "1"},{"lat": "-104.25", "lng": "33.875", "count": "1"},{"lat": "-103.125", "lng": "34.0625", "count": "1"},{"lat": "-102.875", "lng": "33.375", "count": "1"},{"lat": "-103", "lng": "34.25", "count": "1"},{"lat": "-102.875", "lng": "35", "count": "1"},{"lat": "-106.375", "lng": "35.5625", "count": "1"},{"lat": "-106.1875", "lng": "33.34375", "count": "1"},{"lat": "-118.59375", "lng": "29.5625", "count": "1"},{"lat": "-118.734375", "lng": "29.296875", "count": "1"},{"lat": "-119.203125", "lng": "29.03125", "count": "1"},{"lat": "-119.984375", "lng": "28.953125", "count": "1"},{"lat": "-120.46875", "lng": "28.796875", "count": "1"},{"lat": "-121.265625", "lng": "29.640625", "count": "1"},{"lat": "-121.46875", "lng": "30.234375", "count": "1"},{"lat": "-121.703125", "lng": "30.765625", "count": "1"},{"lat": "-121.90625", "lng": "31.421875", "count": "1"},{"lat": "-122.21875", "lng": "32.640625", "count": "1"},{"lat": "-122.34375", "lng": "33.390625", "count": "1"},{"lat": "-122.546875", "lng": "33.671875", "count": "1"},{"lat": "-122.8125", "lng": "34.3125", "count": "1"},{"lat": "-123.09375", "lng": "35.859375", "count": "1"},{"lat": "-123.15625", "lng": "36.515625", "count": "1"},{"lat": "-122.6875", "lng": "36.734375", "count": "1"},{"lat": "-122.640625", "lng": "34.921875", "count": "1"},{"lat": "-121.875", "lng": "36.125", "count": "1"},{"lat": "-120.375", "lng": "36.203125", "count": "1"},{"lat": "-120.140625", "lng": "36.09375", "count": "1"},{"lat": "-119.5625", "lng": "35.171875", "count": "1"},{"lat": "-118.71875", "lng": "33.734375", "count": "1"},{"lat": "-118.546875", "lng": "33.234375", "count": "1"},{"lat": "-118.28125", "lng": "32.359375", "count": "1"},{"lat": "-118.078125", "lng": "31.234375", "count": "1"},{"lat": "-117.875", "lng": "30.625", "count": "1"},{"lat": "-118.671875", "lng": "30.859375", "count": "1"},{"lat": "-120.34375", "lng": "32.53125", "count": "1"},{"lat": "-120.46875", "lng": "33.375", "count": "1"},{"lat": "-120.6875", "lng": "34.140625", "count": "1"},{"lat": "-120.84375", "lng": "34.390625", "count": "1"},{"lat": "-120.203125", "lng": "31.703125", "count": "1"},{"lat": "-120.03125", "lng": "31.09375", "count": "1"},{"lat": "-121.9375", "lng": "31.890625", "count": "1"},{"lat": "-119.765625", "lng": "34.765625", "count": "1"},{"lat": "-121.25", "lng": "36.46875", "count": "1"},{"lat": "-121.578125", "lng": "36.5625", "count": "1"},{"lat": "-121.6875", "lng": "37.078125", "count": "1"},{"lat": "-121.640625", "lng": "37.390625", "count": "1"},{"lat": "-120.859375", "lng": "37.203125", "count": "1"},{"lat": "-120.21875", "lng": "37.53125", "count": "1"},{"lat": "-119.140625", "lng": "36.640625", "count": "1"},{"lat": "-118.84375", "lng": "35.53125", "count": "1"},{"lat": "-118.515625", "lng": "34.53125", "count": "1"},{"lat": "-120.1875", "lng": "37", "count": "1"},{"lat": "-122.171875", "lng": "37.953125", "count": "1"},{"lat": "-121.609375", "lng": "37.921875", "count": "1"},{"lat": "-118.953125", "lng": "31.9375", "count": "1"},{"lat": "-119.0625", "lng": "30.640625", "count": "1"}]
};