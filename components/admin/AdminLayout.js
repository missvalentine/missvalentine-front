import React, { useRef } from 'react';
import LeftPanel from './LeftPanel';

export default function AdminLayout(props) {
  return (
    <div className="c-adminpanel">
      <LeftPanel />
      <div className="c-adminpanel-right">{props.children}</div>
    </div>
  );
}
