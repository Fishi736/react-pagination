import React, { useState, useEffect } from 'react';
import Posts from './components/Post';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [data, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [per_page] = useState(6);



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=${page}');
      setPosts(res.data);
      setPostsData(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  console.log(data)


  // // Change page
  const paginate = pageNumber => setpage(pageNumber);

  return (
 
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
          <Posts data={data} loading={loading} />
      <Pagination
        per_page={per_page}
        totalPosts={posts.total}
        paginate={paginate}
      />
    </div>
  );
};

export default App;