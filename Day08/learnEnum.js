// enum ? special feature of typescript
// we can create the constants(fixed)
// commonly identified without any duplication
// qualityUrl,devURL
var ENVIRONMENT;
(function (ENVIRONMENT) {
    ENVIRONMENT["QA"] = "https://leaftaps.com/qa/opentaps/control/login";
    ENVIRONMENT["DEV"] = "https://leaftaps.com/dev/opentaps/control/login";
    ENVIRONMENT["PROD"] = "https://leaftaps.com/opentaps/control/login";
    ENVIRONMENT["UAT"] = "https://leaftaps.com/uat/opentaps/control/login";
})(ENVIRONMENT || (ENVIRONMENT = {}));
console.log(ENVIRONMENT.QA);
