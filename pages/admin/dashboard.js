import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../../components/admin/AdminLayout';
import '../../components/styles/app.scss';

export default function AdminDashboard() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const { user } = auth;

  const rightAdmin = (
    <div className="card">
      <div className="header bg-dark text-white">Information</div>
      <ul className="list-group text-md-left ">
        <li className="list-group-item">
          <span className="badge badge-info text-white mr-4">Name </span>
          {user.name}
        </li>
        <li className="list-group-item">
          <span className="badge badge-info text-white mr-4">Email </span>
          {user.email}
        </li>
        <li className="list-group-item">
          <span className="badge badge-danger text-white">Admin Access </span>
        </li>
      </ul>
    </div>
  );

  return <AdminLayout>{rightAdmin}</AdminLayout>;
}
