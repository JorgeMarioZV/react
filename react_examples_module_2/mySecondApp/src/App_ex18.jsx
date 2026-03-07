// Example 18 - Functional Component - HighOrder Components

import React from "react";
import NovelBlog from './Components/NovelBlog'

function App() {
    const novel = {
        title   : "Harry Potter",
        author  : "J.K. Rowling",
        description : "A world full of wizards and magic",
        type    : "Fiction"
    };
    return (
        <div className="app">
            <NovelBlog title={novel.title} author={novel.author} description={novel.description} type={novel.type}/>
        </div>
    );
}

export default App;