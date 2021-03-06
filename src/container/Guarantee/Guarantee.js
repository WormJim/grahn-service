import React, { useState, useEffect } from 'react';

import Guarantee from '../../components/Guarantee/Guarantee';

import { fetchFromDB } from '../../utils/fetch';

export default ({ onClose }) => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    fetchFromDB('guarantee', setBody);
  }, []);

  return <>{body ? <Guarantee onClose={onClose} body={body.Body} /> : body}</>;
};
