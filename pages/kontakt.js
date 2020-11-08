import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetPosts
  } from 'eventjuicer-site-components';
  
  
  import settings from '../settings'
  
  const PageIndex = (props) => (
  
   
    <React.Fragment>
  
  <Wrapper first>
  
 

  </Wrapper>
   
    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: [{
        // resource: "",
        params: {
          company_id: 1216
        }
      }]
    })

    return {props: {
      
    }, revalidate: 3}
    
  })
  
  export default connect()(PageIndex);
  