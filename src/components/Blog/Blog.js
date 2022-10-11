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
                    <p className='blog-answer'>React Router allows us to do dynamic routing, client-side routing and build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                        This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>
                </div>

                <div className="blog">
                    <img src={context} alt="" />
                    <h2 className='blog-title'>How does Context API works?</h2>
                    <p className='blog-answer'>React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.

                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>

                <div className="blog">
                    <img src={hook} alt="" />
                    <h2 className='blog-title'>What are the uses of useRef</h2>
                    <p className='blog-answer'>
                    useRef is a hook provided by react. The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;