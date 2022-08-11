"use strict";
exports.__esModule = true;
var ms_rest_nodeauth_1 = require("@azure/ms-rest-nodeauth");
(0, ms_rest_nodeauth_1.loginWithUsernamePasswordWithAuthResponse)(process.argv[2], process.argv[3]).then(function (authres) {
    console.log(authres.subscriptions);
})["catch"](function (err) {
    console.log("error");
});
