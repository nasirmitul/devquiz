import React from 'react';
import router from '../../images/react-router.png'
import hook from '../../images/react-hook.jpg'
import context from '../../images/context.png'


const Blog = () => {
    return (
        <div className='container'>
            <div className="blogs">
                <div className="blog">
                    <img src={router} alt="" />
                    <h2 className='blog-title'>What is the purpose of react router?</h2>
                    <p className='blog-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit animi minus reprehenderit eum iste. Pariatur magni laudantium, beatae obcaecati voluptatem vitae placeat. Accusantium corporis laboriosam labore reprehenderit, excepturi nam, sed nulla ratione quos fugiat assumenda quibusdam molestiae sapiente quisquam.</p>
                </div>

                <div className="blog">
                    <img src={context} alt="" />
                    <h2 className='blog-title'>How does Context API works?</h2>
                    <p className='blog-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit animi minus reprehenderit eum iste. Pariatur magni laudantium, beatae obcaecati voluptatem vitae placeat. Accusantium corporis laboriosam labore reprehenderit, excepturi nam, sed nulla ratione quos fugiat assumenda quibusdam molestiae sapiente quisquam.</p>
                </div>

                <div className="blog">
                    <img src={hook} alt="" />
                    <h2 className='blog-title'>What are the uses of UseRef</h2>
                    <p className='blog-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit animi minus reprehenderit eum iste. Pariatur magni laudantium, beatae obcaecati voluptatem vitae placeat. Accusantium corporis laboriosam labore reprehenderit, excepturi nam, sed nulla ratione quos fugiat assumenda quibusdam molestiae sapiente quisquam.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;