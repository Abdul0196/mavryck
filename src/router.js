import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const ScenarioPlanning = lazy(() => import("./pages/ScenarioPlanning"));
const SingleScenario = lazy(() => import("./pages/SingleScenario"));
// import ScenarioPlanning from "./pages/ScenarioPlanning";
// import SingleScenario from "./pages/SingleScenario";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/scenarioplanning",
        element: <ScenarioPlanning />,
    },
    {
        path: "/scenarioplanning",
        element: <ScenarioPlanning />,
    },
    {
        path: "/scenarioplanning/:id",
        element: <SingleScenario />,
    }
])


function Home() {
    return (
        <p className="text-center py-10">Redirect to <a className=" text-violet-600" href="/scenarioplanning">Scenario Planning</a></p>
    )
}

export default router;