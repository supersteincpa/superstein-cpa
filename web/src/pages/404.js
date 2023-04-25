import * as React from 'react'
import Seo from '../components/seo'
import { Heading } from '../components/Heading'
import Layout from '../components/Layout/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
    <div className='w-full h-auto flex justify-center items-center flex-col max-w-[1512px] mx-auto bg-primary_blue_50 py-32 mt-14 '>
      <Heading
          type="h1"
          otherClasses="text-center font-raleway font-semibold text-primary_green_800 mb-8"
        >
          Hmm, something isn't adding up here...
        </Heading>
        <p className='font-Public_Sans font-medium text-primary_blue_600 text-[20px]  text-center mb-9'>
        We're sorry, but the requested page could not be found.
        </p>
        <a href='/' className='`px-6 lg:px-[36px] py-[5px] lg:py-[7px] bg-addition_button_color rounded-full text-sm lg:text-lg font-normal text-white font-Poppins leading-6 primary_button_hover_transition'> Back to Home</a>
    </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="404: Not Found | Superstein-CPA" />
)

export default NotFoundPage
