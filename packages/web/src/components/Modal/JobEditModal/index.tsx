import { Button, Form, Input, Modal, Space } from 'antd';
import React, { useEffect } from 'react';
import { useComponentState as useModalState } from './state';
import styles from './index.less';
import { useComponentState as useProjectState } from '@/events/project/state';
export default () => {
  const modalHook = useModalState();
  const { visible } = modalHook.get();
  const [form] = Form.useForm();
  const projectHook = useProjectState();

  if (!visible) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      okText={'创建'}
      cancelText={'取消'}
      onCancel={() => {
        modalHook.set({ visible: false });
      }}
      onOk={async () => {
        const data = await form.getFieldsValue();
        const more = data.ext;
        delete data.ext;

        more &&
          more.forEach((target) => {
            data[target.key] = target.value;
          });
        projectHook.createProject(data);
      }}>
      <div className={styles.container}>
        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left">
          <Form.Item label="项目名:" name="名字">
            <Input placeholder="给项目取个名字吧" style={{ width: '248px' }} />
          </Form.Item>
          <Form.Item label="项目介绍:" name="介绍">
            <Input placeholder="给项目取个名字吧" style={{ width: '248px' }} />
          </Form.Item>
          <Form.List name="ext">
            {(fields, { add, remove }, { errors }) => {
              return (
                <>
                  {fields.map(({ key, name }, index) => {
                    return (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0px 24px' }}>
                        <Form.Item name={[name, 'key']} wrapperCol={{ span: 24 }}>
                          <Input placeholder="自定义Key" style={{ width: '100%', flex: 1 }} />
                        </Form.Item>
                        <div style={{ marginBottom: '24px' }}>:</div>
                        <Form.Item name={[name, 'value']} wrapperCol={{ span: 24 }}>
                          <Input placeholder="自定义Value" />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            onClick={() => {
                              remove(name);
                            }}>
                            -
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  })}

                  <div className="center">
                    <Button
                      onClick={() => {
                        add();
                      }}>
                      +
                    </Button>
                  </div>
                </>
              );
            }}
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};
