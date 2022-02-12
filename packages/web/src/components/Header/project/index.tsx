import React, { useEffect, useRef } from 'react';
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select } from 'antd';
import { Level, Switch } from '@icon-park/react';
import { useComponentState as useGlobalState } from '@/globalState';
import { UserLogout } from '@/events/user';
const { Option } = Select;
import ProjectCreateModal from '@/components/Modal/ProjectCreateModal';
import { useComponentState as useProjectModalState } from '@/components/Modal/ProjectCreateModal/state';
import { useComponentState as useProjectState } from '@/events/project/state';
import { UserSetFirst } from '@/events/user';
import { getSearch } from '@/utils/url';
export default () => {
  const globalHook = useGlobalState();
  const { userInfo, curName } = globalHook.get();

  const projectHook = useProjectState();
  const { projectList, project } = projectHook.get();

  const headerDom = useRef(null);
  const projectModalHook = useProjectModalState();

  useEffect(() => {
    projectHook.getProjectList({ key: curName });
  }, []);
  const CurMenu = (
    <Menu>
      {curName === userInfo.name && (
        <Menu.Item
          onClick={() => {
            const { key } = getSearch();
            UserSetFirst({ key });
          }}>
          设置首页
        </Menu.Item>
      )}
      <Menu.Item
        onClick={() => {
          projectModalHook.set({ visible: true });
        }}>
        创建项目
      </Menu.Item>
      <Menu.Item>删除项目</Menu.Item>
      <Menu.Item onClick={UserLogout}>登出</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <span className={styles.log}>项目</span>
        <Switch
          className={styles.switchIcon}
          onClick={() => {
            globalHook.set({ curType: 'blog' });
            globalHook.goTo('/blog');
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
          <Select
            style={{ width: 90 }}
            value={project.key}
            bordered={false}
            suffixIcon={null}
            onChange={(val) => {
              globalHook.goTo('/project', { key: val });
            }}>
            {projectList.map((item) => {
              return (
                <Option value={item.key} key={item.key}>
                  {item.name}
                </Option>
              );
            })}
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
      <ProjectCreateModal />
    </div>
  );
};
