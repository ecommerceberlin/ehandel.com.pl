
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
      fallback: "blocking" //do not throw 404 when not cached....
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    const {page} = props.params;
  
    await configure(props, {
      settings : settings,
      preload : [{
        resource: "posts",
        params: { page: page}
      }]
    })

    return {
        props : {
            page: page
        },
        revalidate : 5
    }
  
  })
  



  
  export default connect()(PageCompany);
  