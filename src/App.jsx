import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ScenarioPlanning = lazy(() => import("./pages/ScenarioPlanning"));
const SingleScenario = lazy(() => import("./pages/SingleScenario"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='main-loader'><img src={`${process.env.REACT_APP_PUBLIC_HOST}/images/logo.png`} alt="Mavryck" /></div>}>
        <Routes>
          <Route path="/mavryck" element={<Home />} />
          <Route path="/scenarioplanning" element={<ScenarioPlanning />} />
          <Route path="/scenarioplanning/:id" element={<SingleScenario />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


function Home() {
  return (
      <p className="text-center py-10">Redirect to <a className=" text-violet-600" href="/scenarioplanning">Scenario Planning</a></p>
  )
}


export default App;
