import React from 'react';
import { Link } from 'react-router-dom';

const LabCard = ({ lab }) => {
  return (
    <Link to={`/category/${lab.category}/article/${lab.id}`}>{lab.title}</Link>
  );
};

export default LabCard;
