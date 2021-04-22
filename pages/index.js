import React from 'react'
import {
  connect,
  Wrapper,
  reduxWrapper,
  configure,
  WidgetPosts,
  TwoColsLayout as Section,
  WidgetPostsFeatured,
  WidgetPublishers,
  WidgetRoleButtons
} from 'eventjuicer-site-components';

import settings from '../settings'

const PageIndex = (props) => (

<Wrapper dense={true} color="transparent">
   <WidgetPostsFeatured top={0} />
    <Section
      left={
      <>
      <WidgetPosts 
      inserts={{
        5: <WidgetPostsFeatured limit={2} skip={4} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        9: <WidgetPostsFeatured limit={2} skip={6} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        13: <WidgetPostsFeatured limit={2} skip={8} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        17: <WidgetPostsFeatured limit={2} skip={10} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />
      }}
    />

    <WidgetPosts 
      label={null}
      page={2}
      inserts={{
        1: <WidgetPostsFeatured limit={2} skip={12} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        5: <WidgetPostsFeatured limit={2} skip={14} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        9: <WidgetPostsFeatured limit={2} skip={16} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />,
        13: <WidgetPostsFeatured limit={2} skip={18} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} />
      }}
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
