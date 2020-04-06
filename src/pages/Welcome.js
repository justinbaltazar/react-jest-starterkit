import React from 'react';
import AComponent from 'components/AComponent';
import style from './Welcome.scss';

const Welcome = (props) => {
  return (
    <div className={style.welcome}>
      <AComponent />
    </div>
  );
};

export default Welcome;
