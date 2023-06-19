import React from 'react';

const styles = {
  homeStyles: {
    background: 'orange',
  },
};

const Home = () => {
  return (
    <div style={styles.homeStyles}>
      <h1>Welcome to My Portfolio</h1>
      <p>Here you can view my information and projects</p>
    </div>
  );
}

export default Home;
