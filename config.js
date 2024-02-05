import * as process from 'node:process';
import { config } from 'dotenv';

config();
if (!process.env.APS_CLIENT_ID || !process.env.APS_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
export const APS_CLIENT_ID = process.env.APS_CLIENT_ID;
export const APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET;
export const APS_BUCKET = `${APS_CLIENT_ID.toLowerCase()}-basic-app`;
export const PORT = process.env.PORT || 8080;