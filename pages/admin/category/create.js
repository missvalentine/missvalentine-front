import React, { useState, useEffect } from 'react';
import { Input, Button, notification } from 'antd';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  createCategory,
  getCategory,
  updateCategory,
} from '../../../services/apis/admin.js';
import '../../../components/styles/app.scss';
import Router from 'next/router';

export default function create() {
  const [name, setName] = useState('');
  const { cid } = Router.router.query;

  useEffect(() => {
    if (cid) {
      getCategory(cid).then(({ data }) => setName(data.data.name));
    }
  }, [cid]);

  const onSubmit = (event) => {
    event.preventDefault();

    //if cid then edit
    cid
      ? updateCategory(
          {
            name,
          },
          cid
        )
          .then(({ data }) => {
            if (data && data.success) {
              notification.success({ message: data.message });
              Router.push('/admin/category');
            } else {
              notification.error({
                message: data.message,
              });
            }
          })
          .catch((err) =>
            notification.error({ message: 'Something went wrong' })
          )
      : createCategory({
          name,
        })
          .then(({ data }) => {
            if (data && data.success) {
              notification.success({ message: data.message });
              setName('');
            } else {
              notification.error({
                message: data.message,
              });
              setName('');
            }
          })
          .catch((err) =>
            notification.error({ message: 'Something went wrong' })
          );
  };

  return (
    <AdminLayout>
      {cid ? <h3>Edit Category</h3> : <h3>Create a new Category</h3>}
      <Input
        addonBefore={'Enter Category Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ex Bra, lingerie"
      />
      <Button onClick={onSubmit} type="submit" disabled={name.length === 0}>
        Submit
      </Button>
    </AdminLayout>
  );
}
