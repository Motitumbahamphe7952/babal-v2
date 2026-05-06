import LoadBalancing from "@/components/home/LoadBalancing"
import ComparisonTable from "@/components/reusables/ComparisonTable"
import CPanel from "@/components/reusables/Cpanel"
import CTA from "@/components/reusables/CTA"
import HostingSolutions from "@/components/reusables/HostingSolution"
import WhyChooseUs from "@/components/reusables/WhyChooseUs"
import Experts from "./(general)/contact/components/Experts"
import Review from "@/components/reusables/Review"
import FAQ from "@/components/reusables/FAQ"
import Banner from "@/components/reusables/Banner"

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
      <Banner />
      <Review />
      <FAQ />
    </div>
  )
}

export default Page