var path = require('path');

exports.index = function(request, response) {
    response.sendFile(path.join(__dirname + '/../public/pos.html'));
}