import React from 'react'
import Wrapper from '../general/Wrapper'
import { feature } from '../../utils/StaticUtils'
import FeatureCard from './components/FeatureCard'
import { Strings } from '../../utils/Strings'
import SectionTitle from '../general/SectionTitle'

export default function Features() {
  return (
    <section aria-labelledby='features' id='features' className='bg-[#fff] scroll-margin-top'>
      <Wrapper >
        <div className='py-[60px] lg:py-[80px] relative'>
          <SectionTitle title={Strings.Feature.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] xl:gap-[80px]">
            {feature.map((item, index) => (
              <FeatureCard item={item} key={index} />
            ))}
          </div>
        </div>

      </Wrapper>
    </section>
  )
}
