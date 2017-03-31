var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var text = 'Hello world from \n\n' + req.body.name;

var mailOptions = {
	from: 'rashmi.poddar2017@gmail.com',
	to: 'rashmi.poddar@appbrowzer.com',
	subject: 'Hello',
	
}
app.use('/email', router);
router.post('/', sendEmail);





app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});












app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
});

function sendEmail(req, res) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'rashmi.poddar2017@gmail.com',
			pass: 'rashmipoddar2017'
		}
	});
}
