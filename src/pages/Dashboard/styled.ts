import styled from 'styled-components';
import {shade} from 'polished';

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
   transition: background 0.8s ease-out;

   &:hover{
     background: ${shade(0.1, '#B30049')};
   }

 }
`

export const Pokemons = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;






 div{
   width: 100%;
   max-width: 235px;
   background:#303030;
   border-radius: 8px;
   border: 3px solid #ccac60;
   display: flex;
   flex-direction:column;
   align-items:center;
   margin: 8px;

  &:last-child{
    align-self: flex-end;
  }



   header{
     width: 100%;
     display:flex;
     justify-content: space-between;
     align-items:center;

     span{
       color:#1a1a1d;
       background:#ccac60;
       padding: 4px 5px 4px 0;
       font-family: 'Caveat','Courier New', Courier, monospace;
       font-size: 18px;
       border-radius: 0 0 4px 0;
     }

     svg{
       padding-right:4px;
       cursor: pointer;

       &:hover{
         color:#d9421c;
       }
     }


   }

   img{
     width: 170px;
     height: 170px;
     margin: 15px 0;
   }

   strong{
     margin: 15px 0;
     font-size: 25px;
     line-height:35px;
     color:#fff;
     font-family: 'Caveat','Courier New', Courier, monospace;
     letter-spacing: 2px;
     }

     button{
       margin: 15px 0;
       width: 100%;
       max-width: 180px;
       height: 40px;
       background:#3cba46;
       border: 0;
       color:#fff;
       font-family: 'Lato';
       text-transform:uppercase;
       border-radius: 4px;

       &:hover{
         background:${shade(0.2, '#3cba46')}
       }
     }

 }


`;
