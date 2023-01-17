// Define application constants
const message = 'Premium SMS Code'
// Your login credentials
const shortCode = '2345'
const keyword = 'Pewo'
const username = 'sandbox'
const apikey = '4fc63b75c4d39db96e4895fa652a74a8399a1777339d1a777e4d236908d3b6b5'
const options = {
apiKey: apikey,
username: username
}


const AfricasTalking = require('africastalking')(options)
const sms = AfricasTalking.SMS


exports.received = (req, res) => {
    var body = req.body;
    if (body.to == '2345') {
        sendResponse(body.from, message, keyword)
        
    } else {
        console.log('Something is wrong with the incoming message')
    }

}


function sendResponse (recipient, message, keyword) {
    var opts = {
    from: shortCode,
    to: recipient,
    message: message, 
    keyword:keyword
    }
    sms.send(opts).then(
        console.log('Message sent successfully')
        ).catch(
            console.log('Something went wrong with message sending')
            )
        }