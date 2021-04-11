import React from 'react';
import { Modal, Button, Space } from 'antd';

export default function ModalMessage(props) {
  const { isModalVisible, setIsModalVisible } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      closable
      centered
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
