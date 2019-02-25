import firebase from 'firebase/app';
import 'firebase/auth';

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_DEV_API_ID,
    authDomain: process.env.REACT_APP_DEV_API_DOMAIN,
}

firebase.initializeApp(FirebaseConfig);

export default firebase 