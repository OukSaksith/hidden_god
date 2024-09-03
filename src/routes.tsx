import { createBrowserRouter } from "react-router-dom";
import DirectDebit from "./pages/DirectDebit";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Transaction from "./pages/Transaction";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <Error />,
        children: [
            {index: true, element: <Error />},
            {path: "/:transactionId", element: <Transaction />},
        ],
      }
    ],
  },
  {
    path: "/directdebit",
    element: <Layout />,
    children: [
      {
        errorElement: <Error />,
        children: [
            {index: true, element: <Error />},
            {path: ":subscriptionId", element: <DirectDebit />}
        ],
      }
    ],
  },
]);

export default router;