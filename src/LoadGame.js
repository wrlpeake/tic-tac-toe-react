import React, { useEffect, useState } from 'react';

const LoadGame = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:4567/loadgame/XY')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data)
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <section data-testid="posts">
         {posts.map((post) => (
            <article key={post.id}>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
            </article>
         ))}
      </section>
   );
};
   
export { LoadGame };