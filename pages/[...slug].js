
import {
    connect,
    configure,
    reduxWrapper,
    Wrapper,
    WidgetPost
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  import settings from '../settings';

  const PageCompany = ({id}) => {
    
    return ( <WidgetPost id={id} /> );
  
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
    const matches = /[^,]+,(?<id>[0-9]+)/g.exec(slug)
    const {id} = matches.groups;
    const post = `posts/${id}`;

    await configure(store, {
      settings : settings,
      preload : [post]
    })

    return {
        props : {
            id :id
        },
        revalidate : 1
    }
  
  })
  



  
  export default connect()(PageCompany);
  