import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{user?.name}</p>
    <p>{user?.email}</p>
  </>
);
