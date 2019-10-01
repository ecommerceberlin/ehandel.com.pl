import {
  connect,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSpeaker extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {

    const post = `posts/${query.id}`

    return {
      preload: [post, 'exhibitors'],
      asPath: asPath,
      postId: query.id,
      settings: settings,
    };
  }

  render() {
    const { postId, asPath } = this.props;

    // if (!speaker) {
    //   return <Error statusCode={404} />;
    // }

    return (
      <Layout>
     



      </Layout>
    );
  }
}

export default connect()(PageSpeaker);
