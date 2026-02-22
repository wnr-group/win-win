import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, openQuoteModal }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openQuoteModal={openQuoteModal} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
