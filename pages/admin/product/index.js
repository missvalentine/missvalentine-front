import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import { getAllProducts, deleteProduct } from '../../../services/apis/admin.js';

const { Panel } = Collapse;

export default function ManageCategory(props) {
  const [products, setProducts] = useState([]);

  // const { toast } = props;
  useEffect(() => {
    getAllProducts().then(
      (res) => res && res.data && setProducts(res.data.data)
    );
  }, []);
  const handleDeleteCategory = (id) => {
    deleteProduct(id).then();
  };

  return (
    <AdminLayout>
      <h3>Manage Products</h3>
      <Collapse expandIconPosition="right">
        {products.map((c, i) => (
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
