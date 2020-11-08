const sendEmail = require('_helpers/mailer');

module.exports = {
    sendWelcomeMail
};

async function sendWelcomeMail(params) {
    let message = `<p>If you don't know your password you can reset it via the <code>/account/forgot-password</code> api route.</p>`;

    await sendEmail({
        to: params.email,
        subject: 'Inscription : Bienvenue sur cas covid',
        html: `<h4>Merci pour votre inscription</h4>
               <p>Votre Email <strong>${params.email}</strong> est désormais inscrit.</p>
               ${message}`
    });
}