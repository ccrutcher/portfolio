import React from 'react'
import './Projects.css'
import Project from './Project/Project.js'

import movieImg from '../imgs/movie-swiper.png';
import chatImg from '../imgs/chat-app.png';
import libraryImg from '../imgs/library.png';
import kanbanImg from '../imgs/Kanban2.png';
import pomodoroImg from '../imgs/pomodoro.JPG';



export default function Projects() {
  return (
      <div className='projects'>
        <Project img={kanbanImg} name="Kanban board" madeWith={"Made with: Node.js, MongoDB, Express, ReactJS, CSS"} githubLink={"https://github.com/ccrutcher/kanban"} demoLink={"https://crutcher-kanban.netlify.app/"} description={"A full-stack MERN application with CRUD capabilities that allows users to create kanban boards. It uses a Node.js back-end that serves an API and connects to a MongoDB database. A React front-end accesses the API to allow users to move cards between lists, edit cards, rename lists, remove cards, remove lists, and delete boards."}></Project>
        <Project img={chatImg} name="Chat App" madeWith={"Made with: ReactJS, Firebase"} githubLink={"https://github.com/ccrutcher/chat-app"} demoLink={"https://crutcher-chat-app.herokuapp.com/"} description={"This is a chat app that uses a Firebase realtime database to store and fetch message data. Users can either send and read messages as a guest, or sign in using a Google account. Users may select an existing room to join, or create a new room. All users can currently enter, create, and delete any room. Once a room has been selected, messages appear in sequential order and display a timestamp of when the message was sent."}></Project>
        <Project img={movieImg} name="Movie Swiper" madeWith={"Made with: ReactJS"} githubLink={"https://github.com/ccrutcher/movie-swiper"} demoLink={"https://movie-swiper.herokuapp.com/"} description={"This is a movie-selection app that uses The Movie Database API. Two users are presented with movie options that they may either like or skip. Movies that both users like are displayed on the page."}></Project>
        <Project img={libraryImg} name="Library Catalog" madeWith={"Made with: NodeJS, Express, MongoDB"} githubLink={"https://github.com/ccrutcher/express-locallibrary"} demoLink={"https://crutcher-express-library.herokuapp.com/"} description={"A Node.js project created with Express. This project uses Mongoose to model data that is then passed to the MongoDB database. The app utilizes the MVC architectural pattern to keep the code structured, with Pug functioning as the templating engine. The app has full CRUD capabilities, allowing users to create and interact with books, authors, genres, and book instances within the database."}></Project>
        <Project img={pomodoroImg} name="Pomodoro Study Timer" madeWith={"Made with: JavaScript, HTML, CSS"} githubLink={"https://github.com/ccrutcher/pomodoroapp"} demoLink={"https://crutcher-pomodoro.herokuapp.com/"} description={"Users can set the duration of their work, break, and long-break periods. Once the timer has been started, a random motivational quote will appear, and over time will change to different motivational messages. At the end of each work, break, and long break period, a bell sound will play to inform the user to change their current action. Users can also pause and resume the timer."}></Project>
      </div>
  )
}