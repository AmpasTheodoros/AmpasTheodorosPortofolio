import React from 'react';
import Headers from '../../components/BlogSection/Header/Header';
import PostFilter from '../../components/BlogSection/PostFilter/PostFilter';
import Posts from '../../components/BlogSection/Posts/Posts';
import './BlogSection.css';


const BlogSection = () => {

    return (
        <div>
            {/* Page header */}
            <Headers />
            {/* Post's Filter */}
            <PostFilter />
            {/* Posts */}
            <Posts />
        </div> 
    )
}

export default BlogSection
