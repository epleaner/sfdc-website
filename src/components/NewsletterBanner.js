import React, { useState } from 'react';
import { Location } from '@reach/router';
import MaterialMenu from './MaterialMenu';
import MailChimpSignup from './MailChimpSignup';

const NewsletterBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {showBanner && (
        <div className='w-full flex justify-between'>
          <MailChimpSignup inline oneLine small />
        </div>
      )}
    </>
  );
};

export default NewsletterBanner;
