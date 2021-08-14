import React from 'react';

const Posts = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="row ">
      {data.map(data => (
        <div className="card m-3 w-25">

          <div key={data.id} className="card-body">
            <img src={data.avatar} className="mx-auto d-block img-thumbnail mb-3" ></img>
            <p className="card-text text-center fst-italic"><b>Name:  </b>{data.first_name}  {data.last_name}</p>
            <p className="blockqoute text-center fst-italic"><b>Eamil:  </b>{data.email}</p>
          </div>
        </div >

      ))}
    </div>

  );
};


export default Posts;