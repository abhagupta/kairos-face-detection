var main = require('./index');
var constants = require('./constants');

var body = {


    "image":"https://metrouk2.files.wordpress.com/2014/12/cruise1.jpg",
    "subject_id":"Tom",
    "gallery_name":"AbhaGallery"

}

var options = {
    method: 'post',
    body: body,
    json: true,
    url: 'https://api.kairos.com/enroll',
    headers: {
        'app_id': constants.app_id,
        'app_key' : constants.app_key
    }
};

main.doPost(options, function(response){
    console.log(JSON.stringify(response));
});



