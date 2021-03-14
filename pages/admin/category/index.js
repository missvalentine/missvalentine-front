import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import AdminLayout from '../../../components/admin/AdminLayout';
import '../../../components/styles/app.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/products';

const { Panel } = Collapse;

export default function ManageCategory() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  function callback(key) {
    // console.log(key, products);
  }

  useEffect(() => {
    dispatch(getCategories());
    console.log(products);
  }, []);
  return (
    <AdminLayout>
      <h3>Manage Category</h3>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        {/* {products.catego} */}
        {products.categories.map((c, i) => (
          <Panel header={c.name} key={i}>
            <p>{'text'}</p>
          </Panel>
        ))}
      </Collapse>
    </AdminLayout>
  );
}
