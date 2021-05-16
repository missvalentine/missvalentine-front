import React, { useRef } from 'react';
import LeftPanel from './LeftPanel';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

export default function AdminLayout(props) {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth || !auth.token) Router.push('/');

  return (
    <div className="c-adminpanel">
      <LeftPanel />
      <div className="c-adminpanel-right">{props.children}</div>
    </div>
  );
}
