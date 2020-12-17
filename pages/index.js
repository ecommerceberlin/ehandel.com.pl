import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetPosts,
    TwoColsLayout as Section,
    WidgetPostsFeatured,
    WidgetPublishers
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = (props) => (
  <>
  
  <Wrapper first color="transparent">

     <WidgetPostsFeatured />

      <Section
    left={
      <WidgetPosts />
    }
    right={
      
      <WidgetPublishers />
    }
    leftSize={7}
  />

  </Wrapper>

  </>
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: ["posts"]
    })

    return {props: {}, revalidate: 1}
    
  })
  
  export default connect()(PageIndex);
  