(function() {
    'use strict';

    var findIndex = function (callback, thisArg) {
        var arr = this;
        var arrLen = arr.length;
        var i;

        if (Object.prototype.toString.call(arr) !== '[object Array]') {
            throw new TypeError('Array.prototype.findIndex was called on a none array element');
        }

        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }

        for (i = 0; i < arrLen; i += 1) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    };

    if (!Array.prototype.findIndex) Array.prototype.findIndex = findIndex;
})();