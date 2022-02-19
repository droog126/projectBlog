import React, { useEffect, useMemo, useRef } from 'react';
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select, Space } from 'antd';
import { Back, Level, Switch } from '@icon-park/react';
import { useNavigate } from 'react-router-dom';
import { useComponentState as useGlobalState } from '@/globalState';
import { useComponentState as useArticleState } from '@/events/article/state';
import { UserLogout } from '@/events/user';
import modal from 'antd/lib/modal';
import { getSearch } from '@/utils/url';
const { Option } = Select;

export default () => {
  const globalHook = useGlobalState();
  const articleHook = useArticleState();
  const { curType, userInfo } = globalHook.get();
  const navigate = useNavigate();
  const headerDom = useRef(null);

  const CurMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          const { key } = getSearch();
          globalHook.goTo('/article/edit', { key: key });
        }}>
        编辑文章
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          modal.confirm({
            title: '确认删除此文章吗?',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            onOk: () => {
              articleHook.tryDeleteArticle({});
            }
          });
        }}>
        删除文章
      </Menu.Item>
      <Menu.Item onClick={UserLogout}>登出</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <span className={styles.log}>文章</span>
        <Back
          theme="two-tone"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            globalHook.set({ curType: 'blog' });
            globalHook.goTo('/blog');
          }}
          size="24"
          fill={['#3f3f31', '#ce5151']}
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
