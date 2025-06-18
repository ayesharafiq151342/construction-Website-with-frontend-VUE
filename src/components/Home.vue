<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import {  BookOpenIcon, EyeIcon ,HomeIcon} from '@heroicons/vue/24/solid' 
import Form from './Form.vue'
import image from '../assets/01-scaled.webp'
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
// Carousel project data
import s1 from '../assets/S1.webp'
import s2 from '../assets/S2.webp'
import s3 from '../assets/S3.webp'
import s4 from '../assets/s4.webp'
import s5 from '../assets/s5.webp'


const slides = [
  {
    name: 'Bridge Project',
    src: s1,
    alt: 'Bridge',
    details: 'A large-scale infrastructure project completed in record time.'
  },
  {
    name: 'Skyscraper Build',
    src: s2,
    alt: 'Building',
    details: 'Modern urban skyscraper built using eco-friendly materials.'
  },
  {
    name: 'Residential Complex',
    src: s3,
    alt: 'Residences',
    details: 'Comfortable and modern living spaces delivered to clients.'
  },
  {
    name: 'Skyscraper Build',
    src: s4,
    alt: 'Building',
    details: 'Modern urban skyscraper built using eco-friendly materials.'
  },
  {
    name: 'Skyscraper Build',
    src: s5,
    alt: 'Building',
    details: 'Modern urban skyscraper built using eco-friendly materials.'
  },

]


// Team member data
const teamMembers = [
  {
    name: 'Henry George',
    role: 'Safety Officer',
    image: '/assets/team-1.webp',
    bio: 'Highly skilled and experienced construction expert, known for managing large-scale construction projects.'
  },
  {
    name: 'Alice Smith',
    role: 'Project Manager',
    image: '/assets/team-2.webp',
    bio: 'Brings over 10 years of experience in managing commercial building projects with efficiency and excellence.'
  },
  {
    name: 'John Doe',
    role: 'Structural Engineer',
    image: '/assets/team-4.webp',
    bio: 'Expert in innovative engineering designs with a strong focus on sustainability and safety.'
  }
]
</script>

