import NavigationBar from "./NavigationBar";

function Layout({ children, hideNavigation }) {
  let rightColumnsClasses = "";

  if (hideNavigation) {
    rightColumnsClasses += "w-full";
  } else {
    rightColumnsClasses += "mx-4 md:mx-0 md:w-9/12";
  }

  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto py-5 gap-6 mb-24 md:mb-0">
      {!hideNavigation && (
        <div className="md:w-3/12 bottom-0 fixed w-full -mb-5 md:static ">
          <NavigationBar />
        </div>
      )}
      <div className={rightColumnsClasses}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
