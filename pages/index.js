import {
    connect,
    Wrapper,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  
  import settings from '../settings'
  
  const PageIndex = (props) => (
  
   
    <React.Fragment>
  
  <Wrapper first>
  
    Posts here
  </Wrapper>
   
    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: ['posts?featured=1']
    })

    return {props: {
      
    }, revalidate: 3}
    
  })
  
  export default connect()(PageIndex);
  