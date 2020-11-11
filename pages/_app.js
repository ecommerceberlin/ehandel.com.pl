
import { reduxWrapper, NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const customTheme = {

    typography: {
  
      fontFamily: "'Roboto', 'Arial', sans-serif",
     
      h5 : {
        fontFamily: "'Titillium Web', 'Arial', sans-serif",
        fontWeight : 400
      },
      h4 : {
        fontFamily: "'Titillium Web', 'Arial', sans-serif",
        fontWeight : 400
      },
      h3 : {
        fontFamily: "'Titillium Web', 'Arial', sans-serif",
        fontWeight : 400
      },
      h2 : {
        fontFamily: "'Titillium Web', 'Arial', sans-serif",
        fontWeight : 400
      },
      h1 : {
        fontFamily: "'Titillium Web', 'Arial', sans-serif",
        fontWeight : 400
      },
  
      // headline : {
      //   fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
      // },
      // subheading : {
      //   fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
      //   fontWeight : 700
      // },
      // title: {
      //   fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif"
      // }
    },
    // palette: {
    //   primary: { main: red[700] },
    //   secondary: { main: grey[700] }
    // }
  };
  
  /**
   * 

   */

const MyCustomApp = (props) => <NextApp {...props} 
    head={
        <MyHead 
            url="/" 
            font="family=Roboto&family=Titillium+Web:ital,wght@0,600;0,700;1,400">{(data) => <Head>{data}</Head>}</MyHead> 
    }
    theme={customTheme}
/>

export default reduxWrapper.withRedux(MyCustomApp)