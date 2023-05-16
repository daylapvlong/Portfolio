import React from 'react';
import Header from '../Header';

const Work = () => {
    return ( 
        <div className="pl-20 bg-white dark:bg-gray-800 text-black dark:text-white h-full">
            <Header />
            <h1 class="text-center pb-5 content-center text-5xl font-bold">
               See all my projects here!
            </h1>
            <ul class="px-10 py-10 grid grid-cols-2 gap-7">
                <li class="bg-white rounded-lg shadow-xl">
                    <div class="h-72"></div>
                </li>
                <li class="bg-white rounded-lg shadow-xl">
                    <div class="h-72"></div>
                </li>
                <li class="bg-white rounded-lg shadow-xl">
                    <div class="h-72"></div>
                </li>
                <li class="bg-white rounded-lg shadow-xl">
                    <div class="h-72"></div>
                </li>
            </ul>
        </div>
     );
}

export default Work;