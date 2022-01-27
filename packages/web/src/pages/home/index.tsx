import React, { useEffect, useState } from 'react'
import useGlobalHook from '@/requestState';
import styles from './index.less';
import { wrap } from 'module';
import prouduct from '@/events/user/get/prouduct';
import moment from 'moment';

export default () => {
  const globalHook = useGlobalHook();
  useEffect(() => {
    globalHook.give({ path: '/user/get/product' })
  }, []);
  const mockData = {
    productName: '最后一国',
    productDescription: '多人 PvP 游戏，您可以创建一个国家，并管理一个国家去招募自己的臣民，挑起战争或者别的手段完成大一统的结局。for King for freedom!!',
    publishDay: Date.now(),
    author: '宁涛',
    projectGoal: '模拟中世纪王国与王国之间的角色扮演的别具一格独立游戏。',
    todo: [{ status: 1, text: '创建文件夹' }, { status: 0, text: '创建两个文件夹' }],
    technologyIntroduction: 'bevy0.6',
    platforms: ['windows'],

    dayTotal: 30,
    page: 1,
    pageSize: 20,
    data: [{ index: 2, title: '第二天', createTime: Date.now(), content: '创建了文件夹' }, { index: 1, title: '第1天', createTime: Date.now(), content: '创建了文件夹' }],
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          {mockData.productName}
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>项目介绍:</div>
          <div>{mockData.productDescription}</div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>发布日期:</div>
          {moment(mockData.publishDay).format('YYYY/MM/DD')}
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>作者:</div>
          <div>{mockData.author}</div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>平台:</div>
          <div>
            {mockData.platforms.map((item) => {
              return <span>{item}..</span>
            })}
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>项目目标:</div>
          <div>
            {mockData.projectGoal}
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>土豆:</div>
          <div>
            {mockData.todo.map(
              (item) => {
                return (
                  <div className='thinFont' style={{ marginBottom: '8px' }}>
                    <span>{item.status ? `[0] ` : `[x] `}</span>
                    <span>{item.text}</span>
                  </div>
                )
              }
            )}
          </div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.title}>技术说明 :</div>
          <div>
            {mockData.technologyIntroduction}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.dayLogTitle}>
          开发日志
        </div>
        {mockData.data.map((item) => {
          return <div className={styles.dayLogContainer}>
            <div className={styles.title}>
              {item.title}
            </div>
            <div>
              {item.content}
            </div>
          </div>
        })}

      </div>
    </div>
  )
}
