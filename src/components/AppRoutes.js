
import AllQuotes from "./AllQuotes";
import CombinedQuotes from "./CombinedQuotes";
import FavQuotes from "./FavQuotes";
import Login from "./Login";
 
const AppRoutes = [
    {
        index: true,
        element: <Login />
    },
    {
        path: '/combinedquotes',
        element:<CombinedQuotes style={{margin: "auto", textAlign: "center"} }/>
    },
    {
     path: '/FavQuotes',
         element: <FavQuotes/>
    }
];
export default AppRoutes;