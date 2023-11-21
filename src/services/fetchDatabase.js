import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './fireBase.js';
import { COLLECTION_NAME } from '../const/labs.js';

export const getFirebase = () =>  {
    const db = getFirestore(app);
  const coll = collection(db, COLLECTION_NAME);

  const data = getDocs(coll)
  .then(res => {
    const arrayNorm = res.docs.map(element => {
      return {
        id: element.id,
        title:element.data().title
        
    };
    });
    return arrayNorm;
  });
  return data;
};