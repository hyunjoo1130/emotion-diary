import React from 'react';

function Button({ type, name, onclick }) {
  const btnType = ['POSITIVE', 'NEGATIVE'].includes(type) ? type : 'DEFAULT';

  return (
    <button
      className={['Button', `Button_${btnType}`].join(' ')}
      type={btnType}
      onClick={onclick}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  type: 'DEFAULT',
};

export default Button;
