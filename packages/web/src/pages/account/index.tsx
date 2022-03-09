import React, { useEffect } from 'react';
import styles from './index.less';
import { Button, Form, Input } from 'antd';
import { UserCreate, UserLogin } from '@/events/user';
import { useComponentState as useGlobalState } from '@/globalState';
export default () => {
  const [form] = Form.useForm();
  const globalHook = useGlobalState();
  const { userInfo } = globalHook.get();

  useEffect(() => {
    if (Object.keys(userInfo).length) {
      globalHook.goTo('/home');
    }
  }, [userInfo]);
  return (
    <div className={styles.container}>
      <div className={styles.accountForm}>
        <div className={styles.title}>抱歉，这个就是要登入才能进去.</div>

        <Form form={form}>
          <Form.Item
            label="名字"
            name="name"
            rules={[
              { required: true, message: '名字都不填？' },
              { max: 10, message: '名字要取那么长吗？' }
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="psw"
            rules={[
              { required: true, message: '密码也不填？' },
              { min: 6, message: '你密码这么短吗？' },
              { max: 20, message: '你输密码不累吗？' }
            ]}>
            <Input />
          </Form.Item>
        </Form>
        <div className={styles.actionContainer}>
          <Button
            onClick={async () => {
              try {
                const formData = await form.validateFields();
                UserLogin(formData);
              } catch (e) {
                console.log('看一下校验', e);
              }
            }}>
            登入
          </Button>
          <Button
            onClick={async () => {
              try {
                const formData = await form.validateFields();
                UserCreate(formData);
              } catch (e) {
                console.log('看一下校验', e);
              }
            }}>
            创建
          </Button>
        </div>
      </div>
    </div>
  );
};
