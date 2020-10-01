const sgMail = require('@sendgrid/mail')

const sengridAPIKey = process.env.SENGRID_API_KEY

sgMail.setApiKey(sengridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guivipom@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then( ()=> {
        console.log('Email sent succesfully');
    }).catch((e)=>{
        console.log(e.response.body)
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guivipom@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}