import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
  padding:0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Lato','Courier New', Courier, monospace;
}

html,body, #root{
  height:100%;
}

body{
  background:#1a1a1d;
}

#root{
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
  padding: 10px;


}

body , input , button{
  font-size: 16px;
}

button{
  cursor: pointer;
}

`;
