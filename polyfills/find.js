(function() {
    'use strict';

    var find = function (callback, thisArg) {
        var arr = this;
        var arrLen = arr.length;
        var i;

        if (Object.prototype.toString.call(arr) !== '[object Array]') {
            throw new TypeError('Array.prototype.find was called on a none array element');
        }

        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }

        for (i = 0; i < arrLen; i += 1) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                return arr[i];
            }
        }

        return undefined;
    };

    if (!Array.prototype.find) Array.prototype.find = find;
})();