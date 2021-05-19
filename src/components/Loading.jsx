import React from 'react';
import LoadingImage from '../assets/images/Loading.gif';

const Loading = () => (
  <div className="d-flex justify-content-center align-content-center w-100 h-100">
    <img src={LoadingImage} alt="Loading" height="100px" width="100px" />
  </div>
);

export default Loading;
