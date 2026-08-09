// enum ? special feature of typescript
// we can create the constants(fixed)
// commonly identified without any duplication
// qualityUrl,devURL
enum ENVIRONMENT{ // property
    QA ="https://leaftaps.com/qa/opentaps/control/login",
    DEV ="https://leaftaps.com/dev/opentaps/control/login",
    PROD="https://leaftaps.com/opentaps/control/login",
    UAT="https://leaftaps.com/uat/opentaps/control/login"
}
console.log(ENVIRONMENT.QA);