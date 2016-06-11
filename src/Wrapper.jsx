'use strict';

import React from 'react';

const Wrapper = (props) => <div>
  Hello {props.word}
</div>;

Wrapper.propTypes = {
  word: React.PropTypes.string.isRequired,
};

export default Wrapper;
