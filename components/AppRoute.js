const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Route {...rest} render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
    );
  };
  