import VansNav from "./components/VansNav"


export default function VanInfoLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <VansNav/>
        
   
        {children}
      </section>
    )
  }