import './App.css';
import Navbar from './components/App/navbar';
import FixedNav from './components/App/fixedNav';
import AnimRoutes from './components/App/animateRoutes';
import Loader from './pages/Loader';

function App() {
  // const {scrollYProgress} = useScroll()
  // const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh'])

  return (
    <>
    <Loader />
    <div className='relative max-w-[1920px] lg:w-[80%] w-[90%] mx-auto'>
      <FixedNav />
       <Navbar />
       <AnimRoutes />
    </div>
    </>
  );
}

export default App;


// </div>
// <motion.div className={`h-[300vh] w-screen bg-[#f8f8f8] absolute left-0 top-[100vh] z-[100] `} style={{top: translateY}} transition={{duration:15, ease: 'linear'}}>
//     <h1 className='text-[#002d6b] text-3xl'>hello eveyone</h1>
// </motion.div>

