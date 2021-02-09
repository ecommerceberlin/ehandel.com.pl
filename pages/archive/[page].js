
import {
    connect,
    configure,
    reduxWrapper,
    Wrapper,
    WidgetPosts
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  import settings from '../../settings';

  const PageCompany = ({page}) => {
    
  return (
    <Wrapper first color="transparent">
      <WidgetPosts page={page} />
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
  
    const {page} = params;
  
    await configure(store, {
      settings : settings,
      preload : [`posts?page=${page}`]
    })

    return {
        props : {
            page: page
        },
        revalidate : 5
    }
  
  })
  



  
  export default connect()(PageCompany);
  