import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loading.json'; // Replace with your animation JSON file

const LottieLoading = () => {
  return (
    <div style={{ width: 150, height: 150 }}> 
      <Lottie animationData={animationData} autoplay loop />
    </div>
  );
};

export default LottieLoading;
