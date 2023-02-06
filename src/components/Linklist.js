import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const LinkList = () => {
   
  const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`   
const { data } = useQuery(FEED_QUERY);

  return (
    <>
    {data &&
    <div>
      {data.feed.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
        
         }
            </>
  );
};

export default LinkList;