import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './fireBase.js';
import { COLLECTION_NAME } from '../const/labs.js';

export const getFirebase = () => {
  const db = getFirestore(app);
  const coll = collection(db, COLLECTION_NAME);

  const data = getDocs(coll).then(res => {
    const arrayNorm = res.docs.map(element => {
      return {
        id: element.id,
        title: element.data().title,
        description: element.data().description,
        context: element.data().context,
        architecture: element.data().architecture,
        steps: element.data().steps,
      };
    });
    return arrayNorm;
  });
  return data;
};
