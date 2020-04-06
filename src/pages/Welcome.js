import React from 'react';
import WelcomeComponent from 'components/WelcomeComponent';
import style from './Welcome.scss';

const Welcome = (props) => {
  return (
    <div className={style.welcome}>
      Welcome!
      <WelcomeComponent />
    </div>
  );
};

export default Welcome;
