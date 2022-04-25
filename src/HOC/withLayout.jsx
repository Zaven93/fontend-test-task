import Header from "@layout/Header";

const withLayout = (Component) => {
  return (props) => (
    <div className="layout__container">
      <Header />
      <Component {...props} />
    </div>
  );
};

export default withLayout;
