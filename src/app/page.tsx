import LoadBalancing from "@/components/home/LoadBalancing"
import ComparisonTable from "@/components/reusables/ComparisonTable"
import CPanel from "@/components/reusables/Cpanel"
import CTA from "@/components/reusables/CTA"
import HostingSolutions from "@/components/reusables/HostingSolution"
import WhyChooseUs from "@/components/reusables/WhyChooseUs"
import Experts from "./(general)/contact/components/Experts"

const Page = () => {
  return (
    <div>
      <WhyChooseUs />
      <CTA />
      <HostingSolutions />
      <LoadBalancing />
      <CPanel />
      <ComparisonTable />
      <Experts />
    </div>
  )
}

export default Page