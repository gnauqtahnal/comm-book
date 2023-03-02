/* eslint-disable import/no-extraneous-dependencies */
import { getAuth } from 'firebase/auth';
import app from './app';

const auth = getAuth(app);

export default auth;
