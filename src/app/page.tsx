import LoadBalancing from "@/components/home/LoadBalancing"
import CPanel from "@/components/reusables/Cpanel"
import CTA from "@/components/reusables/CTA"
import HostingSolutions from "@/components/reusables/HostingSolution"
import WhyChooseUs from "@/components/reusables/WhyChooseUs"

const Page = () => {
  return (
    <div>
      <WhyChooseUs />
      <CTA />
      <HostingSolutions />
      <LoadBalancing />
      <CPanel />
    </div>
  )
}

export default Page