import Blog from './components/Blogs'
import Cta from './components/Cta'
import Cta2 from './components/Cta2'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Symptoms from './components/Symptoms'

export default function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Cta />
      <Cta2 />
      <Blog />
      <Footer />
    </div>
  )
}
