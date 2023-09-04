import React from 'react';
import spinner from '/spinner.gif';

export const Loading = () =>{
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '100px', margin:"400px 800px"  }}
        alt="Loading..."
      />
    </div>
  );
};
