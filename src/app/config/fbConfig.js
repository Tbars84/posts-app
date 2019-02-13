import firebase from 'firebase/app';
import 'firebase/auth';

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_DEV_API_ID,
    authDomain: process.env.REACT_APP_DEV_API_DOMAIN,
}

firebase.initializeApp(FirebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// export const authRef = fbConfig.auth()
// export const provider = new fbConfig.auth.GithubAuthProvider();

export default firebase 