import Image from 'next/image'
import Navbar from './compoents/NavigationBarComponents/Navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <strong>home</strong>
    </main>
    )
}
