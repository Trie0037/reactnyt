import React from "react";

const Results = props => {
 const date = props.date && props.date.slice(0, 10);
 const articleData = {title: props.title, url: props.url, date: props.date}
 return (
   <div className="#">
     <a href={props.url}><h6 id={props._id}>{props.title}</h6></a>
     <p>{date}</p>
     <span className="#">
       <button className="saveBtn" onClick={(event) => props.onChange(event, articleData)}>Save</button>
     </span>
   </div>
 )
};

export default Results;