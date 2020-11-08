const sendEmail = require('_helpers/mailer');

module.exports = {
    sendWelcomeMail
};

async function sendWelcomeMail(params) {
    let message = `<p>If you don't know your password you can reset it via the <code>/account/forgot-password</code> api route.</p>`;

    await sendEmail({
        to: params.email,
        subject: 'Sign-up Verification API - Email Already Registered',
        html: `<h4>Email Already Registered</h4>
               <p>Your email <strong>${params.email}</strong> is already registered.</p>
               ${message}`
    });
}