import React, { useContext } from 'react';
import { Message } from 'semantic-ui-react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = props => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <Message
        content={alert.msg}
        icon={alert.type === 'error' ? 'warning circle' : 'info circle'}
        error={alert.type === 'error'}
        success={alert.type !== 'error'}
        key={alert.id}
      />
    ))
  );
};

export default Alerts;
