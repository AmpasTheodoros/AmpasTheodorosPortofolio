import React from 'react';
import Headers from '../../components/BlogSection/Header/Header';
import PostFilter from '../../components/BlogSection/PostFilter/PostFilter';
import Posts from '../../components/BlogSection/Posts/Posts';
import Footer from '../../components/BlogSection/Footer/Footer';
import './BlogSection.css';


const BlogSection = () => {

    return (
        <div>
            {/* Page header */}
            <Headers />
            {/* Page jumbotron */}
            <section className="home" id="home">
                <div className="home-text container">
                    <h2 className="home-title">Co<span>de</span> and Cul<span>ture</span> wi<span>th</span> Theo<span>dor</span></h2>
                    <span className="home-subtitle">Theodor's Journey through the World of Web Development and Beyond</span>
                </div>
            </section>
            {/* Post's Filter */}
            <PostFilter />
            {/* Posts */}
            <Posts />
            {/* Footer */}
            <Footer />
        </div> 
    )
}

export default BlogSection
