import Footer from './footer';
import { AnalyticsWrapper } from './analytics';

export default function Layout({ children }) {
  return (
    <>
      <div
        className='d-flex flex-column text'
      >
        {children}
        <Footer />
        <AnalyticsWrapper />
      </div>
    </>
  )
}
