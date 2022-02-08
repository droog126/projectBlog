import React, { useEffect, useMemo, useRef } from 'react';
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select, Space } from 'antd';
import { Back, Level, Switch } from '@icon-park/react';
import { useNavigate } from 'react-router-dom';
import { useComponentState as useGlobalState } from '@/globalState';
import { UserLogout } from '@/events/user';
const { Option } = Select;

export default () => {
  const globalHook = useGlobalState();
  const { curType, userInfo } = globalHook.get();
  const navigate = useNavigate();
  const headerDom = useRef(null);

  const CurMenu = (
    <Menu>
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
        <div>
          <span>当前项目：</span>
          <Select defaultValue="最后一国" bordered={false} suffixIcon={null}>
            <Option value="最后一国">最后一国</Option>
            <Option value="项目博客">项目博客</Option>
          </Select>
        </div>

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
