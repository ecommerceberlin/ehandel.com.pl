import React from 'react'
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

<Wrapper dense={true} color="transparent">
   <WidgetPostsFeatured top={0} />
    <Section
      left={
      <>
      <WidgetPosts 
      insert={ 
      <WidgetPostsFeatured skip={4} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} /> 
      } 
      insertPos={10} 
    />

    <WidgetPosts 
      // insert={ 
      //   <WidgetPostsFeatured skip={4} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} /> 
      // } 
      // insertPos={10} 
      label={null}
      page={2}
    />

    </>
  }
  right={
    <WidgetPublishers />
  }
  leftSize={7}
/>
</Wrapper>
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
  await configure(props, {
    settings: settings,
    preload: [ {
      resource: "posts"
    },{ 
      resource: "posts",
      params: { 
        is_promoted: 1
      }},{
      resource: "publishers"
    }]
  })

  return {props: {}, revalidate: 30}
  
})

export default connect()(PageIndex);
