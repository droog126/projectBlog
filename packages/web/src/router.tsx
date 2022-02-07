import React, { lazy, useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Header from '@/components/Header';
import { useComponentState as useGlobalSatte } from '@/globalState';
import { UserAutoLogin } from '@/events/user';
import Spa from '@/pages/spa';
const Home = lazy(() => import('./pages/home/index'));
const Project = lazy(() => import('./pages/home/index'));
const Blog = lazy(() => import('./pages/blog/index'));
const Article = lazy(() => import('./pages/blog/article'));
const ArticleCreate = lazy(() => import('./pages/blog/article/create'));
const ArticleEdit = lazy(() => import('./pages/blog/article/edit'));
const Account = lazy(() => import('./pages/account/index'));

export const routes = [
  {
    path: '/',
    Component: Home,
    name: '首页'
  },
  {
    path: '/home',
    Component: Home,
    name: '首页'
  },
  {
    path: '/project',
    Component: Project,
    name: '项目'
  },
  {
    path: '/blog/article',
    Component: Article,
    name: '文章'
  },
  {
    path: '/blog',
    Component: Blog,
    name: '博客'
  },
  {
    path: '/account',
    Component: Account,
    name: '用户'
  },
  {
    path: '/article/create',
    Component: ArticleCreate,
    name: '创建文章'
  },
  {
    path: '/article/edit',
    Component: ArticleEdit,
    name: '编辑文章'
  }
];

export default ({ loading = false }) => {
  const globalHook = useGlobalSatte();

  const { token } = globalHook.get();

  useEffect(() => {
    if (!token && location.pathname != '/account') {
      globalHook.goTo('/account');
    }

    // 尝试自动登入
    const localToken = localStorage.getItem('token') || 0;
    if (localToken) {
      UserAutoLogin(localToken);
    }
  }, []);

  return (
    <>
      <Suspense fallback={<Spin size="large" />}>
        <BrowserRouter>
          <Spa />
          {token && <Header />}
          <Routes>
            {routes.map(({ path, Component, name }) => {
              return <Route path={path} element={<Component />} key={name} />;
            })}
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
