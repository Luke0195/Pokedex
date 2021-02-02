import styled from 'styled-components';

export const Title = styled.h1`
  margin: 30px 0;
  color:#fff;
  font-size: 40px;
  line-height: 50px;
  text-align:center;
  cursor: pointer;
  transition: letter-spacing 0.8s ease-out;

  &:hover{
    letter-spacing: 6px;
  }
`;


export const Form = styled.form`
 width: 100%;
 max-width: 700px;
 margin: 50px auto;
 display:flex;
 align-items:center;
 justify-content:center;
 input{
  flex:1;
  height: 53px;
  color: #1a1a1d;
  padding-left: 8px;
  border-radius: 4px 0 0 4px;
  border: 0;
  &::placeholder{
    color:#a8a8d8;
  }
 }
 button{
   width: 234px;
   height: 53px;
   border: 0;
   border-radius: 0 4px 4px 0;
   background:#B30049;
   color:#fff;
   font-size: 15px;
   font-weight:bold;
   text-transform: uppercase;

 }
`

