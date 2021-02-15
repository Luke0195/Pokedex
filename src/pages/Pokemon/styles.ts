import styled  from 'styled-components';


export const Container = styled.div`
width: 100%;
max-width: 600px;
margin: 30px auto;


 >h1{
  text-align:center;
  color:#fff;
  transition: all 0.8s ease-out;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover{
    letter-spacing: 6px;

  }
}

`


export const PokemonContent = styled.div`
 width: 100%;
 max-width: 400px;
 margin: 80px auto;
 display: flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 border: 1px solid #ffb866;
 border-radius: 4px;
 background:#595753;
 position: relative;
 padding: 50px 20px;

span{
   position: absolute;
   top: 0;
   left:0;
   display: inline-block;
   width:40px;
   background:#ffb866;
   padding: 5px;
   border-radius: 0 0px 4px 0;
   font-family:'Caveat';
   font-weight: bold;
 }

 img{
   width: 150px;
   height: 150px;
 }

 h2{
   font-size: 29px;
   line-height:39px;
   color:#fff;
   font-family: 'Caveat';
 }

 > strong{
   color:#fff;
   background: #3cba46;
   font-size: 25px;
   line-height:35px;
   font-family: 'Caveat';
   display: block;
   width: 200px;
   height: 30px;
   margin-top: 10px;
   display: flex;
   justify-content:center;
   align-items:center;
   padding: 8px 0;
   border-radius: 4px;
 }

`


export const PokemonStatus = styled.div`
width: 100%;
 margin-top: 30px;
 position: relative;

 span{
   background: none;
 }

 h1{
   font-size: 24px;
   line-height: 34px;
   color:#fff;
   font-weight: bold;
   text-align:center;
 }

 ul{
   width: 100%;
   list-style:none;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr;
   margin-top: 8px;

   li{
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;

     strong{
       font-size: 17px;
       line-height:27px;
       font-weight:bold;
       text-transform:uppercase;
       color:#ff9000;
     }

     p{
       color:#fff;
     }
   }
 }


`;
