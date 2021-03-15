import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  createSubcategory,
  getAllCategories,
} from '../../../services/apis/admin.js';
import '../../../components/styles/app.scss';
import { Select } from 'antd';

const { Option } = Select;

export default function create() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    createSubcategory({
      name: name,
      category: categoryId,
    }).then((res) => {
      if (res.data && res.data.success) {
        setName('');
        setCategoryId(null);
      }
    });
  };

  useEffect(() => {
    getAllCategories().then(
      (res) => res && res.data && setCategories(res.data.data)
    );
  }, []);

  function handleCatChange(value) {
    setCategoryId(value);
  }

  return (
    <AdminLayout>
      <h3>Create a New Category</h3>
      {categories.length > 1 ? (
        <div>
          <Select
            placeholder="Select Category Category"
            style={{ width: '100%' }}
            onChange={handleCatChange}
            bordered
          >
            {categories.map((cate, index) => (
              <Option key={index} value={cate._id} name={cate.name}>
                {cate.name}
              </Option>
            ))}
          </Select>
          <Input
            addonBefore={'Enter Sub-Category Name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex Bra, lingrie"
            disabled={categoryId === null}
          />
          <Button onClick={onSubmit} type="submit" className="">
            Submit
          </Button>
        </div>
      ) : (
        <div>Create a Category first</div>
      )}
    </AdminLayout>
  );
}
