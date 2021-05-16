import React, { useEffect, useState } from 'react';
import { Collapse, Divider, notification, Empty } from 'antd';
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

  const handleDeleteContact = (id) => {
    deleteContact(id)
      .then(({ data }) => {
        if (data && data.success) {
          notification.success({ message: data.message });
          getAllQuery().then((res) => res && res.data && setQueries(res.data));
        } else notification.error({ message: data.message });
      })
      .catch((err) => notification.error({ message: 'something went wrong' }));
  };

  return (
    <AdminLayout>
      <h3>Contact Queries Dashboard ({queries.count})</h3>
      <h4>request from the contact/support form</h4>
      <Collapse expandIconPosition="right">
        {queries &&
          queries.data &&
          queries.data.reverse().map((c, i) => {
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
                  <DeleteOutlined onClick={() => handleDeleteContact(c._id)} />
                }
              >
                <div className="px-3 py-2">
                  <Divider orientation="left">Basic Details</Divider>

                  <div> Contact ID : #{c._id}</div>
                  <div>
                    Created At : {new Date(c.createdAt).toLocaleString()}
                  </div>
                  <Divider orientation="left">User Details</Divider>

                  <div> Name : {c.name}</div>
                  <div> Email : {c.email}</div>

                  <Divider orientation="left">Details</Divider>
                  <div> Subject : {c.subject}</div>
                  <div> Message : {c.text}</div>
                </div>
              </Panel>
            );
          })}
      </Collapse>

      {queries.count === 0 && <Empty />}
    </AdminLayout>
  );
}
