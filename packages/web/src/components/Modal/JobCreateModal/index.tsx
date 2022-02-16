import { Button, Form, Input, Modal, Space } from 'antd';
import React, { useEffect } from 'react';
import { useComponentState as useModalState } from './state';
import styles from './index.less';
const { TextArea } = Input;

export default ({}) => {
  const modalHook = useModalState();
  const { visible } = modalHook.get();
  const [form] = Form.useForm();

  if (!visible) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      okText={'创建'}
      cancelText={'取消'}
      onCancel={() => {
        modalHook.cancel();
      }}
      onOk={async () => {
        const data = await form.getFieldsValue();
        modalHook.ok(data);
      }}>
      <div className={styles.container}>
        <Form form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} labelAlign="left">
          <Form.Item label="项目进度:" name="content">
            <TextArea placeholder="记录下项目的进度吧" autoSize={{ minRows: 3, maxRows: 20 }} />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
