/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from 'src/Wrapper';
const config = {
  word: 'world',
};

ReactDOM.render(<Wrapper
  {...config}
/>, document.getElementById('app'));
