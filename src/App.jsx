import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import DailyCorrection from './components/DailyCorrection'
import Solution from './components/Solution'
import ServiceDetails from './components/ServiceDetails'
import DemoVideo from './components/DemoVideo'
import Flow from './components/Flow'
import Pricing from './components/Pricing'
import TrialFlow from './components/TrialFlow'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Hero />
      <Problem />
      <DailyCorrection />
      <Solution />
      <ServiceDetails />
      <DemoVideo />
      <Flow />
      <Pricing />
      <TrialFlow />
      <CTA />
      <Footer />
    </>
  )
}

export default App
