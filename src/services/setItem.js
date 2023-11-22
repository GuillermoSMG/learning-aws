import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from './fireBase.js';
import { COLLECTION_NAME } from '../const/labs.js';

export const addoc = () => {
  const db = getFirestore(app);

  const coll = collection(db, COLLECTION_NAME);
  addDoc(coll, {
    title: 'lab1',
    category: 'python',
    description: 'asfiashngoisngoign',
    context: 'aqui imagen',
    architecture: 'aqui otra imagen',
    steps: {
      step1: {
        desc: 'tal cosa',
        img: 'img',
      },
      step2: {
        desc: 'tal cosa',
        img: 'img',
      },
    },
  });
};
