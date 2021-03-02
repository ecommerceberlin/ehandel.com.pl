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

<Wrapper first color="transparent">
   <WidgetPostsFeatured />
    <Section
  left={
    <WidgetPosts 
    insert={ 
      <WidgetPostsFeatured skip={4} secondary={true} bottom={15} top={15} spacing={2} maxPerRow={2} /> 
    } 
    insertPos={10} />
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
