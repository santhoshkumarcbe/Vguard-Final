import React, { useState } from 'react';
import { db1 } from './firebase';
import {set,ref} from 'firebase/database'
import './admin.css'
import { Link } from 'react-router-dom';
import RegisterPage from './register';


function AdminPage() {
  const [text, setText] = useState('');
  const [contentid, setContentid] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [quizQuestion, setQuizQuestion] = useState('');
  const [quizAnswers, setQuizAnswers] = useState('');
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
set(ref(db1,"contents/" + contentid),{
  text,
  videoUrl,
  quizQuestion,
  quizAnswers,

})
var id=contentid;
set(ref(db1,"contentscount/"),{
  contentid })

      console.log('Data written to Realtime Database!');
    } catch (error) {
      console.error(error);
    }
    
  };



  return (
    <div className='admin'> 
    <form  onSubmit={handleSubmit}>
      <h1>Welcome admin</h1>
        <label className='text'>
        Content id:
        <textarea placeholder='enter the content number' value={contentid} onChange={(e) => setContentid(e.target.value)} required/>
      </label>
      <label className='text'>
        Text:
        <textarea placeholder='Enter the Module Description'  value={text} onChange={(e) => setText(e.target.value)} required/>
      </label>
      <label className='videourl'>
        Video URL:
        <input type="text" placeholder='Read the guidelines before pasting link'  value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <br></br>
        <p>Guidelines: if the original youtube url is : "https://youtu.be/tgbNymZ7vqY" then it should be submitted as "https://www.youtube.com/embed/tgbNymZ7vqY"</p>
      </label>
      <label className='quizq'>
        Quiz Question:
        <input type="text"  placeholder='write the questions..' value={quizQuestion} onChange={(e) => setQuizQuestion(e.target.value)} />
      </label>
      <label className='quiza'>
        Quiz Answers:
        <textarea value={quizAnswers} onChange={(e) => setQuizAnswers(e.target.value)} />
      </label>
      
    <h4> <Link to='/registerpage' element={<RegisterPage/>}>Click here to Register new user</Link>  </h4>  

      <button className='postbutton' type="submit">Post</button>
    </form>





</div>




  );
}

export default AdminPage;
