import React, { useState, useEffect } from 'react';

import generate from '../dreams';

export default () => {
  const [dream, setDream] = useState(generate());
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 'auto',
          maxWidth: '900px',
          fontAlign: 'center',
        }}
      >
        <h1>Omens from Dreams </h1>
        <span style={{ padding: '1em', textAlign: 'center', lineHeight: '1.5em' }}>
          {dream.result}
        </span>
        <br />
        <button onClick={() => setDream(generate())}>Sleep Again</button>
      </div>
    </div>
  );
};
