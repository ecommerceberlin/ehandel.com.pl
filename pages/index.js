import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetPosts
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = (props) => (<Wrapper first>
  <WidgetPosts />
  </Wrapper>) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: [{
        resource: "posts",
        params: {
          company_id: 1216
        }
      }]
    })

    return {props: {}, revalidate: 1}
    
  })
  
  export default connect()(PageIndex);
  