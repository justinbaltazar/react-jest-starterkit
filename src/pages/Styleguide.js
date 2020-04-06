import React from 'react';
import OutlineWrapper from 'components/OutlineWrapper';

const Styleguide = () => (
  <div>Styleguide!
    <div style={{ height: '20px', width: '20px' }}>
      <OutlineWrapper hovered>
        <div style={{ height: '20px', width: '20px' }} />
      </OutlineWrapper>
    </div>

  </div>
);

export default Styleguide;
