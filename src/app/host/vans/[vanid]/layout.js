import VansNav from "./components/VansNav"
import HostCurrentVanPage from "./components/HostCurrentVanPage"

export default function VanInfoLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {/* <VansNav/>
        <HostCurrentVanPage/> */}
   
        {children}
      </section>
    )
  }