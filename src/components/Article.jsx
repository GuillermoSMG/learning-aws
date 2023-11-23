import React from 'react';
import { useParams } from 'react-router-dom';
import { useLabsStore } from '../store/labs';

const Article = () => {
  const { id } = useParams();
  const labs = useLabsStore(state => state.labs);
  const lab = labs.filter(lab => lab.id === id)[0];
  return (
    <article key={lab.id}>
      <h3>{lab.title}</h3>
      <p>{lab.description}</p>
    </article>
  );
};

export default Article;
