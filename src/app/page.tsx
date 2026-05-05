import LoadBalancing from "@/components/home/LoadBalancing"
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
    </div>
  )
}

export default Page