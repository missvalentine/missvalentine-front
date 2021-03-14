import React from 'react';
import LeftPanel from './LeftPanel';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminLayout(props) {
  return (
    <div className="c-adminpanel">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <LeftPanel />
      <div className="c-adminpanel-right">{props.children}</div>
    </div>
  );
}
