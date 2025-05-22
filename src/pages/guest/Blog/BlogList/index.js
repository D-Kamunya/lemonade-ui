import React from 'react';
import Navbar from '../../../../components/guest/Navbar';
import PageTitle from '../../../../components/guest/PageTitle';
import Footer from '../../../../components/sections/guest/Footer';
import BlogCard from '../../../../components/guest/Blog/BlogCard';
import BlogData from '../../../../components/sections/guest/Blogs/BlogData';

const BlogList = () => {
    
    return (
        <>
            <Navbar />
            <PageTitle />
            <section className='pb-70' data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        {
                            BlogData.map(blog => <BlogCard blog={blog} />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogList;