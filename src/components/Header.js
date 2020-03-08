import React from 'react';
import {Location} from '@reach/router';
import MaterialMenu from './MaterialMenu';

const Header = () => (
  <Location>{(locationProps) => <MaterialMenu {...locationProps} />}</Location>
);

export default Header;
