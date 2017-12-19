(function() {
    'use strict';

    var values = function(obj) {
        var values = [];
        var key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) values.push(obj[key]);
        }

        return values;
    };

    var entries = function(obj) {
        var pairs = [];
        var key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) pairs.push([key, obj[key]]);
        }

        return pairs;
    };

    if (!Object.values) Object.values = values;
    if (!Object.entries) Object.entries = entries;
})();