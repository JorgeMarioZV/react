// Example 18 - Functional Component - HighOrder Components

import React from "react";
import Title from "./Title";
import Author from "./Author";
import Type from "./Type";
import Description from "./Description";

function NovelBlog ({ title, author, description, type }) {
    return (
        <div className="novel-post">
            <Title title={title}/>
            <Author author={author}/>
            <Type type={type}/>
            <Description description={description}/>
        </div>
    );
}

export default NovelBlog;