import Executive_Cockpit from './pages/Executive_Cockpit'
import Media_Mix_Budget from './pages/Media_Mix_&_Budget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layouts/Layout';
import Awareness_Performance from './pages/Awareness_Performance';
import Consideration_Hub from './pages/Consideration_Hub';
import Purchase_Leads from './pages/Purchase_&_Leads';
import Audience_Insights from './pages/Audience_Insights';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Executive_Cockpit />} />
          <Route path="/executive" element={<Executive_Cockpit />} />
          <Route path="/media-mix-budget" element={<Media_Mix_Budget />} />
          <Route path="/awareness-performance" element={<Awareness_Performance />} />
          <Route path="/consideration-hub" element={<Consideration_Hub />} />
          <Route path="/purchase-leads" element={<Purchase_Leads />} />
          <Route path="/audience-insights" element={<Audience_Insights />} />


        </Route>
      </Routes>
    </BrowserRouter>

      
    </div>
  );
}



export default App;
