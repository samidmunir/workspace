import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';
import { mailtrapClient, sender } from './mailtrap.config.js';

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: 'Email Verification',
        });

        console.log('Email sent successfully.');
    } catch (error) {
        console.log('Error sending verification -', error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: '5c718eb8-5b2b-4dc2-9bd4-fe9b991bb611',
            template_variables: {
                'company_info_name': 'MERN-Auth',
                'name': name,
            },
        });

        console.log('Welcome email sent successfully.', response);
    } catch (error) {
        throw new Error(`Error sending welcome email: ${error}`);
    }
};