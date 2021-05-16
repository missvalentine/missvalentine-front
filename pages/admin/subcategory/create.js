import React, { useState, useEffect } from 'react';
import { Input, Button, notification } from 'antd';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  createSubcategory,
  getAllCategories,
  getSubcategory,
  updateSubCategory,
} from '../../../services/apis/admin.js';
import '../../../components/styles/app.scss';
import { Select } from 'antd';
import Router from 'next/router';

const { Option } = Select;

export default function create() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const { sCid } = Router.router.query;

  useEffect(() => {
    if (sCid) {
      getSubcategory(sCid).then(({ data }) => {
        setName(data.data.name);
        setCategoryId(data.data.category);
      });
    }
  }, [sCid]);

  const onSubmit = (event) => {
    event.preventDefault();

    sCid
      ? updateSubCategory(
          {
            name: name,
            category: categoryId,
          },
          sCid
        )
          .then(({ data }) => {
            if (data && data.success) {
              notification.success({ message: data.message });
              Router.push('/admin/subcategory');
            } else {
              notification.error({
                message: data.message,
              });
            }
          })
          .catch((err) =>
            notification.error({ message: 'Something went wrong' })
          )
      : createSubcategory({
          name: name,
          category: categoryId,
        })
          .then(({ data }) => {
            if (data && data.success) {
              setName('');

              notification.success({ message: data.message });
            } else {
              notification.error({
                message: data.message,
              });
            }
          })
          .catch((err) => {
            notification.error({ message: 'Something went wrong' });
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
      {sCid ? <h3>Edit SubCategory</h3> : <h3>Create a new SubCategory</h3>}
      {categories.length > 1 ? (
        <div>
          <div>
            <span>Select Category :</span>
            <Select
              placeholder="Select Category"
              style={{ width: '100%' }}
              onChange={handleCatChange}
              value={categoryId}
              bordered
            >
              {categories.map((cate, index) => (
                <Option key={index} value={cate._id} name={cate.name}>
                  {cate.name}
                </Option>
              ))}
            </Select>
          </div>

          <Input
            addonBefore={'Enter Sub-Category Name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex Bra, lingerie"
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
