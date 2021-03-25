import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
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

  useEffect(() => {
    getAllCategories().then(
      (res) => res && res.data && setCategories(res.data.data)
    );
  }, []);
  const handleDeleteCategory = (id) => {
    deleteCategory(id).then();
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
                <EditOutlined />
                <DeleteOutlined onClick={() => handleDeleteCategory(c._id)} />
              </>
            }
          >
            <div>#{c._id}</div>
            <div>
              {c.subcategories.map((s, si) => (
                <span>{s.name}</span>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </AdminLayout>
  );
}
