var LocalStorage = {
    Set: function (key, input) {
        localStorage[key] = JSON.stringify(input);

    },
    Get: function (key) {
        var stored = localStorage[key] !== "undefined" ? localStorage[key] : "0";
        if (stored) {
            return JSON.parse(stored);
        }
        return false;
    }
};
