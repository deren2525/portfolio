import firebase from '../plugins/firebase';
import 'firebase/storage';

export const storage: firebase.storage.Storage = firebase.storage();