<template>
   <Navbar/>
   
  <div >
    <!-- Hero Image -->
   <section id="home" class="relative h-[500px] md:h-screen    w-full ">
    <!-- Background Image -->
    <img
      src="../assets/const-hero.jpg"
      alt="Construction Hero"
      class="h-full w-full object-cover"
    />

    <!-- Overlay Content -->
    <div class="absolute inset-0  flex flex-col items-start justify-center text-white bg-black/40 px-4">
      <div class="md:ml-72">
        <h1 class="text-3xl md:text-5xl font-bold text-start mb-4">
        Building Your Vision
      </h1>
      <p class="text-lg md:text-xl text-start  mb-6 max-w-2xl">
        We deliver quality construction services with a focus on durability and design.
      </p>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-lg">
        Get a Quote
      </button></div>
    </div>
  </section>
    <!-- Portfolio Section -->
    <section class="md:my-28" id="about">
      <div class="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row h-auto lg:h-96">
        <!-- Image -->
        <div class="flex-1 p-5 flex justify-center items-center">
          <img src="../assets/03-5.webp" alt="Portfolio" class="h-[500px] rounded rounded-2xl  object-contain" />
        </div>

        <!-- Text -->
        <div class="flex-1 flex flex-col justify-center items-start text-black px-4">
          <h1 class="text-sm sm:text-lg md:text-xl lg:text-3xl p-2 text-center">
            Explore Our Construction Portfolio
          </h1>
          <h3 class="text-sm sm:text-base md:text-lg lg:text-xl py-2 text-justify">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem.
          </h3>
          <p class="text-xs sm:text-sm md:text-base py-2 text-justify">
            Elever Architecture is a New-York-based studio practice focused on modern design, interiors and landscapes.
            Since 2007, we have delivered exceptional environments that are stimulating and contextual.
          </p>

          <!-- Author Info -->
          <div class="flex items-center mt-4">
            <img src="../assets/04-1.webp" alt="Markus Danile" class="w-16 pr-5" />
            <div>
              <h3 class="text-sm sm:text-base md:text-lg lg:text-xl">Markus Danile</h3>
              <p class="text-sm">Architect Studio</p>
            </div>
            <img src="../assets/05-1.webp" class="ml-5 w-16" />
          </div>
        </div>
      </div>
    </section>

    <!-- Background Image Section -->
    <div class="md:w-full min-h-screen my-10 w-ful  bg-center bg-cover bg-no-repeat flex flex-col"
      :style="{ backgroundImage: `url(${image})` }">
      <!-- Section Heading -->
      <h3 class="text-sm mt-20 text-yellow-400 text-center pt-6 sm:text-base md:text-lg lg:text-xl">
        Recent Projects
      </h3>
      <h1 class="text-sm sm:text-lg mt-5 md:text-xl lg:text-3xl p-2 text-center text-white">
        Our Completed Projects
      </h1>

      <!-- Swiper Carousel -->
      <div id="Portfoliio" class="w-full relative my-20 px-4">
        <Swiper :modules="[Pagination]" :loop="true" :centeredSlides="true" :slideToClickedSlide="true"
          :spaceBetween="30" :pagination="{ clickable: true }" :breakpoints="{
            1920: { slidesPerView: 4, spaceBetween: 30 },
            1028: { slidesPerView: 2, spaceBetween: 10 },
            990: { slidesPerView: 1, spaceBetween: 0 }
          }" class="centered-slide-carousel">
          <SwiperSlide v-for="(img, i) in slides" :key="i">
            <div class="relative h-96 w-full border-2 border-gray-100 overflow-hidden rounded-2xl group">
              <!-- Project Name -->
              <div
                class="absolute top-4 left-4 bg-black bg-opacity-60 text-white text-lg font-semibold px-4 py-2 rounded-md z-10">
                {{ img.name }}
              </div>

              <!-- Hover Arrow -->
              <button
                class="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-white p-2 rounded-full shadow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <!-- Details Box -->
              <div
                class="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-300">

                <h2 class="text-xl font-bold mb-2">{{ img.name }}</h2>
                <p class="text-sm">{{ img.details }}</p>
              </div>

              <!-- Image -->
              <img :src="img.src" :alt="img.alt" class="h-full w-full object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Team Heading -->
     <section id="team" > <h3 class="text-sm text-yellow-400 text-center pt-6 sm:text-base md:text-lg lg:text-xl">
        Expert Team Members
      </h3>
      <h1 class="text-sm sm:text-lg md:text-xl lg:text-3xl p-2 text-center text-white">
        Meet The Awesome Team
      </h1>

      <!-- Team Cards -->
      <div class="grid lg:grid-flow-col  mb-20 m-auto grid-rows-2 w-96 md:w-[70%] md:h-[20.5%]  mt-20 gap-4">
        <!-- Left: Main Profile Card spanning all rows -->
        <div class="row-span-3 bg-gray-800 lg:h-[564px] rounded-lg p-4 flex flex-col items-center text-white">
          <img src="../assets/team-1.webp" class=" object-cover rounded-md" />
          <h1 class="text-2xl lg:text-3xl mt-6 w-full pl-3">Henry George</h1>
          <h3 class="text-lg lg:text-xl text-yellow-400 w-full pl-4">Safety Officer</h3>
          <p class="text-sm md:w-[90%] pl-4 mt-3">
            Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale
            construction projects.
          </p>
        </div>

        <!-- Top Right -->
       <div class="bg-gray-800 rounded-lg w-full p-4 text-white">
  <div class="flex flex-col md:flex-row">
    <!-- Image (Top on mobile, right on desktop) -->
    <div class="w-full md:w-1/2 order-1 md:order-2 mt-4 md:mt-0">
      <img
        src="../assets/team-2.webp"
        alt="Benjamin Clarke"
        class="md:w-[80%] w-full h-[90%] m-auto object-cover rounded-md"
      />
    </div>

    <!-- Text Content -->
    <div class="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-2 md:pl-6">
      <h1 class="text-2xl lg:text-3xl mt-4 md:mt-6">Benjamin Clarke</h1>
      <h3 class="text-lg lg:text-xl text-yellow-400 mt-2">Architect Designer</h3>
      <p class="text-sm mt-3 text-justify">
        Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale
        construction projects.
      </p>
    </div>
  </div>
</div>
   <div class="bg-gray-800 rounded-lg w-full p-4 text-white">
  <div class="flex flex-col md:flex-row">
    <!-- Image (Top on mobile, right on desktop) -->
    <div class="w-full md:w-1/2 order-1 md:order-2 mt-4 md:mt-0">
      <img
        src="../assets/team-2.webp"
        alt="Benjamin Clarke"
        class="md:w-[80%] w-full h-[90%] m-auto object-cover rounded-md"
      />
    </div>

    <!-- Text Content -->
    <div class="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-2 md:pl-6">
      <h1 class="text-2xl lg:text-3xl mt-4 md:mt-6">homas Bryant</h1>
      <h3 class="text-lg lg:text-xl text-yellow-400 mt-2">Civil Engineer</h3>
      <p class="text-sm mt-3 text-justify">
        Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale
        construction projects.
      </p>
    </div>
  </div>
