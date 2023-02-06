import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        
        
       <h1>{link.description}</h1> 
        
        <p>{link.url}</p>
        <p>{link.createdAt}</p>
      </div>
    </div>
  );
};

export default Link;