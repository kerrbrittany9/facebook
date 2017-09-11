import React from 'react';
import Person from './Person';

function Profile(props) {
  return(
    <div>
      <Person
        image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/12/14/marty-feldman.jpg"
        name='Marty Feldman'
        />
    </div>
  );
}

export default Profile;
