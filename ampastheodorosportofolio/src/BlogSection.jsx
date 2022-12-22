import React, { useState } from 'react';
import Headers from './components/BlogSection/Header/Header';
import SearchBar from './components/BlogSection/SearchBar/SearchBar';
import BlogList from './components/BlogSection/BlogList/BlogList';
import { blogList } from './config/data';
import './BlogSection.css';


const BlogSection = () => {
    const [blogs, setBlogs] = useState(blogList);
    return (
        <div>
            {/* Page header */}
            <Headers />
            {/* Search Bar */}
            <SearchBar />
            
            <div className="container">
                {/* Blog List & Empty List */}
                <BlogList blogs={blogs}/>
            </div>
        </div> 
    )
}

export default BlogSection
