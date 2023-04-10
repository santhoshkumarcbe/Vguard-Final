import React, { useState, useEffect } from 'react';
import { getDatabase, ref,get, onValue } from 'firebase/database';
import { QuerySnapshot } from 'firebase/firestore/lite';
import './user.css';

const db = getDatabase();


const UserPage = () => {
  var [contentid, setcontentid] = useState('');
  const [text, setText] = useState('');
  const [video, setVideo] = useState('');
  const [quizzes, setQuizzes] = useState([]);
   const [id, setid] = useState('');

  useEffect(() => {
    // Fetch data from Firebase Realtime Database and set state 
   
    // for(let i=1;i<contentid;i++){ 
      let i=5;
    const idRef=ref(db, 'contentscount/');
    const textRef = ref(db, 'contents/' + i + '/text');
    const videoRef = ref(db, 'contents/' + i + '/videoUrl');
    const quizzesRef = ref(db, 'contents/' + i + '/quizQuestion');
 
    // const getId = async () => {
    //   const snapshot = await get(idRef)
    //   if (snapshot.exists()) {
    //     setid(snapshot.val());
    //     const data = snapshot.val()
    //     console.log("totalcontents:" + data);
    //   } else {
    //     console.log('No totalcontents available');
    //   }
    // }
    const getText = async () => {
      const snapshot = await get(textRef)
      if (snapshot.exists()) {
        setText(snapshot.val());
        const data = snapshot.val()
        console.log("text:" + data);
      } else {
        console.log('No text data available');
      }
    };


    const getVideo = async () => {
      const snapshot = await get(videoRef);
      if (snapshot.exists()) {
        setVideo(snapshot.val());
        console.log("vedio url :" + snapshot.val());
      } else {
        console.log('No video data available');
      }
    };


    const getQuizzes = () => {
      onValue(quizzesRef, (snapshot) => {
        const quizData = snapshot.val();
        console.log("quiz data :" + quizData);
        if (quizData) {
          const quizList = Object.keys(quizData).map((id) => {
            return { id, ...quizData[id] };
          });
          setQuizzes(quizList);
        } else {
          console.log('No quiz data available');
        }
      });
    };

    getText();  
    getVideo();
    getQuizzes();
    // getId();

//  }
}, []);





  return (
    <div className='user-container'>
      <h1 className="heading">V-Guard Welcomes you</h1>
      <h1 className="heading">Text</h1>
      <p className="text">{text}</p>
      <h1 className="heading">Video</h1>
      <iframe className="video" width="560" height="315" src={video} title="Video"></iframe>
      <h1 className="heading">Quizzes</h1>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h2>{quiz.title}</h2>
          <p>{quiz.description}</p>
          {/* Render quiz questions and options */}
        </div>
      ))}
    </div>
  );
};

export default UserPage;
