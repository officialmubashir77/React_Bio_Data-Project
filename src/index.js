import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

<div>
<h1 className='hello'>bio data</h1>

<div className='main'>

<div className='ques'>

<h2 className='name center'>Name :</h2>
<h2 className='name center'>F.Name :</h2>
<h2 className='name center'>Date Of Birth :</h2>
<h2 className='name center'>Gender :</h2>
<h2 className='name center'>Martial Status :</h2>
</div>

<div className='ans'>

<h2 className='name center fullname'>Mubashir</h2>
<h2 className='name center fullname'>Ibrahim</h2>
<h2 className='name center'>29/01/2002</h2>
<h2 className='name center'>Male</h2>
<h2 className='name center'>Single</h2>
</div>

</div>

</div>,


  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
