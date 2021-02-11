
import {
  connect,
  configure,
  reduxWrapper,
  Wrapper,
  WidgetPosts
} from 'eventjuicer-site-components';

import Head from 'next/head'

import settings from '../../settings';

const PageCompany = ({company}) => {
  
return (
  <Wrapper first color="transparent">
    <WidgetPosts company={company} label="posts.company" />
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

  const {company} = props.params;

  await configure(props, {
    settings : settings,
    preload : [
      {
        resource: "posts",
        params: `company=${company}`
      }
    ]
  })

  return {
      props : {
        company: company
      },
      revalidate : 5
  }

})





export default connect()(PageCompany);
