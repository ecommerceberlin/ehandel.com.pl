
import {
  connect,
  configure,
  reduxWrapper,
  Wrapper,
  WidgetPosts
} from 'eventjuicer-site-components';

import Head from 'next/head'

import settings from '../../settings';

const PageCompany = ({slug}) => {
  
return (
  <Wrapper first color="transparent">
    <WidgetPosts company={slug} label="posts.company" />
  </Wrapper>
);

}

PageCompany.defaultProps = {
  company: {}
}


export async function getStaticPaths() {

  return {
  
    paths: [],
    fallback: "blocking" 
  };
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  const {slug} = props.params;

  await configure(props, {
    settings : settings,
    preload : [`posts?company=${slug}`]
  })

  return {
      props : {
          slug: slug
      },
      revalidate : 5
  }

})





export default connect()(PageCompany);
