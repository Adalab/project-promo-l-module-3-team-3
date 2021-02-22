import React from 'react';
import '../stylesheets/app.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';
import Preview from './preview/Preview';

function App() {
  return (
    <div>
        <Header />
        <div className='container__generator'>
          <Preview />
          <Form />
        </div>
        <Footer />      
    </div>
  );
}

export default App;
