import React, { useEffect, useMemo, useState } from 'react';

interface IAlertBox {
  type: string;
  text: string;
  time?: number;
}

const AlertBox = function ({ type, text, time }: IAlertBox) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {}, time);
  }, [text]);

  return <div className='fixed left-5 bottom-5'>test</div>;
};

export default AlertBox;

AlertBox.defaultProps = {
  time: 3000,
};
