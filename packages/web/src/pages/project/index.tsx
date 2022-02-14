import React, { useEffect, useState } from 'react';
import { useComponentState as useRequestState } from '@/requestState';
import { useComponentState as useGlobalState } from '@/globalState';
import { getSearch } from '@/utils/url';
import styles from './index.less';
import moment from 'moment';
import { Button, message, Spin } from 'antd';
import { ProjectGet } from '@/events/project';
import { useComponentState as useProjectState } from '@/events/project/state';
import { useComponentState as useProjectCreateModalState } from '@/components/Modal/ProjectCreateModal/state';
import { Add, EditTwo } from '@icon-park/react';
import JobCreateModal from '@/components/Modal/JobCreateModal';
import { useComponentState as useJobCreateModalState } from '@/components/Modal/JobCreateModal/state';

export default () => {
  const projectCreateModalHook = useProjectCreateModalState();

  const globalHook = useGlobalState();
  const globalState = globalHook.get();
  const { userInfo, routePath } = globalState;
  const { firstKey } = userInfo;

  const projectHook = useProjectState();
  const projectState = projectHook.get();
  const { project, loading } = projectState;
  const { key = userInfo.projects[0] || firstKey || '' } = getSearch();

  const JobCreateModalHook = useJobCreateModalState();
  useEffect(() => {
    if (key.includes('project')) {
      globalHook.goTo('/project', { key });
    } else {
      message.error('没有指定项目');
    }
  }, []);

  useEffect(() => {
    ProjectGet({ projectKey: key });
    return projectHook.clear();
  }, [routePath]);

  if (process.env.DEV) {
    useEffect(() => {
      // console.log('项目数据中心', projectState);
    }, [projectState]);
  }

  const mockData = {
    productName: '最后一国',
    productDescription:
      '多人 PvP 游戏，您可以创建一个国家，并管理一个国家去招募自己的臣民，挑起战争或者别的手段完成大一统的结局。for King for freedom!!',
    publishDay: Date.now(),
    author: '宁涛',
    projectGoal: '模拟中世纪王国与王国之间的角色扮演的别具一格独立游戏。',
    todo: [
      { status: 1, text: '创建文件夹' },
      { status: 0, text: '创建两个文件夹' }
    ],
    technologyIntroduction: 'bevy0.6',
    platforms: ['windows'],

    dayTotal: 30,
    page: 1,
    pageSize: 20,
    data: [
      { index: 2, title: '第二天', createTime: Date.now(), content: '创建了文件夹' },
      { index: 1, title: '第1天', createTime: Date.now(), content: '创建了文件夹' }
    ]
  };

  if (!key) {
    return (
      <div className="center">
        <div>你还没有项目,先创建一个吧</div>

        <Button
          type="link"
          onClick={() => {
            projectCreateModalHook.set({ visible: true });
          }}>
          创建博客
        </Button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="center">
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>{project['名字']}</div>
        <div className={styles.productContainer}>
          <div className={styles.title}>项目介绍:</div>
          <div>{project['介绍']}</div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>发布日期:</div>
          {moment(project['time']).format('YYYY/MM/DD')}
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>作者:</div>
          <div>{project['author']}</div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>平台:</div>
          <div>
            {mockData.platforms.map((item) => {
              return <span>{item}..</span>;
            })}
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>项目目标:</div>
          <div>{mockData.projectGoal}</div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>土豆:</div>
          <div>
            {mockData.todo.map((item) => {
              return (
                <div className="thinFont" style={{ marginBottom: '8px' }}>
                  <span>{item.status ? `[0] ` : `[x] `}</span>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>技术说明 :</div>
          <div>{mockData.technologyIntroduction}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.dayLogTitle} style={{ display: 'flex', alignItems: 'center', gap: '0 12px' }}>
          开发日志
          <Add
            onClick={() => {
              JobCreateModalHook.set({ visible: true });
            }}
            theme="two-tone"
            size="36"
            fill={['#333', '#ce5151']}
            style={{ cursor: 'pointer', paddingTop: '6px' }}
          />
        </div>
        {mockData.data.map((item) => {
          return (
            <div className={styles.dayLogContainer}>
              <div className={styles.title} style={{ display: 'flex', alignItems: 'center', gap: '0 12px' }}>
                {item.title}
                <EditTwo style={{ cursor: 'pointer', paddingTop: '4px' }} theme="two-tone" size="24" fill={['#333', '#ce5151']} />
              </div>
              <div>{item.content}</div>
            </div>
          );
        })}
      </div>
      <JobCreateModal />
    </div>
  );
};
