
import { reduxWrapper, NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const customTheme = {

    palette: {
        background: {
          default: "#f0f2f5" //#f7f8fc
        }
    },

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
    }
    
};
  
  /**
   * 

   */

const MyCustomApp = (props) => <NextApp {...props} 
    head={
        <MyHead 
            url="/" 
            titleLabel="og_title"
            descriptionLabel="og_description"
            image=""
            font="family=Roboto&family=Titillium+Web:ital,wght@0,600;0,700;1,400">{(data) => <Head>{data}</Head>}</MyHead> 
    }
    theme={customTheme}
/>

export default reduxWrapper.withRedux(MyCustomApp)