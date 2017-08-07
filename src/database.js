import * as firebase from 'firebase';

const config = {
  apiKey: 'key',
  databaseURL: 'dbURL',
  storageBucket: 'storageURL',
};

firebase.initializeApp(config);

export default firebase;
