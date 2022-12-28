import React from 'react';
import './styles.css';

const PostFilter = () => (
    <div className='post-filter container'>
        <span className='filter-item active-filter' data-filter='all'>All</span>
        <span className='filter-item' data-filter='design'>Design</span>
        <span className='filter-item' data-filter='tech'>Tech</span>
        <span className='filter-item' data-filter='travel'>Travel</span>
    </div>
);

export default PostFilter;