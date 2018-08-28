import React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/App';

ReactDOM.render(<Hello compiler={'thing'} framework={'thing2'} />, document.getElementById('root'));
