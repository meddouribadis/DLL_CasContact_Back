const sendEmail = require('_helpers/mailer');

module.exports = {
    sendWelcomeMail,
    sendSignalementMail
};

async function sendWelcomeMail(params) {
    let message = `<p>If you don't know your password you can reset it via the <code>/account/forgot-password</code> api route.</p>`;
    let from = `Cas Covid - Univ Evry <meddouri.badis@gmail.com>`

    await sendEmail({
        from: from,
        to: params.email,
        subject: 'Inscription : Bienvenue sur cas covid',
        html: `<h4>Merci pour votre inscription</h4>
               <p>Votre Email <strong>${params.email}</strong> est désormais inscrit.</p>
               ${message}`
    });
}

async function sendSignalementMail(params) {
    console.log(params);
    let message = `<p>Vous venez de nous signaler que vous êtes infecté/cas contact
                    Votre demande de signalement a bien été prise en compte. Vos professeurs et l’administration ont été alerté par cette nouvelle.
                    Vous pouvez demander modification ou suppression des informations transmises en nous contactant à l’adresse suivante, et en détaillant votre demande : projetphpam@gmail.com 
                    Merci de votre confiance, vous limitez les risques de transmission du virus !
                    </p>`;
    let from = `Cas Covid - Univ Evry <meddouri.badis@gmail.com>`

    await sendEmail({
        from: from,
        to: params.email,
        subject: 'UEVE : Signalement reçu',
        html: `<h4>Votre signalement a été envoyé.</h4>
               ${message}`
    });
}

