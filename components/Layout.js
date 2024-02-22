import NavigationBar from "./NavigationBar";

function Layout({ children }) {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto py-5 gap-6">
      <div className="w-3/12">
        <NavigationBar />
      </div>
      <div className="w-9/12">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
