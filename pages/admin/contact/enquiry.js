import React, { useEffect, useState } from 'react';
import { Collapse, Divider, notification, Empty } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import { getAllEnquiry, deleteContact } from '../../../services/apis/contact';

const { Panel } = Collapse;

export default function Enquiry() {
  const [queries, setQueries] = useState({});

  useEffect(() => {
    getAllEnquiry().then((res) => res && res.data && setQueries(res.data));
  }, []);
  const handleDeleteContact = (id) => {
    deleteContact(id)
      .then(({ data }) => {
        if (data && data.success) {
          notification.success({ message: data.message });
          getAllEnquiry().then(
            (res) => res && res.data && setQueries(res.data)
          );
        } else notification.error({ message: data.message });
      })
      .catch((err) => notification.error({ message: 'something went wrong' }));
  };

  return (
    <AdminLayout>
      <h3>Catalogue Request Dashboard ({queries.count})</h3>
      <h4>request from the e-catalogue form</h4>
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
                header={`${istDate}       ||     ${c.name}`}
                key={i}
                extra={
                  <DeleteOutlined onClick={() => handleDeleteContact(c._id)} />
                }
              >
                <div className="px-3 py-2">
                  <Divider orientation="left">Basic Details</Divider>
                  <div> Enquiry ID : #{c._id}</div>
                  <div>
                    Created At : {new Date(c.createdAt).toLocaleString()}
                  </div>
                  <Divider orientation="left">User Details</Divider>
                  <div> Name : {c.name || 'Not provided by user'}</div>
                  <div> Phone : {c.phone || 'Not provided by user'}</div>
                  <Divider orientation="left">Store Details</Divider>

                  <div>
                    Store Name : {c.storeName || 'Not provided by user'}
                  </div>
                  <div> Address : {c.address || 'Not provided by user'}</div>
                  <div> City : {c.city || 'Not provided by user'}</div>
                  <div> state : {c.state || 'Not provided by user'}</div>

                  <Divider orientation="left">Products</Divider>
                  {c.products.map((prod) => (
                    <div>{prod.name}</div>
                  ))}
                </div>
              </Panel>
            );
          })}
      </Collapse>
      {queries.count === 0 && <Empty />}
    </AdminLayout>
  );
}
