import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ScrollProgress from '@/components/ui/ScrollProgress'
import WhatsAppFab from '@/components/ui/WhatsAppFab'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-blue-600 focus:text-white focus:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsAppFab />
    </>
  )
}
