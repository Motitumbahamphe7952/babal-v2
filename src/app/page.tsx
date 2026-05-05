import LoadBalancing from "@/components/home/LoadBalancing"
import ComparisonTable from "@/components/reusables/ComparisonTable"
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
      <ComparisonTable />
    </div>
  )
}

export default Page