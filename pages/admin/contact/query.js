import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import { getAllQuery, deleteContact } from '../../../services/apis/contact';

const { Panel } = Collapse;

export default function CheckQuery() {
  const [queries, setQueries] = useState({});

  useEffect(() => {
    getAllQuery().then((res) => res && res.data && setQueries(res.data));
  }, []);
  const handleDeleteCategory = (id) => {
    deleteContact(id).then();
  };

  return (
    <AdminLayout>
      <h3>Check Queries ({queries.count})</h3>
      <Collapse expandIconPosition="right">
        {queries &&
          queries.data &&
          queries.data.map((c, i) => {
            let date = new Date(c.createdAt);
            let istDate = date.toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata',
            });
            return (
              <Panel
                showArrow={false}
                header={`${istDate}       ||     ${c.subject}`}
                key={i}
                extra={
                  <DeleteOutlined onClick={() => handleDeleteCategory(c._id)} />
                }
              >
                <div> ID : #{c._id}</div>
                <div> Name : {c.name}</div>
                <div> Email : {c.email}</div>
                <div> Created At : {c.createdAt}</div>
                <br />
                <div> Subject : {c.subject}</div>
                <div> Message : {c.text}</div>
              </Panel>
            );
          })}
      </Collapse>
    </AdminLayout>
  );
}
