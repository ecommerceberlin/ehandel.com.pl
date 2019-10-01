import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetSalesMap,
  LayoutMain as Layout,
  WidgetRoleButtons,
  WidgetPartners,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageIndex extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: ['allexhibitors', 'companies'],
      settings: settings,
      //    load : ["bookingmap", "formdata", "ticketgroups"]
    };
  }

  render() {
    return (
      <Layout>
        <Head />

        {/* <WidgetSchedule /> */}

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        /> 

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetAllExhibitorsColumnList />

        <WidgetRoleButtons first={true} />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageIndex);
