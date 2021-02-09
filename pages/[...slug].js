
import {
  connect,
  configure,
  reduxWrapper,
  Wrapper,
  WidgetPost,
  HeadPost
} from 'eventjuicer-site-components';

import Head from 'next/head'

import settings from '../settings';

const PageCompany = ({id}) => {
  
  return (
        <>
        <HeadPost id={id}>{(data) => <Head>{data}</Head>}</HeadPost> 
        <WidgetPost id={id} />
        </>
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
  const matches = /[^,]+,(?<id>[0-9]+)/g.exec(slug)

  if(!matches){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {}
    }
  }

  const {id} = matches.groups;

  const post = `posts/${id}`;

  await configure(props, {
    settings : settings,
    preload : [post]
  })

  return {
      props : {
          id :id
      },
      revalidate : 1
  }

})





export default connect()(PageCompany);
