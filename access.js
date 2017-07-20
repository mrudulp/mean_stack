var mongoose = require('mongoose');
var productSchema = require('./user');

var u = new User({
    profile: {username: 'abc'}
});

modifyUserProfile(u, {
    picture: 'http://dreamatico.com/data_images/kitten/kitten-3.jpg'
});

//modifyUserData can **only** modify
// user.profile, not user.data
function modifyUserData(user, profile, callback){
    
}