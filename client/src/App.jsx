import Executive_Cockpit from './pages/Executive_Cockpit'
import Media_Mix_Budget from './pages/Media_Mix_&_Budget'
import Awareness_Performance from './pages/Awareness_Performance'
import Consideration_Hub from './pages/Consideration_Hub'
import Purchase_Leads from './pages/Purchase_&_Leads'
import Audience_Insights from './pages/Audience_Insights'

import Layout from './components/layouts/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Executive_Cockpit />} />
          <Route path="/executive" element={<Executive_Cockpit />} />
          <Route path="/media-mix-budget" element={<Media_Mix_Budget />} />
          <Route path="/awareness-performance" element={<Awareness_Performance />} />
          <Route path="/consideration-hub" element={<Consideration_Hub />} />
          <Route path="/purchase-leads" element={<Purchase_Leads />} />
          <Route path="/audience-insights" element={<Audience_Insights />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
