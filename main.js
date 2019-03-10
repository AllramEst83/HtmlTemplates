var LocalStorage = LocalStorage || {};

$(function () {

LocalStorage.Set("SomeKey", "SomeValue");

var valueFromStorage = LocalStorage.Get("SomeKey");

});
