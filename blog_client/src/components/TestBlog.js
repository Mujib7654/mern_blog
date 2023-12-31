import React from 'react';
import './TestBlog.css';
import styled from 'styled-components';
import { BlogButton, BlogPara } from '../CommonElement';


const TestBlog = () => {

  const StyledBtn = styled.button`
    color: white;
    background-color: red;
    border: 1px solid black;
    font-size: 34px;
    border-radius: 10px;
  `

  const pStyle = {
    color: 'blue',
    fontSize: '28px',
  }
  return (
    <>
      {/* functional css */}
      <p style={pStyle}>Hello</p>
      
      {/* inline css */}
      <p style={{color:'red'}}>Hello</p>

      {/* external css */}
      <p className='myParagraph'>External CSS</p>

      {/* styled component */}
      <StyledBtn>Login</StyledBtn>
      <StyledBtn>Registration</StyledBtn>

      {/* common styled component */}
      <BlogButton>Test Button</BlogButton>
      <BlogPara>lorem hiuwe</BlogPara>

    </>
  )
}


export default TestBlog