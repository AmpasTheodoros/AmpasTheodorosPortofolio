import React from 'react';
import Headers from '../../components/BlogSection/Header/Header';
import Footer from '../../components/BlogSection/Footer/Footer';
import { useParams, Link } from 'react-router-dom';
import { blogList } from '../../config/data.js';

import './Blog.css';


const Blog = () => {
    const id = parseInt(useParams().id, 10);
    const blogPost = blogList.find(blog => blog.id === id);

    if (blogPost) {
        return (
            <div>
                {/* Page header */}
                <Headers />
                {/* Post Content */}
                <section className="post-header">
                    <div className="header-content post-container">
                        <Link to="#" className="back-home">Back to Home</Link>
                        <h1 className="header-title">{blogPost.title}</h1>
                        <img src="https://via.placeholder.com/1000/B68E71/282A3A/?text=Post" alt="placeholder" className="header-img" />
                    </div>
                </section>
                {/* Posts */}
                <section className="post-content post-container">
                    <h2 className="sub-heading">{blogPost.subHeader}</h2>
                    <p className="post-text">{blogPost.description}</p>
                </section>
                <div className="share post-container">
                    <span className="share-title">Share this article</span>
                    <div className="social">
                        <Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link to="#"><i class="fa fa-github" aria-hidden="true"></i></Link>
                        <Link to="#"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        );
    } else {
        return <div>Blog post not found</div>;
    }
};

export default Blog;