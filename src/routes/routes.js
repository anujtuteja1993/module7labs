import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Post from '../components/Post';
import Posts from '../components/Posts';
import PostDetails from '../components/PostDetails';
import Dashboard from '../components/Dashboard';
import ContactUs from '../components/ContactUs';
import PostID from '../components/PostID'
import Creatures from '../components/Creatures';
import Clockstart from '../components/Clockstart';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />} />
      <Route path='/home' element={<Home {...props} />} />
      <Route path='/posts' element={<Posts {...props} />} />
      <Route path='/post' element={<Post {...props} />}>
        <Route path=':id' element={<PostDetails {...props}/>} />
      </Route>
      <Route path='/posts/:id/' element={<PostDetails {...props} />} />
      <Route path='/dashboard/' element={<Dashboard {...props} />} />
      <Route path='/contact-us' element={<ContactUs {...props} />} />
      <Route path='/creatures' element={<Creatures {...props} />} />
      <Route path='/ClockStart' element={<Clockstart {...props} />} />
    </Routes>
  )
}