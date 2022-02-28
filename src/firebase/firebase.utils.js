import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = "YOUR_FIREBASE_CONFIG_HERE";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


export const convertArticlesSnapshotToMap = (articlesSnapshot) => {
  const transformedArticle = articlesSnapshot.dosc.map(doc => {
    return {
      ...doc,
      id: doc.id,
    }
  });

  return transformedArticle.reduce((accumulator, article) => {
    accumulator[article.id] = article;
    return accumulator;
  }, {});
}


firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export default firebase;