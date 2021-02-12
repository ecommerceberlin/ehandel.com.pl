import React from 'react'
import {
    connect,
    Wrapper,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  
  import settings from '../settings'
  
  const PageIndex = (props) => (
  <Wrapper first color="transparent">
  </Wrapper>
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    await configure(props, {
      settings: settings,
      preload: []
    })

    return {
      props: {}, 
      revalidate: 3
    }
    
  })
  
  export default connect()(PageIndex);
  