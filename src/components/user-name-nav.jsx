import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const UserName = () => {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated ? <h2>{user.nickname}</h2> : null;
};

export default UserName;