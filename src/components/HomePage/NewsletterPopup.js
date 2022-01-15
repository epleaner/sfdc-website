import React, { useState, useEffect } from 'react';

import Button from '@material-ui/Core/Button';
import Snackbar from '@material-ui/Core/Snackbar';
import IconButton from '@material-ui/Core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MailChimpSignup from '../MailChimpSignup';

import toast, { Toaster } from 'react-hot-toast';

const Popup = () => {
  useEffect(
    () =>
      toast(<MailChimpSignup inline small />, {
        duration: 10000,
        position: 'bottom-center',
      }),
    []
  );
  return <Toaster />;
};

export default Popup;
