import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <div
        className='d-flex flex-column text'
      >
        {children}
        <Footer />
      </div>
    </>
  )
}