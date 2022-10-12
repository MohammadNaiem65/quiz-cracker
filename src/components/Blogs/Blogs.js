import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full mt-8'>
            <h1 className='w-4/5 mx-auto text-3xl font-bold underline'>Question 1:</h1>
            <div className='bg-gray-300 pl-[5rem] md:pl-[9rem] mt-4 py-4'>
                <h2 className='text-xl mb-3 font-semibold'>What is the Purpose or Use of React Router?</h2>
                <p>
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
                <p className='mt-3'>
                    React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                </p>
            </div>
            <h1 className='w-4/5 mx-auto mt-10 text-3xl font-bold underline'>Question 2:</h1>
            <div className='bg-gray-300 pl-[5rem] md:pl-[9rem] mt-4 py-4'>
                <h2 className='text-xl mb-3 font-semibold'>How does Context API work?</h2>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <p className='mt-3'>
                    React.createContext() returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <h1 className='w-4/5 mx-auto mt-10 text-3xl font-bold underline'>Question 3:</h1>
            <div className='bg-gray-300 pl-[5rem] md:pl-[9rem] mt-4 py-4'>
                <h2 className='text-xl mb-3 font-semibold'>Explain useRef hook.</h2>
                <p>
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

                </p>
            </div>
        </div>
    );
};

export default Blogs;