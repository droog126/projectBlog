import React from 'react';
import { render } from 'react-dom';

export const addModal = (Modal, id) => {
  removeModal(id);
  const containerDom = document.createElement('div');
  containerDom.id = id;
  document.body.append(containerDom);
  render(<Modal />, containerDom);
};
export const removeModal = (id) => {
  const childDom = document.getElementById(id);
  if (childDom) {
    childDom.remove();
  }
};
