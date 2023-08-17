import Footer from './footer';
import { AnalyticsWrapper } from './analytics';

export default function Layout({ children }) {
  return (
    <>
      <div
        className='flex flex-col text'
      >
        {children}
        <Footer />
        <AnalyticsWrapper />
      </div>
    </>
  )
}
