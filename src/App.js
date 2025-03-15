import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utills/store";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import Demo from "./components/Demo";


const Layout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResults />
      },
      {
        path: "demo",
        element: <Demo />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
