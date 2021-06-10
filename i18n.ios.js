/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

require('globals');
const application = require("@nativescript/core/application");
const format = require('format');

const bundle = NSBundle.mainBundle;

const L = function () {
    arguments[0] = bundle.localizedStringForKeyValueTable(arguments[0], '', null);
    return format.apply(this, arguments);
};

var applicationResources = application.getResources();
applicationResources.L = L;
application.setResources(applicationResources);
global.L = L;
