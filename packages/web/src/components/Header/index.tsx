import React, { useRef } from "react";
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select, Space } from "antd";
import { Level, Switch } from "@icon-park/react";
import { useNavigate } from "react-router-dom";
import { useComponentState as useGlobalState } from '@/globalState';

const { Option } = Select;
export default () => {
  const globalHook = useGlobalState();
  const { curType } = globalHook.get();
  const navigate = useNavigate();
  const headerDom = useRef(null);

  const projectMenu = (
    <Menu>
      <Menu.Item>
        设置首页
      </Menu.Item>
      <Menu.Item>
        创建项目
      </Menu.Item>
      <Menu.Item>
        删除项目
      </Menu.Item>
      <Menu.Item>
        登出
      </Menu.Item>
    </Menu>
  )

  const mockData = {
    author: {
      name: '宁涛'
    }
  }

  return <div className={styles.headerContainer}>
    <div className={styles.left}>
      <span className={styles.log}>
        {curType == 'blog' ? '博客' : '项目'}
      </span>
      <Switch
        className={styles.switchIcon}
        onClick={() => {
          if (curType == 'blog') {
            globalHook.set({ curType: 'project' })
            navigate('/project');
          }
          if (curType == 'project') {
            globalHook.set({ curType: 'blog' })
            navigate('/blog');
          }
        }} theme="two-tone" size="24" fill={['#ce5151', '#2F88FF']} strokeLinejoin="bevel" strokeLinecap="butt" />
    </div>
    <div className={styles.mid}>

    </div>
    <div className={[styles.right, 'alignCenter'].join(' ')}>
      {curType == 'blog' ? <div>
        <span>当前博客</span>
        <Select defaultValue="最后一国" bordered={false} suffixIcon={null}>
          <Option value="最后一国">最后一国</Option>
          <Option value="项目博客">项目博客</Option>
        </Select>
      </div> : <div>

        <span>当前项目：</span>
        <Select defaultValue="最后一国" bordered={false} suffixIcon={null}>
          <Option value="最后一国">最后一国</Option>
          <Option value="项目博客">项目博客</Option>
        </Select>
      </div>}


      <div className={styles.header} ref={headerDom}>
        <Dropdown trigger={['click']} overlay={projectMenu} getPopupContainer={() => {
          return headerDom.current;
        }}>
          <div className="alignCenter">
            <Level style={{ marginRight: '8px' }} theme="filled" size="24" fill="#b8e986" strokeLinejoin="bevel" strokeLinecap="butt" />
            <img src={DefaultImg.header} alt="" />
            <span style={{ marginLeft: '8px' }}>
              {mockData.author.name}
            </span>
          </div>
        </Dropdown>
      </div>
    </div>
  </ div>;
}
