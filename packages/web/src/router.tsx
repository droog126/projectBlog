import React, { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';


const Home = lazy(() => import('./pages/home/index'));
const Project = lazy(() => import('./pages/home/index'));

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
  }
]

export default ({ loading = false, children }) => {
  if (loading) {
    return <Spin size='large'></Spin>
  }
  return (
    <>
      {children}
      <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, Component, name }) => {
              return < Route path={path} element={< Component />} key={name} />
            })}
            <Route path="/*" element={<div>hello</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>

  )
}
