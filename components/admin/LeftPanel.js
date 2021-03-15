import React from 'react';
import Link from 'next/link';

export default function LeftPanel() {
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
          <Link href="/admin/product" className="">
            Contact Requests
          </Link>
        </li>
      </ul>
    </div>
  );
}
