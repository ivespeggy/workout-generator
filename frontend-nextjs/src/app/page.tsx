
import Image from 'next/image'
import Navbar from './compoents/NavigationBarComponents/Navbar'
import { SwiperComponent } from './compoents/SwiperComponent';
export default function Home() {
  return (
    <>
      <main className="">
        <div>
        <Navbar/>
        </div>
      <div>
      <SwiperComponent/>
        

      </div>

      </main>
    </>
    )
}
