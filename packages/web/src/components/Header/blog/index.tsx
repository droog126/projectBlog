import React, { useEffect, useMemo, useRef } from 'react';
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select, Space } from 'antd';
import { Back, Level, Switch } from '@icon-park/react';
import { useComponentState as useGlobalState } from '@/globalState';
import { UserLogout, UserSetFirst } from '@/events/user';
const { Option } = Select;

export default () => {
  const globalHook = useGlobalState();
  const { curType, userInfo, curName } = globalHook.get();
  const headerDom = useRef(null);

  const CurMenu = (
    <Menu>
      {curName === userInfo.name && (
        <Menu.Item
          onClick={() => {
            UserSetFirst({ key: '/blog' });
          }}>
          设置首页
        </Menu.Item>
      )}
      <Menu.Item
        onClick={() => {
          globalHook.goTo('/article/create');
        }}>
        发布文章
      </Menu.Item>
      <Menu.Item onClick={UserLogout}>登出</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <span className={styles.log}>博客</span>
        <Switch
          className={styles.switchIcon}
          onClick={() => {
            globalHook.set({ curType: 'project' });
            globalHook.goTo('/project');
          }}
          theme="two-tone"
          size="24"
          fill={['#ce5151', '#2F88FF']}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
      </div>
      <div className={styles.mid} />
      <div className={[styles.right, 'alignCenter'].join(' ')}>
        <div className={styles.header} ref={headerDom}>
          <Dropdown
            trigger={['click']}
            overlay={CurMenu}
            getPopupContainer={() => {
              return headerDom.current;
            }}>
            <div className="alignCenter">
              <Level style={{ marginRight: '8px' }} theme="filled" size="24" fill="#b8e986" strokeLinejoin="bevel" strokeLinecap="butt" />
              <img src={DefaultImg.header} alt="" />
              <span style={{ marginLeft: '8px' }}>{userInfo.name}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
