import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/Layouts/Layout'), {
  ssr: false,
});
const Heading = dynamic(() => import('../components/Heading'), {
  ssr: false,
});

import { Select } from 'antd';

const { Option } = Select;

export default function ECatalogue({ category }) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Layout headerVersions={['bg-dark']} headerTheme="black">
      <div>
        <Heading versions={['shop-all']}>
          {parse('DISCOVER THE WHOLE RANGE')}
        </Heading>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </Layout>
  );
}

ECatalogue.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};
