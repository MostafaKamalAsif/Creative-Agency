import Image from 'next/image'
import Flex from './Flex'
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioCard = ({ imgsrc, title, alt }) => {
  return (
    <div className="relative group overflow-hidden rounded-[10px]">
      {/* Image */}
      <Image
        src={imgsrc}
        alt={alt}
        className="transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hidden overlay (shows on hover) */}
      <div className="absolute left-5 bottom-5 w-[230px] bg-[#5956E8] rounded-[10px] py-6 text-center opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-xl font-semibold pb-5 text-white">{title}</h3>
        <Flex className={'gap-x-5 px-13.5 justify-center items-center'}>
          <p className="text-white">See Details</p>
          <FaArrowRightLong className="text-white" />
        </Flex>
      </div>
    </div>
  )
}

export default PortfolioCard
