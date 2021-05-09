import React, { useEffect, useState } from 'react';
import { Collapse, notification, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
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
  const handleDeleteCategory = (id) => {
    deleteProduct(id).then(({ data }) => {
      if (data.success) {
        notification.success({ message: data.message });
      } else notification.success({ message: data.message });
    });
    handleGetAllProducts();
  };

  return (
    <AdminLayout>
      <h3>Manage Products</h3>
      <Collapse expandIconPosition="right">
        {products &&
          products.length > 0 &&
          products.map((c, i) => (
            <Panel
              showArrow={false}
              header={`#${c._id} ${c.name}`}
              key={i}
              extra={
                <DeleteOutlined onClick={() => handleDeleteCategory(c._id)} />
              }
            >
              <p>{c.shortDesc}</p>
            </Panel>
          ))}
      </Collapse>
    </AdminLayout>
  );
}
