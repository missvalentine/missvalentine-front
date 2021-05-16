import React from 'react';
import Link from 'next/link';
import { signOut } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

export default function LeftPanel() {
  const dispatch = useDispatch();
  const handleLogut = () => {
    dispatch(signOut());
    Router.push('/');
  };

  return (
    <div className="c-adminpanel-left">
      <Link href="/" className="">
        <h3 className="c-adminpanel-left__weblink">Go To Website</h3>
      </Link>

      <h3 className="c-adminpanel-left__heading">Admin Navigation</h3>
      <ul className="c-adminpanel-left__list">
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/dashboard" className="">
            Profile
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/category/create" className="">
            Create Category
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/category" className="">
            Manage Categories
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/subcategory/create" className="">
            Create Sub-Category
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/subcategory" className="">
            Manage Sub-Categories
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item">
          <Link href="/admin/product/create" className="">
            Create Product
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item ">
          <Link href="/admin/product" className="">
            Manage Products
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item ">
          <Link href="/admin/contact/query" className="">
            Contact Queries
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item ">
          <Link href="/admin/contact/enquiry" className="">
            Catalogue Enquiry Request
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item ">
          <Link href="/admin/contact/promotions" className="">
            Promotion Emails
          </Link>
        </li>
        <li className="c-adminpanel-left__list-item " onClick={handleLogut}>
          <Link href="/" className="">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}
