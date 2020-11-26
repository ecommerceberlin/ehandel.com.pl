
import {
    connect,
    configure,
    reduxWrapper,
    Wrapper
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  import settings from '../../settings';

  const PageCompany = ({slug, dispatch}) => {
    
  return (
    <Wrapper first color="transparent">

     
     dsdfsdf
    </Wrapper>
  );
  
  }
  
  PageCompany.defaultProps = {
    company: {}
  }
  

  export async function getStaticPaths() {
  
    return {
    
      paths: [],
      fallback: true //do not throw 404 when not cached....
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {
  
    const {slug} = params;
 

    await configure(store, {
      settings : settings,
    //   preload : [post]
    })

    return {
        props : {
            // id :id
        },
        revalidate : 1
    }
  
  })
  



  
  export default connect()(PageCompany);
  