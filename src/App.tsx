import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cadence from "./pages/Cadence";
import PuppyProgramOs from "./pages/PuppyProgramOs";
import MultiAgentWorkflow from "./pages/MultiAgentWorkflow";
import Writing from "./pages/Writing";
import About from "./pages/About";
import TdInsurance from "./pages/TdInsurance";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work/cadence" element={<Cadence />} />
          <Route path="/work/puppy-program-os" element={<PuppyProgramOs />} />
          <Route path="/work/multi-agent-workflow" element={<MultiAgentWorkflow />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/td-insurance-telematics" element={<TdInsurance />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
