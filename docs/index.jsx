import React from 'react';
import ReactDom from 'react-dom';
import Label from '../src';
import '../src/index.scss';
import './styles/prism.scss';
import './index.scss';

import './styles/syntax.scss';
import './styles/codemirror.scss';
import './styles/demo.scss';

ReactDom.render(
    <div className='separator'>
      <Label literal={'Default Label'} class={'re-Label--opportunity'} />
    </div>,
  document.getElementById('main')
);
