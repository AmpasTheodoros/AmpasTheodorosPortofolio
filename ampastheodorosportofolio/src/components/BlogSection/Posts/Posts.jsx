import React, { Component } from 'react';
import './styles.css';
import './script';
import { blogList } from '../../../config/data.js';

class Posts extends Component {
        render () {
                return (
                        <div>
                                {blogList.map((item, index) =>{
                                        return (
                                                <section className="post container">
                                                        <div className={'post-box ' + item.category}>
                                                                <img src={item.cover} alt="placeholder" className="post-img" />
                                                                <h2 className="category">{item.category}</h2>
                                                                <a href="#" className="post-title">
                                                                        {item.title}
                                                                </a>
                                                                <span className="post-date">{item.createdAt}</span>
                                                                <p className="post-description">{item.description}</p>
                                                                <div className="profile">
                                                                        <img src={item.authorAvatar} alt="placeholder" className="profile-img" />
                                                                        <span className="profile-name">{item.authorName}</span>
                                                                </div>
                                                        </div>
                                                </section>
                                        )
                                })}
                                <script
                                        src="https://code.jquery.com/jquery-3.6.3.js"
                                        integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
                                        crossorigin="anonymous">
                                </script>
                        </div>
                )
        }
};

export default Posts;
