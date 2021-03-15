import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import {
  getAllSubcategories,
  deleteSubcategory,
} from '../../../services/apis/admin.js';

const { Panel } = Collapse;

export default function ManageCategory() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    getAllSubcategories().then(
      (res) => res && res.data && setSubcategories(res.data.data)
    );
  }, []);
  const handleDeleteCategory = (id) => {
    deleteSubcategory(id).then();
  };

  return (
    <AdminLayout>
      <h3>Manage Sub-Category</h3>
      <Collapse expandIconPosition="right">
        {subcategories.map((c, i) => (
          <Panel
            showArrow={false}
            header={c.name}
            key={i}
            extra={
              <DeleteOutlined onClick={() => handleDeleteCategory(c._id)} />
            }
          >
            <p>{'text'}</p>
          </Panel>
        ))}
      </Collapse>
    </AdminLayout>
  );
}
