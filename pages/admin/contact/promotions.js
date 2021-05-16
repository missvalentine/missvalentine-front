import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Table, notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import {
  getAllPromotions,
  deleteContact,
} from '../../../services/apis/contact';

const { Panel } = Collapse;

export default function Enquiry() {
  const [queries, setQueries] = useState({});

  useEffect(() => {
    getAllPromotions().then((res) => res && res.data && setQueries(res.data));
  }, []);

  const handleDeleteContact = (id) => {
    deleteContact(id)
      .then(({ data }) => {
        if (data && data.success) {
          notification.success({ message: data.message });
          getAllPromotions().then(
            (res) => res && res.data && setQueries(res.data)
          );
        } else notification.error({ message: data.message });
      })
      .catch((err) => notification.error({ message: 'something went wrong' }));
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date/Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => (
        <span>
          {new Date(createdAt).toLocaleString(undefined, {
            timeZone: 'Asia/Kolkata',
          })}
        </span>
      ),
    },
    {
      title: 'Remove from List',
      dataIndex: '_id',
      key: '_id',
      render: (id) => (
        <span onClick={() => handleDeleteContact(id)}>Remove</span>
      ),
    },
  ];

  return (
    <AdminLayout>
      <h3>Promotional Request Dashboard ({queries.count})</h3>
      <h4>
        these emails are from the user who want to get notified by email
        whenever new sale/promotions.{' '}
      </h4>
      <Table dataSource={queries.data} columns={columns} />;
    </AdminLayout>
  );
}
