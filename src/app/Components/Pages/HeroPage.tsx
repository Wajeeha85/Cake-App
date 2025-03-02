import { ColourfulTextDemo } from './ColourfullText'
import Button from './Button'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <div className='bg-Pale h-screen w-full flex flex-row items-center'>
      {/* Left Side - Image */}
      <div className="flex-start">
        <Image 
          src="/deva-williamson-pZZJwwNPy2k-unsplash.jpg"
          alt="Hero Image"
          width={380}
          height={80}
          className="rounded-xl shadow-xl m-6"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="flex flex-col items-center">
        <ColourfulTextDemo />
        <a href="#CakesPage">
          <Button title="Explore Cakes" icon={<FaLocationArrow />} position="right" className="mt-4" />
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
