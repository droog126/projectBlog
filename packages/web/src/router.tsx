import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Header from '@/components/Header';

const Home = lazy(() => import('./pages/home/index'));
const Project = lazy(() => import('./pages/home/index'));
const Blog = lazy(() => import('./pages/blog/index'));
const Article = lazy(() => import('./pages/blog/article'));
const ArticleCreate = lazy(() => import('./pages/blog/article/create'));
const ArticleEdit = lazy(() => import('./pages/blog/article/edit'));

export const routes = [
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

export default ({ loading = false, children }) => {
  if (loading) {
    return <Spin size="large" />;
  }
  return (
    <>
      {children}
      <Suspense fallback={<span>loading...</span>}>
        <BrowserRouter>
          <Header />
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
