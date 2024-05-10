import React from 'react';

const Icerikler = () => {
  return (
    <div className="icerikler-page">
      <h1>İçerikler (Content)</h1>
      <p>This is where you'll find a curated collection of valuable content, resources, or media related to your application's focus.</p>

      {/* Replace with your actual content */}
      <h2>Explore Our Content</h2>
      <ul>
        <li>
          <a href="#">Sample Content Item 1</a>
        </li>
        <li>
          <a href="#">Sample Content Item 2</a>
        </li>
        <li>
          <a href="#">Sample Content Item 3</a>
        </li>
      </ul>

      {/* Add filters or categories for browsing content (optional) */}
      <h2>Browse by Category</h2>
      <ul>
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 2</a>
        </li>
        <li>
          <a href="#">Category 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Icerikler;
