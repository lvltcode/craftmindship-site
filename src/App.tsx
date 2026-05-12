import { Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cadence from "./pages/Cadence";
import PuppyProgramOs from "./pages/PuppyProgramOs";
import MultiAgentWorkflow from "./pages/MultiAgentWorkflow";
import Analysis from "./pages/Analysis";
import Lab from "./pages/Lab";
import About from "./pages/About";
import TdInsurance from "./pages/TdInsurance";
import CodingBootcamps from "./pages/CodingBootcamps";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work/cadence" element={<Cadence />} />
          <Route path="/work/puppy-program-os" element={<PuppyProgramOs />} />
          <Route path="/work/multi-agent-workflow" element={<MultiAgentWorkflow />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/analysis/td-insurance-telematics" element={<TdInsurance />} />
          <Route path="/analysis/coding-bootcamps-dying" element={<CodingBootcamps />} />
          {/* Redirects from old /writing paths */}
          <Route path="/writing" element={<Navigate to="/analysis" replace />} />
          <Route path="/writing/td-insurance-telematics" element={<Navigate to="/analysis/td-insurance-telematics" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}
