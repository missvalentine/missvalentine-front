import React, { useEffect, useState } from 'react';
import { Collapse, Popconfirm, notification, Divider, Tag } from 'antd';
import Router from 'next/router';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import {
  getAllCategories,
  deleteCategory,
} from '../../../services/apis/admin.js';

const { Panel } = Collapse;

export default function ManageCategory() {
  const [categories, setCategories] = useState([]);

  const handleGetAllCategories = () =>
    getAllCategories().then(
      (res) => res && res.data && setCategories(res.data.data)
    );
  useEffect(() => {
    handleGetAllCategories();
  }, []);

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
      .then(({ data }) => {
        if (data && data.success) {
          notification.success({ message: data.message });
          handleGetAllCategories();
        } else {
          notification.error({
            message: data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        notification.error({ message: 'Something went wrong' });
      });
  };

  return (
    <AdminLayout>
      <h3>Manage Category</h3>
      <Collapse expandIconPosition="right">
        {categories.map((c, i) => (
          <Panel
            showArrow={false}
            header={c.name}
            key={i}
            extra={
              <>
                <EditOutlined
                  onClick={() =>
                    Router.push({
                      pathname: '/admin/category/create',
                      query: { cid: c._id },
                    })
                  }
                />
                <Popconfirm
                  placement="left"
                  title="Are you sure to delete this category ?"
                  onConfirm={() => handleDeleteCategory(c._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined />
                </Popconfirm>
              </>
            }
          >
            <div>Id : #{c._id}</div>
            <Divider>Sub Categories</Divider>

            <div className="px-4">
              {c.subcategories.length > 0 ? (
                c.subcategories.map((s, si) => <Tag>{s.name}</Tag>)
              ) : (
                <div>No Subcategories</div>
              )}
            </div>
            <Divider>Products</Divider>

            <div className="px-4">
              {c.products.length > 0 ? (
                c.products.map((p, si) => <Tag>{p.name}</Tag>)
              ) : (
                <div>No Products</div>
              )}
            </div>
          </Panel>
        ))}
      </Collapse>
    </AdminLayout>
  );
}
