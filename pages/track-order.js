import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layouts/Layout'), {
  ssr: false,
});
const Heading = dynamic(() => import('../components/Heading'), {
  ssr: false,
});
import { Input,Form } from 'antd';
import { trackOrder } from '../services/apis/order';
import { useState } from 'react';
import Button from '../components/form-components/Button';
const trackOrders = () => {
  const [trackerid, setTrackerId] = useState('');
  const onSubmit = async () => {
    const data = await trackOrder({ trackerid: trackerid });
    window.open(data.data.data.public_url, '_blank');
  };
  return (
    <Layout headerVersion={['bg--light']} headerTheme="dark">
      <div className="track-order">
          <Form onSubmit = {onSubmit}>
          <div className="track-order__main track-order__main--center">
          <Heading
            versions={['large', 'upper']}
            parentClass="c-privacy"
            className="header"
          >
            Track your order
          </Heading>
          <div className="track-order__id mt-5 mb-4">
            <Input
              className="ant-input c-input__input"
              placeholder="Enter your tracking id"
              required = {true}
              onChange={(e) => setTrackerId(e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'center' }}>
          <Button theme="dark" type="submit">
            Track
          </Button>
        </div>
          </Form>
          
      </div>
    </Layout>
  );
};
export default trackOrders;
