const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

module.exports.uploadAvatar = function (req, res) {
    
    const form = new formidable.IncomingForm();
    const upload = 'public/assets/images';
    
    form.uploadDir = path.join(process.cwd(), upload);
    
    form.parse(req, function (err, fields, files) {
        let fileName = path.join(upload, files.avatar.name);

        fs.rename(files.avatar.path, fileName, function () {
            if (err) {
                fs.unlinkSync(fileName);
                fs.rename(files.avatar.path, fileName);
            }

            const pathApi = '/api/adminAvatar';
            let dir = fileName.substr(fileName.indexOf('/'));

            const requestOptions = {
                url: 'http://localhost:3001' + pathApi,
                method: "POST",
                json: {
                    //name: fields.name,
                    picture: dir
                }
            };

            rp(requestOptions)
                .then((body) => {
                    res.json(body);
                })
        });

    })
}