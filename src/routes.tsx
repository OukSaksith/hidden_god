import { createBrowserRouter } from "react-router-dom";
import DirectDebit from "./pages/DirectDebit";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Transaction from "./pages/Transaction";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         children: [
//             {path: ":id", element: <Transaction />}
//         ],
//       }
//     ],
//   },
//   {
//     path: "/directdebit",
//     element: <Layout />,
//     children: [
//       {
//         children: [
//             {path: ":subscriptionId", element: <DirectDebit />}
//         ],
//       }
//     ],
//   },

//   {
//     path: '*',
//     element: <Error />,
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       path: ":id", element: <Transaction />}
    ],
  },
  {
    path: "/directdebit",
    element: <Layout />,
    children: [
      {
       path: ":subscriptionId", element: <DirectDebit />
      }
    ],
  },

  {
    path: '*',
    element: <Error />,
  }
]);


export default router;