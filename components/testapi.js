'use client'
import { fetcher, getStrapiURL } from '@/lib/api';
import { useState, useEffect } from 'react';
 

export function Profile() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetcher('/about-us').then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
 
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error while loading, Please refresh</p>;
 
  console.log(data)
  
  return (
    <div>
        {data.map((post)=>{
            return <div key={post.id}>
                {post.attributes.code}
            </div>
        })}
    </div>
  );
}