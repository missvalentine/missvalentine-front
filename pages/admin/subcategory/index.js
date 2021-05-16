import React, { useEffect, useState } from 'react';
import { Collapse, Popconfirm, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Router from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import {
  getAllSubcategories,
  deleteSubcategory,
} from '../../../services/apis/admin.js';

const { Panel } = Collapse;

export default function ManageCategory() {
  const [subcategories, setSubcategories] = useState([]);

  const handleGetAllSubCategories = () =>
    getAllSubcategories().then(
      ({ data }) => data && setSubcategories(data.data)
    );

  useEffect(() => {
    handleGetAllSubCategories();
  }, []);

  const handleDeleteSubCategory = (id) => {
    deleteSubcategory(id)
      .then(({ data }) => {
        console.log('data', data);
        if (data && data.success) {
          console.log('success', data);

          notification.success({ message: data.message });
          handleGetAllSubCategories();
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
      <h3>Manage Sub-Category</h3>
      <Collapse expandIconPosition="right">
        {subcategories &&
          subcategories.map((sc, i) => (
            <Panel
              showArrow={false}
              header={sc.name}
              key={i}
              extra={
                <>
                  <EditOutlined
                    onClick={() =>
                      Router.push({
                        pathname: '/admin/subcategory/create',
                        query: { sCid: sc._id },
                      })
                    }
                  />
                  <Popconfirm
                    placement="left"
                    title="Are you sure to delete this sub-category ?"
                    onConfirm={() => handleDeleteSubCategory(sc._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </>
              }
            >
              <h3>Category Name : {sc.category.name}</h3>
              <br />
              <h2>Products Name:</h2>
              {sc.products.length > 0 ? (
                sc.products.map((p) => <div>{p.name}</div>)
              ) : (
                <div>No product in this subcategory</div>
              )}
            </Panel>
          ))}
      </Collapse>
    </AdminLayout>
  );
}
