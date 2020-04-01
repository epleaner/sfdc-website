import React from 'react';
import Collapse from '@material-ui/core/Collapse';

import EventBody from '../EventBody';

export default (props) => {
  const {isOpen, attachments, description} = props;

  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <EventBody {...{attachments, description}} />
    </Collapse>
  );
};
