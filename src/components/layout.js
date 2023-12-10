import Footer from './footer';
import { AnalyticsWrapper } from './analytics';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }) {
  return (
    <>
      <div
        className='flex flex-col text'
      >
        {children}
        <Footer />
        <AnalyticsWrapper />
        <SpeedInsights />
      </div>
    </>
  )
}
