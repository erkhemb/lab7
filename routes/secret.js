var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function (req, res, next) {

  req.db.collection('testCol').findOne({}, function (err, item) {
    const decipher = crypto.createDecipher('aes256', 'asaadsaad');

    const encrypted = item.message;
    let decrypted = decipher.update(encrypted, 'hex');
    decrypted += decipher.final('utf8');

    res.send(decrypted);
    res.render('secret.ejs', { decrypted: decrypted });
  });

});

module.exports = router;

