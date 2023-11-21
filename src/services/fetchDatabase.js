import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './fireBase.js';

export const getFirebase = () =>  {
    const db = getFirestore(app);
  const coll = collection(db, "");

  const data = getDocs(coll).then(res => {
    const arrayNorm = res.docs.map(element => {
      return {
        id: element.id,
        question: element.data().question,
        code: element.data().code,
        answers: element.data().answers,
        correctAnswer: element.data().correctAnswer,
      };
    });
    return arrayNorm;
  });
  return data;
};