import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import AdminLayout from '../../../components/admin/AdminLayout';
import { createCategory } from '../../../services/apis/admin.js';
import '../../../components/styles/app.scss';
import { ToastContainer, toast } from 'react-toastify';

export default function create() {
  const [name, setName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    createCategory({
      name: name,
    }).then((res) => res.data && res.data.success && setName(''));
    // .then(
    //   (res) =>
    //     res.data.success && toast.success('Category Created Successfully!')
    // );
  };
  return (
    <AdminLayout>
      <h3>Create a New Category</h3>
      <Input
        addonBefore={'Enter Category Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ex Bra, lingrie"
      />
      <Button onClick={onSubmit} type="submit" className="">
        Submit
      </Button>
    </AdminLayout>
  );
}
