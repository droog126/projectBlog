import { Form, Input, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { useComponentState as useModalState } from './state';
export default () => {
  const modalHook = useModalState();
  const { visible } = modalHook.get();
  if (!visible) {
    return null;
  }
  const [form] = useForm();
  return (
    <Modal
      visible={visible}
      okText={'创建'}
      cancelText={'取消'}
      onCancel={() => {
        modalHook.set({ visible: false });
      }}>
      <Form form={form}>
        <Form.Item label="项目名:" name="name">
          <Input placeholder="给项目取个名字吧"></Input>
        </Form.Item>
        <Form.Item label="项目介绍:" name="name">
          <Input placeholder="给项目取个名字吧"></Input>
        </Form.Item>
        <Form.Item label="项目名:" name="name">
          <Input placeholder="给项目取个名字吧"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
