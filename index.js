const request = require("request");

var API_KEY = '5ca77c152b98447730f2847228285308';

module.exports = {

    doPost: function(body, callback){
        request(body, function (err, res, body) {
            if (err) {
                console.log(err);
            }

            callback(body);
        })
    }
}




