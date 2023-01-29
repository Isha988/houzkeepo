const dotenv = require ("dotenv");
dotenv.config();

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API;

const sendVerificationMail = async (user, link) => {
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail = {
        subject: "Your HouzKeepo verification mail",
        to: [{email: user.email, name: user.name}],
        sender: {email: "plantzaplants@gmail.com" },
        htmlContent: "<html><body>Hey {{params.name}}<p> Click this <a href={{params.link}}>link</a> to verify your email</p></body></html>", 
        params: {name: user.name, link}
    }

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      }, function(error) {
        //console.error(error);
      });
}

module.exports = {sendVerificationMail};