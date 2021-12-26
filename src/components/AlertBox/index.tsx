import React, { useEffect, useMemo, useState } from 'react';
import { IAlertInfo } from 'store/reducers/common';
import ErrorAlert from './ErrorAlert';

interface IAlertBoxProps {
  alertInfo: IAlertInfo;
}

const AlertBox = function ({ alertInfo }: IAlertBoxProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alertInfo.text.length > 0) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, alertInfo.time);
    }
  }, [alertInfo, setShow]);

  return (
    <div className={`fixed left-5 bottom-5 animate-bounce ${show ? 'visible' : 'invisible'} z-10`}>
      {alertInfo.type === 'error' && <ErrorAlert text={alertInfo.text} />}
    </div>
  );
};

export default AlertBox;
