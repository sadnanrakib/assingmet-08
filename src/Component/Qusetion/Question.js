import React from 'react';
import'./Question.css';

const Question = () => {
    return (
   <div className='Question'>
    <h2>Q1.How Does React Work?</h2>
    <p>Ans:React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
    <h2>Q2.props and state difference in react?</h2>
    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
    <h2>Q3.What does the useEffect API do other than load data?</h2>
    <p> we use the useEffect hook to fetch data from an API and then set the result to the data.
     state variable with the setData</p>
     <p> In React applications, you will use APIs to load user preferences, display user information, fetch configuration or security information,</p>
   </div>
    );
};

export default Question;