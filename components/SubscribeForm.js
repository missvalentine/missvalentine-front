import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const Button = dynamic(() => import('./form-components/Button'));
const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,15}/g);
import { Input } from 'antd';

const SubscribeForm = ({ email, onEmailChange, subscribeUser }) => {
  return (
    <div className="c-subscribe-from">
      <form
        onSubmit={(e) => {
          subscribeUser(e, email);
        }}
        className="c-subscribe-from__from"
      >
        <Input
          className="c-subscribe-from__input "
          type="email"
          value={email}
          placeholder="your e-mail"
          onChange={onEmailChange}
        />

        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};
export default SubscribeForm;