</div>
      </div></section>
    </div>

  </div>
  <section id="services" class="bg-[#f1eee9] py-10 px-4">
  <!-- Background Image -->
       <div class="flex mt-20 w-full lg:w-[70%] m-auto">
      <div class="flex-1">

        <h1 class="text-2xl lg:text-4xl mt-6 w-full pl-3 ">We Provide Demanding Service</h1>
        <p class="text-sm md:text-lg md:w-[90%] pl-4 mt-3">
          Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem. Id
          molestie mi arcu gravida lorem potenti. </p>
      </div>
      <div class="flex-1  ">
        <button
          class="bg-yellow-500 hover:bg-yellow-600 md:text-4xl text-sm text-white px-6 py-2 p-20 mt-16 mb-10 lg:ml-64 rounded-lg hover:bg-blue-700 transition duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  <div
    class="relative mt-20 rounded-lg overflow-hidden max-w-7xl mx-auto"
    style="background-image: url('../assets/01-scaled.webp'); background-size: cover; background-position: center;"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#ecb754] via-[#ecb754]/80 to-transparent"></div>

    <!-- Cards Container -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 py-12">
      <!-- Card 1 -->
      <div class="bg-white rounded-lg p-6 shadow-md relative">
        <div class="absolute -top-6 left-6 bg-yellow-500 p-3 rounded-md text-white text-2xl">
                 <HomeIcon class="h-6 w-6 text-gray-800" />

        </div>
        <div class="text-5xl text-gray-200 font-bold absolute top-4 right-6">01</div>
        <h3 class="mt-6 font-bold text-lg">Sustainable System</h3>
        <p class="text-sm text-gray-600 mt-2">
          Eco-friendly systems designed to reduce environmental impact, enhance efficiency, and support long-term sustainability goals.
        </p>
        <a href="#" class="text-yellow-600 mt-4 inline-block font-semibold text-sm">
          Read More →
        </a>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-lg p-6 shadow-md relative">
        <div class="absolute -top-6 left-6 bg-yellow-500 p-3 rounded-md text-white text-2xl">
               <EyeIcon class="h-6 w-6 text-gray-800" />

        </div>
        <div class="text-5xl text-gray-200 font-bold absolute top-4 right-6">02</div>
        <h3 class="mt-6 font-bold text-lg">Structural Engineering</h3>
        <p class="text-sm text-gray-600 mt-2">
          Reliable structural engineering ensuring safe, code-compliant, and innovative designs for lasting building performance and stability.
        </p>
        <a href="#" class="text-yellow-600 mt-4 inline-block font-semibold text-sm">
          Read More →
        </a>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-lg p-6 shadow-md relative">
        <div class="absolute -top-6 left-6 bg-yellow-500 p-3 rounded-md text-white text-2xl">
        <BookOpenIcon class="h-6 w-6 text-gray-800" />
        </div>
        <div class="text-5xl text-gray-200 font-bold absolute top-4 right-6">03</div>
        <h3 class="mt-6 font-bold text-lg">Design Build Services</h3>
        <p class="text-sm text-gray-600 mt-2">
          End-to-end design-build solutions combining planning, design, and construction for seamless and efficient project delivery.
        </p>
        <a href="#" class="text-yellow-600 mt-4 inline-block font-semibold text-sm">
          Read More →
        </a>
      </div>
    </div>
  </div>
</section>


  <div class="bg-[#f5f3ef] py-10  px-4 md:px-16">
    <div class="max-w-7xl mx-auto mt-20 mb-20 grid md:grid-cols-2 gap-8 items-center">
      <!-- Left Image Section -->
      <div class="relative rounded-lg overflow-hidden">
        <img src="../assets/01-3.webp" alt="Construction Worker" class="rounded-lg" />
        
      </div>

      <!-- Right Text Section -->
      <div>
        <p class="text-orange-500 font-semibold uppercase mb-2">How We Works</p>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
          How To Work With Elever<br />Construction Builder
        </h2>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="bg-orange-100 text-yellow-600 w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm">
              1
            </div>
            <div>
              <h3 class="font-bold text-lg">Consultation & Planning</h3>
              <p class="text-gray-700 text-sm">
                We begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-orange-100 text-yellow-600 w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm">
              2
            </div>
            <div>
              <h3 class="font-bold text-lg">Design & Pre-Construction</h3>
              <p class="text-gray-700 text-sm">
                Elever begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-orange-100 text-yellow-600 w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm">
              3
            </div>
            <div>
              <h3 class="font-bold text-lg">Construction & Delivery</h3>
              <p class="text-gray-700 text-sm">
                Working begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Form/>
<Footer/>
</template>

<style scoped>
.swiper-pagination-bullet {
  background: #facc15;
  /* Tailwind's yellow-400 */
}

.swiper-pagination-bullet-active {
  background: #facc15 !important;
}
</style>
