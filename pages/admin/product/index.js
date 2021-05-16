import React, { useEffect, useState } from 'react';
import {
  Collapse,
  notification,
  message,
  Divider,
  Popconfirm,
  Tag,
} from 'antd';
import Router from 'next/router';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import { getAllProducts, deleteProduct } from '../../../services/apis/admin.js';

const { Panel } = Collapse;

export default function ManageCategory(props) {
  const [products, setProducts] = useState([]);

  const handleGetAllProducts = () =>
    getAllProducts().then(({ data }) => data.success && setProducts(data.data));

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  const handleDeleteProduct = (id) => {
    deleteProduct(id).then(({ data }) => {
      if (data.success) {
        handleGetAllProducts();
        notification.success({ message: data.message });
      } else notification.success({ message: data.message });
    });
  };

  return (
    <AdminLayout>
      <h3>Manage Products</h3>
      <Collapse expandIconPosition="right">
        {products &&
          products.length > 0 &&
          products.map((prod, i) => (
            <Panel
              showArrow={false}
              header={`${prod.name.length > 0 ? prod.name : prod._id}  
              ||        ${prod.category.name}  ${
                prod.hidden ? '( Hidden )' : ''
              }`}
              key={i}
              extra={
                <>
                  <Popconfirm
                    placement="topLeft"
                    title="Are you sure to edit this product ?"
                    onConfirm={() =>
                      Router.push({
                        pathname: '/admin/product/create',
                        query: { pid: prod._id },
                      })
                    }
                    okText="Edit Product"
                    cancelText="No"
                  >
                    <EditOutlined />
                  </Popconfirm>
                  <Popconfirm
                    placement="left"
                    title="Are you sure to delete this product ?"
                    onConfirm={() => handleDeleteProduct(prod._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined className="px-4" />
                  </Popconfirm>
                </>
              }
            >
              <div className="px-4">Id : #{prod._id}</div>
              <div className="px-4">Name : {prod.name}</div>
              <div className="px-4">Category Name : {prod.category.name}</div>
              <Divider>Images</Divider>

              <div className="px-4">
                {prod.images.length > 0 ? (
                  prod.images.map((im) => (
                    <img
                      src={im.data}
                      className="mx-3"
                      alt={im._id}
                      width={80}
                      height={100}
                    />
                  ))
                ) : (
                  <div>No Image</div>
                )}
              </div>
              <Divider>Sub Categories</Divider>

              <div className="px-4">
                {prod.subCategories.length > 0 ? (
                  prod.subCategories.map((s) => <Tag>{s.name}</Tag>)
                ) : (
                  <div>No Subcategories</div>
                )}
              </div>
            </Panel>
          ))}
      </Collapse>
    </AdminLayout>
  );
}
