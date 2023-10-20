import { services } from '../constants/index'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />
      })}
    </section>
  )
}

export default Services

// {
//   imgURL: truckFast,
//   label: "Free shipping",
//   subtext: "Enjoy seamless shopping with our complimentary shipping service."
// },