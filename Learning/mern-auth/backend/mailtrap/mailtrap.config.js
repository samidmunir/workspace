import { MailtrapClient } from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || '6c5e5def9d8b22aece290f329f042d5c';
console.log(TOKEN);

export const mailtrapClient = new MailtrapClient({
    token: TOKEN,
});

export const sender = {
    email: 'hello@demomailtrap.co',
    name: 'Mailtrap Test',
};