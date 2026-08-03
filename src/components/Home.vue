<template>
  <div ref="pageRoot">
    
    <!-- ============================================ -->
    <!-- SECTION 1: HERO BANNER                       -->
    <!-- ============================================ -->
    <div
      ref="heroSection"
      class="relative w-full overflow-hidden my-4 min-h-[550px] md:min-h-[650px] lg:min-h-[750px]"
      @mousemove="handleHeroMouseMove"
      @mouseleave="resetHeroTilt"
    >
      <!-- Hero Background Glow -->
      <div
        data-parallax
        class="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[600px] md:h-[900px] bg-gradient-to-br from-blue-400/10 via-emerald-200/5 to-purple-200/5 blur-[100px] md:blur-[160px] rounded-full pointer-events-none z-0"
      ></div>

      <div class="relative z-10 px-4 md:px-14 xl:px-14 lg:pt-14 xl:pt-12">
        <div class="max-w-[1250px] mx-auto xl:mx-2 xl:mb-10 2xl:max-w-[70%]">
          <div class="relative z-10 ">
            <h1
              data-hero-el
              class="text-[40px] sm:mr-6 md:text-[60px] lg:text-[85px] xl:text-[95px] xl:font-semibold inline-block text-6xl font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent lg:mx-6 xl:mx-6 "
            >
              Innovate, transform &amp;
              <span class="bg-gradient-to-r from-[#185464]/80 via-gray-800 to-gray-900 to-70% bg-clip-text text-transparent">
                achieve real results with Invictus Hub
              </span>
            </h1>
          </div>

          <div data-hero-el class="flex items-end justify-start my-4 md:justify-end">
            <router-link to="/about" class="group">
              <button
                class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
        <HeroScene3D />
      </div>

      <!-- Hero Info Cards -->
      <div
        class="flex flex-col items-stretch justify-center w-full gap-2 mt-10 Main lg:flex-row lg:items-stretch lg:gap-1 xl:mt-10"
      >
        <!-- Left Card -->
        <div data-reveal class="relative bg-gradient-to-b from-gray-900 via-gray-800 to-[#082b35] lg:mx-1 rounded-3xl md:rounded-3xl px-4 lg:px-8 xl:px-10 pt-6 xl:pt-12 pb-4 xl:pb-8 w-full lg:flex-[30%] lg:w-0">
          <CardAnimationOne />
          <div class="flex justify-start gap-2 mb-4">
            <router-link to="/projects" class="inline-flex items-center rounded-full bg-white px-3 lg:px-4 py-1 lg:py-2 text-black text-base h-6 lg:h-10 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white transition-all duration-300">
              Projects
            </router-link>
            <router-link to="/services" class="inline-flex items-center rounded-full bg-white px-3 lg:px-4 py-1 lg:py-2 text-black text-base h-6 lg:h-10 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white transition-all duration-300">
              Services
            </router-link>
          </div>

          <h2 class="mt-6 text-2xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl lg:my-10">
            Driving Your Growth with Smart Solutions
          </h2>

          <p class="my-4 text-base font-semibold text-white lg:leading-relaxed xl:leading-8 xl:mb-24">
            From concept to completion, we craft innovative projects and deliver tailored services
            that boost your competitiveness, enhance efficiency, and help your business thrive in
            the digital age.
          </p>

          <div class="flex items-start justify-start">
            <router-link to="/services" class="group">
              <div class="text-white text-lg md:text-lg mt-1 pb-0.5 flex items-center gap-2 group border-b border-current">
                Explore More
                <svg class="w-auto h-4 transition-all duration-300 md:h-5 lg:h-6 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Right Card -->
        <div data-reveal class="card bg-gradient-to-r from-[#185464] to-[#13404c] lg:mx-1 p-5 rounded-3xl rounded-br-[2rem] text-white flex justify-between relative isolate w-full lg:flex-[65%] lg:w-0">
          <div class="flex flex-col justify-left items-left w-[55%] xl:w-[30%] 2xl:w-[50%] md:w-[45%] mb-10 md:mb-8 xl:mx-12 2xl:mx-20 xl:mt-14">
            <h3 ref="counterElement" class="text-[60px] lg:text-[108px] lg:mx-8 xl:mx-0 font-extrabold">
              {{ count }}+
            </h3>
            <h3 class="text-xl font-semibold lg:mx-8 xl:mx-0">countries served</h3>
            <h2 class="mt-4 text-3xl font-medium md:text-4xl lg:text-5xl lg:mt-32 xl:mt-8">
              Trusted by 120+ clients around the world
            </h2>
          </div>

          <div class="absolute right-2 bottom-8 sm:right-6 md:right-10 lg:right-8 lg:top-1/2 xl:top-[45%] lg:-translate-y-1/2 flex items-center justify-center h-[70%] lg:max-h-[70%] xl:max-h-[80%] 2xl:max-w-[90%] w-auto overflow-visible">
            <img
              class="w-[10rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[17rem] object-contain max-h-full opacity-[80%]"
              src="../assets/logoji.webp"
              alt="Invictus Hub Logo"
              loading="lazy"
              width="170"
              height="170"
            />
          </div>

          <div class="absolute bottom-0 right-0 z-20 overflow-visible">
            <div class="relative inline-block overflow-visible">
              <div class="absolute -inset-[2px] z-20 rounded-3xl bg-white"></div>
              <div class="absolute -top-[20px] right-0 h-[18px] w-[36px] rounded-br-3xl bg-transparent shadow-[11px_11px_0_10px_#fff] z-30"></div>
              <div class="absolute bottom-0 -left-[20px] h-[36px] w-[18px] rounded-br-3xl bg-transparent shadow-[11px_11px_0_10px_#fff] z-30"></div>
              <router-link to="/contact" class="relative z-40 flex items-center justify-between rounded-3xl bg-white px-6 py-3 text-xl font-semibold text-black md:px-10 lg:px-[4rem] lg:py-8">
                <svg class="w-auto h-5 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                </svg>
                <p class="lg:mx-2">Contact Us</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 2: EXPERIENCE INNOVATIONS BANNER     -->
    <!-- ============================================ -->
    <div class="bg-gradient-to-b from-white via-[#e2f1fa]/[90%] to-white rounded-3xl relative z-20 overflow-hidden border border-white/20 py-4 md:pt-10 lg:py-8 lg:pt-20 xl:pt-2 w-full left-1/2 -translate-x-1/2">
      
      <!-- SUBTLE ANIMATED BACKGROUND - Very Light -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <!-- Floating gradient orbs - barely visible -->
        <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl animate-float-slow"></div>
        <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl animate-float-slower"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-400/3 blur-3xl animate-pulse-slow"></div>
        
        <!-- Subtle shimmer line -->
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
        
        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(43,182,196,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(43,182,196,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <CyberBurstBg />
      
      <div class="relative z-20 mt-10 min-h-[220px] md:min-h-[320px] lg:min-h-[420px] 2xl:h-full">
        <h2
          data-reveal
          class="text-[40px] md:text-[60px] w-full text-left my-2 sm:my-6 px-3 md:my-10 md:pl-28 lg:my-4 lg:pl-36 lg:text-[85px] xl:my-16 2xl-[my-18] xl:pl-44 xl:text-[95px] min-[1500px]:pl-[clamp(10rem,14vw,24rem)] min-[1800px]:pl-[clamp(14rem,18vw,30rem)] min-[2000px]:text-[100px] min-[2000px]:w-[90%] xl:font-semibold inline-block text-6xl font-semibold bg-gradient-to-r from-[#0c405a] from-[35%] via-[#2BB6C4] to-[#0c405a] to-[60%] bg-clip-text text-transparent 2xl:w-[80%]"
        >
          Experience real-time innovation—seamless, reliable, and stress-free.
        </h2>
        <img
          data-parallax
          src="../assets/sidebannerlogo.webp"
          alt="banner image"
          class="absolute top-0 left-0 object-contain w-20 h-full md:opacity-40 opacity-5 md:w-16 lg:w-24"
          width="96"
          height="400"
          loading="lazy"
        />
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 3: SERVICES HEADER                   -->
    <!-- ============================================ -->
    <div class="my-6 lg:my-8 mx-1 md:mx-16 min-[1500px]:mx-[10%] xl:my-10 2xl:my-16 max-w-[1450px]">
      <h2 data-reveal class="mb-2 font-semibold lg:mx-2 xl:mx-0">[ services ]</h2>
      <div class="flex flex-col lg:flex-row lg:justify-between lg:mx-2">
        <div>
          <h2 data-split class="text-[30px] md:text-[35px] lg:text-[50px] text-gray-900 xl:text-[70px] xl:font-semibold inline-block text-6xl font-semibold">
            Services and solutions we provide.
          </h2>
        </div>
        <div data-reveal class="flex justify-start lg:justify-end lg:items-end lg:w-[30%]">
          <router-link to="/services" class="group">
            <button class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300 my-6">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 4: SERVICE CARDS (Video on Hover)    -->
    <!-- ============================================ -->
   <div
  data-reveal-group
  class="flex mb-16 flex-col justify-center gap-8 md:flex-row item-center md:gap-8"
>
  <!-- Card 1: Website Development -->
  <div
    class="card-video card1 relative isolate bg-gray-900 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between md:flex-1 min-h-[320px] group/video"
    @mouseenter="playVideo('video-website')"
    @mouseleave="pauseVideo('video-website')"
  >
    <!-- Clipping layer for video + gradient -->
    <div class="absolute inset-0 z-0 overflow-hidden rounded-3xl rounded-br-[2rem]">
      <video
        id="video-website"
        class="absolute inset-0 w-full h-full object-cover"
        muted
        playsinline
        preload="metadata"
        loop
        aria-label="Website development showcase video"
      >
        <source src="../assets/videos/website.mp4" type="video/mp4" />
        <track kind="captions" srclang="en" label="English" default />
      </video>
      <div class="absolute inset-0 bg-gradient-to-r from-[#185464]/80 via-[#13404c]/60 to-transparent transition-opacity duration-500 group-hover/video:opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%] relative z-20">
      <h3 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">Website Development</h3>
      <p class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
        We build professional responsive websites optimized for the most popular search engines
      </p>
    </div>

    <div>
      <div>
        <img class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]" src="../assets/logoji.webp" alt="Website Development" loading="lazy" width="138" height="138" />
      </div>
      <div class="absolute bottom-0 right-0 z-20 overflow-visible">
        <div class="relative inline-block overflow-visible">
          <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
          <div class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"></div>
          <div class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"></div>
          <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
            <router-link to="/services/web-development" class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5" aria-label="Learn more about Web Development services">
              <svg width="100%" height="100%" class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2: Mobile Applications -->
  <div
    class="card-video card2 relative isolate bg-gray-500 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between md:flex-1 min-h-[320px] group/video"
    @mouseenter="playVideo('video-app')"
    @mouseleave="pauseVideo('video-app')"
  >
    <!-- Clipping layer for video + gradient -->
    <div class="absolute inset-0 z-0 overflow-hidden rounded-3xl rounded-br-[2rem]">
      <video
        id="video-app"
        class="absolute inset-0 w-full h-full object-cover"
        muted
        playsinline
        preload="metadata"
        loop
        aria-label="Mobile applications showcase video"
      >
        <source src="../assets/videos/app.mp4" type="video/mp4" />
        <track kind="captions" srclang="en" label="English" default />
      </video>
      <div class="absolute inset-0 bg-gradient-to-r from-[#185464]/80 via-[#13404c]/60 to-transparent transition-opacity duration-500 group-hover/video:opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%] relative z-20">
      <h3 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">Mobile Applications</h3>
      <p class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
        Follow the global trend and create your revolutionary mobile app built with the best technologies
      </p>
    </div>

    <div>
      <div>
        <img class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]" src="../assets/logoji.webp" alt="Mobile Applications" loading="lazy" width="138" height="138" />
      </div>
      <div class="absolute bottom-0 right-0 z-20 overflow-visible">
        <div class="relative inline-block overflow-visible">
          <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
          <div class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"></div>
          <div class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"></div>
          <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
            <router-link to="/services/app-development" class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5" aria-label="Learn more about App Development services">
              <svg width="100%" height="100%" class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 3: E-Commerce Solutions -->
  <div
    class="card-video card3 relative isolate bg-gray-500 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between md:flex-1 min-h-[320px] group/video"
    @mouseenter="playVideo('video-ecommerce')"
    @mouseleave="pauseVideo('video-ecommerce')"
  >
    <!-- Clipping layer for video + gradient -->
    <div class="absolute inset-0 z-0 overflow-hidden rounded-3xl rounded-br-[2rem]">
      <video
        id="video-ecommerce"
        class="absolute inset-0 w-full h-full object-cover"
        muted
        playsinline
        preload="metadata"
        loop
        aria-label="E-commerce solutions showcase video"
      >
        <source src="../assets/videos/design.mp4" type="video/mp4" />
        <track kind="captions" srclang="en" label="English" default />
      </video>
      <div class="absolute inset-0 bg-gradient-to-r from-[#185464]/80 via-[#13404c]/60 to-transparent transition-opacity duration-500 group-hover/video:opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%] relative z-20">
      <h3 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">E-Commerce Solutions</h3>
      <p class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
        Increase your sales with an incredible online store, full of features and functionality
      </p>
    </div>

    <div>
      <div>
        <img class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]" src="../assets/logoji.webp" alt="E-Commerce Solutions" loading="lazy" width="138" height="138" />
      </div>
      <div class="absolute bottom-0 right-0 z-20 overflow-visible">
        <div class="relative inline-block overflow-visible">
          <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
          <div class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"></div>
          <div class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"></div>
          <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
            <router-link to="/services/design-and-development" class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5" aria-label="Learn more about Design and Development services">
              <svg width="100%" height="100%" class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- ============================================ -->
    <!-- SECTION 5: TECH WE USE                       -->
    <!-- ============================================ -->
    <div
      data-reveal
      class="relative overflow-hidden rounded-3xl my-6 md:mt-20 bg-gradient-to-br from-[#050a14] via-[#0a1a3a] to-[#0a0a1a] px-2 py-10 md:py-14 text-white"
    >
      <div
        class="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#2bb6c4]/10 blur-[100px]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mb-8 px-4 text-center md:mb-12 lg:px-8">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2bb6c4]">Our Toolkit</p>
        <h2 class="text-[26px] font-semibold md:text-[32px] lg:text-[38px] 2xl:text-[41px]">Tech We Use</h2>
      </div>

      <div class="tech-marquee relative z-10">
        <div class="tech-row tech-row--forward">
          <div
            v-for="(tech, i) in [...techStack, ...techStack, ...techStack]"
            :key="'row1-' + tech.name + i"
            class="tech-tile"
          >
            <img
              :src="tech.img"
              :alt="tech.name + ' logo'"
              loading="lazy"
              decoding="async"
              class="tech-tile__logo"
              width="64"
              height="64"
            />
            <p class="tech-tile__label">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 6: ABOUT US                         -->
    <!-- ============================================ -->
    <div
      data-reveal
      class="mt-20 mb-10 rounded-3xl bg-gradient-to-r from-gray-50 via-[#A9C8DA] to-gray-200 px-8 py-6 relative md:mx-2 lg:mb-20 lg:pl-[16rem] xl:pl-[18rem] min-[1500px]:mx-[10%] min-[1500px]:py-6 max-w-[1450px]"
    >
      <h2 class="font-semibold md:my-2 xl:mx-16">[ About ]</h2>
      <h2 class="text-[29px] md:text-[35px] text-gray-900 font-semibold lg:text-[60px] xl:text-[65px] 2xl:text-[60px] xl:font-semibold inline-block text-6xl my-2 md:my-4 xl:my-2 xl:mx-16">
        Bringing Your Business to Life Through Innovation
      </h2>
      <p class="inline-block mt-6 text-base text-left text-gray-900 lg:leading-loose lg:text-lg xl:mx-16">
        For over 10 years, we have been developing digital solutions for companies looking to scale
        up their business and gain greater visibility online. <br />Our priority is to understand
        your specific needs and help you improve your competitiveness and efficiency. Offering
        innovative solutions requires sophisticated knowledge and technological advancement.
      </p>
      <div class="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center xl:mt-10 xl:mx-16 gap-6 my-6">
        <div class="flex justify-start my-3 group">
          <router-link to="/about">
            <button class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </router-link>
        </div>
        <div class="flex flex-col items-start sm:items-center justify-between gap-2 md:gap-4 md:items-center md:flex-row md:w-full lg:w-auto">
          <div>
            <h2 ref="counterElement1" class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent md:text-[70px] xl:text-[90px] 2xl:text-[80px] xl:font-normal inline-block text-6xl my-2">
              {{ count1 }}+
            </h2>
          </div>
          <div class="md:w-[60%] lg:w-full">
            <h3 class="text-[16px] font-semibold md:text-end">Successfully completed great projects</h3>
          </div>
        </div>
      </div>
      <div class="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 object-fit w-[15%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] h-full overflow-hidden rounded-3xl">
        <div class="relative w-full h-full overflow-hidden rounded-3xl">
          <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=800&fit=crop" alt="banner image" class="w-full h-full object-cover opacity-50" loading="lazy" width="600" height="800" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#185464]/30 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 7: PROJECT BUILDS                    -->
    <!-- ============================================ -->
    <div class="ProjectBuilds bg-gradient-to-r from-[#185464] to-[#13404c] rounded-3xl text-white py-10 px-1">
      <div class="flex flex-col items-start justify-between gap-6 mx-4 md:flex-row xl:justify-around lg:items-end lg:mx-auto max-w-[1450px] lg:px-16">
        <div class="w-full sm:w-[78%] lg:w-[70%] mx-2">
          <h2 data-reveal class="my-2 font-semibold">[ Projects ]</h2>
          <h2 data-split class="text-[29px] md:text-[40px] lg:text-[50px] xl:text-[58px] xl:font-semibold inline-block text-6xl font-bold my-2">
            We have already built amazing things for our customers.
          </h2>
        </div>
        <div data-reveal class="flex justify-end xl:justify-center lg:w-[30%] my-4">
          <router-link to="/projects" class="group">
            <button class="flex items-center gap-2 rounded-2xl border border-[#2bb6c4] text-white bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300">
              More Projects
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </router-link>
        </div>
      </div>

      <div
        ref="projectCardsGrid"
        style="perspective: 1600px;"
        class="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-[2px] items-stretch w-full max-w-[1450px] mx-auto"
      >
        <div
          v-for="(project, index) in homeProjects"
          :key="project.id"
          :data-project-card="index"
          class="sm:w-[45%] md:w-[45%] my-4 project-card transition-transform duration-500 hover:-translate-y-3"
          style="transform-style: preserve-3d;"
          @mouseenter="playProjectVideo('project-video-' + project.id)"
          @mouseleave="pauseProjectVideo('project-video-' + project.id)"
        >
          <router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug } }">
            <div class="flex flex-col justify-center h-full px-2 py-4 mx-2 bg-white Cards rounded-3xl item-center">
              <div class="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 relative">
                <div class="relative w-full aspect-[16/9] p-2">
                  <svg viewBox="6 6 514.96 310" class="w-full h-full">
                    <defs>
                      <linearGradient id="bg-gradient-home" x1="42.21" y1="128.56" x2="520.44" y2="128.56" gradientTransform="translate(-2.64 23.39)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#109a5c" stop-opacity=".15" />
                        <stop offset=".94" stop-color="#109a5c" />
                      </linearGradient>
                      <linearGradient id="laptop-gradient-home" x1="261.76" y1="306.92" x2="267.11" y2="3.5" gradientTransform="translate(528.81 314.1) rotate(-180)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#109a5c" stop-opacity=".6" />
                        <stop offset=".99" stop-color="#109a5c" stop-opacity=".3" />
                      </linearGradient>
                      <linearGradient id="screen-glare" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05" />
                        <stop offset="30%" stop-color="#ffffff" stop-opacity="0.02" />
                        <stop offset="70%" stop-color="#ffffff" stop-opacity="0" />
                        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.01" />
                      </linearGradient>
                    </defs>

                    <rect x="6" y="6" width="515" height="310" rx="12" fill="url(#bg-gradient-home)" opacity="0.1" />

                    <g transform="translate(10, 10)">
                      <g transform="translate(230, 235)">
                        <path d="M45,28 L55,0 L65,28 Z" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="1" />
                        <rect x="10" y="26" width="90" height="6" rx="3" fill="#d0d0d0" stroke="#b0b0b0" stroke-width="0.5" />
                        <rect x="10" y="26" width="90" height="2" rx="1" fill="#ffffff" opacity="0.2" />
                        <rect x="48" y="-4" width="14" height="8" rx="2" fill="#b0b0b0" stroke="#909090" stroke-width="0.5" />
                      </g>

                      <rect x="240" y="220" width="100" height="12" rx="3" fill="#3a3a3a" />
                      <rect x="120" y="195" width="340" height="35" rx="3" fill="#333" opacity="0.4" />
                      <rect x="85" y="10" width="400" height="215" rx="10" fill="#1a1a1a" />

                      <foreignObject x="90" y="15" width="390" height="205" rx="4">
                        <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%;position:relative;overflow:hidden;border-radius:4px;">
                          <img
                            :src="getImage(project.images[0])"
                            class="laptop-image"
                            :alt="project.title"
                            loading="lazy"
                            width="390"
                            height="205"
                            @error="(e) => (e.target.src = '/images/website.jpg')"
                          />
                          <video
                            :id="'project-video-' + project.id"
                            class="laptop-video"
                            muted
                            playsinline
                            preload="metadata"
                            loop
                            :aria-label="project.title + ' showcase video'"
                            :poster="getImage(project.images[0])"
                            style="aspect-ratio: 16/9; width: 100%; height: auto;"
                          >
                            <source :src="getVideoUrl(project.slug)" type="video/mp4" />
                            <track kind="captions" srclang="en" label="English" default />
                          </video>
                        </div>
                      </foreignObject>

                      <rect x="90" y="15" width="390" height="205" rx="4" fill="url(#screen-glare)" opacity="0.3" pointer-events="none" />
                      <circle cx="285" cy="12" r="2.5" fill="#1a1a1a" />
                      <circle cx="285" cy="12" r="1" fill="#2a6a2a" opacity="0.8" />
                    </g>

                    <g transform="translate(0, 120)">
                      <ellipse cx="96.5" cy="165" rx="65" ry="6" fill="#000000" opacity="0.1" />
                      <rect x="40" y="75" width="113" height="85" rx="6" fill="#000000" />
                      <foreignObject x="43" y="78" width="107" height="79" rx="4">
                        <img :src="getImage(project.images[1])" class="w-full h-full object-cover rounded" :alt="project.title" loading="lazy" width="107" height="79" @error="(e) => (e.target.src = '/images/design.jpg')" />
                      </foreignObject>
                      <rect x="43" y="78" width="107" height="79" rx="4" fill="url(#screen-glare)" opacity="0.3" />
                      <circle cx="96.5" cy="77" r="2" fill="#1a1a1a" />
                      <circle cx="96.5" cy="77" r="1" fill="#2a6a2a" opacity="0.6" />
                    </g>

                    <g transform="translate(370, 70)">
                      <ellipse cx="76.77" cy="200" rx="40" ry="5" fill="#000000" opacity="0.1" />
                      <rect x="43" y="50" width="67.5" height="145" rx="8" fill="#000000" />
                      <foreignObject x="46" y="53" width="61.5" height="139" rx="6">
                        <img :src="getImage(project.images[2])" class="w-full h-full object-cover rounded" :alt="project.title" loading="lazy" width="61" height="139" @error="(e) => (e.target.src = '/images/app.jpg')" />
                      </foreignObject>
                      <rect x="46" y="53" width="61.5" height="139" rx="6" fill="url(#screen-glare)" opacity="0.3" />
                      <g transform="translate(61, 55)">
                        <rect x="0" y="0" width="28" height="7" rx="3.5" fill="#000000" />
                        <circle cx="9" cy="3.5" r="1.8" fill="#1a1a1a" />
                        <circle cx="9" cy="3.5" r="1" fill="#2a6a2a" opacity="0.6" />
                        <rect x="14" y="2.5" width="10" height="2" rx="1" fill="#1a1a1a" opacity="0.7" />
                        <rect x="1" y="1" width="26" height="5" rx="2.5" fill="#ffffff" opacity="0.06" />
                      </g>
                    </g>

                    <rect x="6" y="0" width="515" height="40" rx="6" fill="url(#laptop-gradient-home)" opacity="0.1" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="my-8 text-lg lg:text-xl font-semibold text-center text-black">
                  {{ project.title }}
                </h3>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- SECTION 8: TESTIMONIALS                      -->
    <!-- ============================================ -->
    <div class="my-6 lg:my-8 mx-1 md:mx-16 min-[1500px]:mx-[10%] xl:my-10 2xl:my-16 max-w-[1450px]">
  <div
    ref="testiSection"
    class="testi-shell relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#050a14] via-[#0a1a3a] to-[#0a0a1a] px-4 py-10 md:px-10 md:py-14"
  >
    <!-- Background Glows -->
    <div class="pointer-events-none absolute -top-20 left-1/4 h-[280px] w-[280px] rounded-full bg-[#2bb6c4]/15 blur-[110px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -bottom-20 right-1/4 h-[260px] w-[260px] rounded-full bg-[#185464]/25 blur-[110px]" aria-hidden="true"></div>

    <!-- Header -->
    <div class="relative z-10 flex flex-col gap-4 mb-8 md:flex-row md:items-end md:justify-between">
      <div data-reveal>
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2bb6c4]">[ Testimonials ]</p>
        <h2 class="text-[30px] font-semibold md:text-[40px] lg:text-[48px] xl:font-semibold inline-block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
      </div>

      <div data-reveal class="flex gap-3 self-end md:self-auto">
        <button @click="scrollTesti(-1)" aria-label="Previous testimonials" class="testi-nav-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="scrollTesti(1)" aria-label="Next testimonials" class="testi-nav-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- ====== FIXED: Testimonial Track with proper alignment ====== -->
    <div 
      ref="testiTrack" 
      class="testi-scroll-track relative z-10" 
      @scroll="handleTestiScroll"
    >
      <div
        v-for="(t, index) in testimonialsData"
        :key="t.id"
        :data-testi-card="index"
        class="testi-card"
        @mousemove="handleTiltMove"
        @mouseleave="handleTiltLeave"
      >
        <div class="testi-card__inner">
          <div class="testi-card__header">
            <span class="testi-card__badge">{{ t.initial }}</span>
            <span class="testi-card__company">{{ t.company }}</span>
          </div>

          <div class="testi-card__body">
            <p class="testi-card__label">Review</p>
            <p class="testi-card__quote">{{ t.review }}</p>
            <p class="testi-card__label">Scope of Work</p>
            <p class="testi-card__scope">{{ t.scope }}</p>
          </div>

          <div class="testi-card__footer">
            <div class="testi-card__person">
              <img :src="t.avatar" :alt="t.name" loading="lazy" class="testi-card__avatar" width="44" height="44" />
              <div>
                <p class="testi-card__name">{{ t.name }}</p>
                <p class="testi-card__role">{{ t.role }}</p>
              </div>
            </div>
            <div class="testi-card__rating">
              <span class="testi-card__stars">★★★★★</span>
              <span class="testi-card__rating-num">{{ t.rating.toFixed(1) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots Navigation -->
    <div class="hidden  relative z-10 md:flex justify-center gap-2 mt-6">
      <button
        v-for="(t, index) in testimonialsData"
        :key="'dot-' + t.id"
        @click="goToTesti(index)"
        :class="['testi-dot', { 'testi-dot--active': activeTesti === index }]"
        :aria-label="'Go to testimonial ' + (index + 1)"
      ></button>
    </div>
  </div>
</div>

    <!-- ============================================ -->
<!-- SECTION 9 : FAQ                             -->
<!-- ============================================ -->

<section
  ref="faqSection"
  class="relative my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#050a14] via-[#0b1732] to-[#050914] px-5 py-16 md:px-12"
>

  <!-- Background Glow -->
  <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#2bb6c4]/10 blur-[120px]"></div>

  <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#185464]/20 blur-[120px]"></div>

  <div class="relative z-10 max-w-[1200px] mx-auto">

    <!-- Heading -->

    <div data-reveal class="text-center mb-14">

      <p
        class="uppercase tracking-[0.35em] text-[#2bb6c4] text-xs font-semibold"
      >
        [ FAQ ]
      </p>

      <h2
        class="mt-4 text-4xl md:text-6xl font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent"
      >
        Frequently Asked Questions
      </h2>

      <p
        class="mt-6 text-gray-300 max-w-2xl mx-auto leading-8"
      >
        Everything you need to know before starting your project with
        Invictus Hub.
      </p>

    </div>

    <!-- FAQ -->

    <div class="space-y-5">

      <div
        v-for="(faq,index) in faqs"
        :key="index"
        class="faq-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-[#2bb6c4]/40 hover:bg-white/[0.05]"
      >

        <button
          @click="toggleFaq(index)"
          class="flex w-full items-center justify-between px-7 py-6 text-left"
        >

          <h3
            class="text-lg md:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#2bb6c4]"
          >
            {{ faq.question }}
          </h3>

          <div
            class="flex h-11 w-11 items-center justify-center rounded-full border border-[#2bb6c4]/40 bg-[#2bb6c4]/10 transition-all duration-500"
            :class="{ 'rotate-45 bg-[#2bb6c4] text-white': faq.open }"
          >

            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 5v14M5 12h14"
              />

            </svg>

          </div>

        </button>

        <transition
          enter-active-class="transition-all duration-500"
          leave-active-class="transition-all duration-300"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[500px] opacity-100"
          leave-from-class="max-h-[500px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >

          <div
            v-show="faq.open"
            class="overflow-hidden"
          >

            <div
              class="border-t border-white/10 px-7 pb-7 pt-5"
            >

              <p
                class="leading-8 text-gray-300"
              >
                {{ faq.answer }}
              </p>

            </div>

          </div>

        </transition>

      </div>

    </div>

  </div>

</section>
    <!-- ============================================ -->
    <!-- SECTION 9: CALL TO ACTION                    -->
    <!-- ============================================ -->
    <div class="md:px-12 overflow-hidden mt-8 md:mt-10 bg-gradient-to-r from-white via-[#A9C8DA]/50 to-white rounded-3xl xl:mt-20 md:mx-2 lg:mt-20 sm:py-12 xl:py-18 2xl:py-24 max-w-[1450px] lg:mx-auto">
      <div class="flex flex-col items-center text-center flex-center">
        <h2 data-split class="text-[33px] md:text-[35px] text-gray-900 xl:text-[55px] 2xl:text-[60px] xl:font-semibold inline-block text-6xl font-bold my-4 mx-4 lg:text-[44px]">
          Ready to Transform Your Business?
        </h2>
        <p data-reveal class="mx-4 my-2 font-semibold md:text-lg">
          Let's discuss how our innovative solutions can help you achieve your goals and drive your
          business forward with cutting-edge technology.
        </p>
      </div>

      <div data-reveal class="flex flex-col items-center justify-center md:gap-2 md:flex-row lg:gap-4 my-4">
        <div class="flex justify-start lg:justify-center lg:w-[25%] xl:w-[20%]">
          <router-link to="/contact" class="group">
            <button class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300 my-2">
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </router-link>
        </div>
        <div class="flex justify-start lg:justify-center lg:w-[25%] xl:w-[20%]">
          <router-link to="/projects" class="group">
            <button class="flex items-center gap-2 rounded-2xl border border-white text-white bg-gray-800 px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300">
              View Our Portfolio
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { userSearchStore } from "@/stores/SearchStore";
import projectsData from "@/stores/projects.json";
import { useScrollReveal } from "@/composables/useScrollReveal";
import { defineAsyncComponent } from "vue";

const HeroScene3D = defineAsyncComponent(() => import("@/components/HeroScene3D.vue"));
const CardAnimationOne = defineAsyncComponent(() => import("@/components/CardAnimationOne.vue"));
const CyberBurstBg = defineAsyncComponent(() => import("@/components/CyberBurstBg.vue"));
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ============================================ -->
// TECH STACK IMAGES - All WebP for performance
// ============================================ -->
import stripeImg from "../assets/stripe.webp";
import reactImg from "../assets/react.webp";
import flutterImg from "../assets/flutter-icon.webp";
import oceanImg from "../assets/digital-ocean.webp";
import twitterImg from "../assets/twitter.webp";
import slackImg from "../assets/slack.webp";

const techStack = [
  { name: "Stripe", img: stripeImg },
  { name: "React", img: reactImg },
  { name: "Flutter", img: flutterImg },
  { name: "Ocean", img: oceanImg },
  { name: "Twitter", img: twitterImg },
  { name: "Slack", img: slackImg },
];

const pageRoot = ref(null);
const heroSection = ref(null);
const projectCardsGrid = ref(null);

const count = ref(0);
const count1 = ref(0);
const projects = ref([]);
const hasAnimatedCountries = ref(false);
const hasAnimatedProjects = ref(false);

const counterElement = ref(null);
const counterElement1 = ref(null);
const homeProjects = computed(() => projects.value.slice(0, 4));

const store = userSearchStore();

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();
  if (!query) return true;
  const keywords = query.split(/\s+/).filter(Boolean);
  const content = tags.toLowerCase();
  return keywords.every((word) => content.includes(word));
};

const startCounter = (counterRef, targetNumber, duration = 1000) => {
  const increment = targetNumber / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      counterRef.value = targetNumber;
      clearInterval(timer);
    } else {
      counterRef.value = Math.floor(current);
    }
  }, 16);
};

// Build-time asset maps — resolved once when Vite compiles, not at runtime.
// This is what fixes the localhost:4174 leak: these URLs are correct
// no matter what server context the code executes in later (build,
// preview, or production).
const imageModules = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);
const videoModules = import.meta.glob(
  "../assets/videos/*.mp4",
  { eager: true, import: "default" }
);

const getImage = (imgName) => {
  const entry = Object.entries(imageModules).find(([path]) => path.endsWith(`/${imgName}`));
  return entry ? entry[1] : "/images/placeholder.jpg";
};

const getVideoUrl = (slug) => {
  const entry = Object.entries(videoModules).find(([path]) => path.endsWith(`/${slug}.mp4`));
  return entry ? entry[1] : "";
};

const handleHeroMouseMove = () => {};
const resetHeroTilt = () => {};

const playVideo = (videoId) => {
  const video = document.getElementById(videoId);
  video?.play().catch(() => {});
};

const pauseVideo = (videoId) => {
  const video = document.getElementById(videoId);
  video?.pause();
};



const playProjectVideo = (videoId) => {
  const video = document.getElementById(videoId);
  if (!video) return;
  video.parentElement?.classList.add("is-playing");
  video.currentTime = 0;
  video.play().catch(() => {});
};

const pauseProjectVideo = (videoId) => {
  const video = document.getElementById(videoId);
  if (!video) return;
  video.parentElement?.classList.remove("is-playing");
  video.pause();
};

const setupProjectCardAnimations = () => {
  if (!projectCardsGrid.value) return;
  const cards = projectCardsGrid.value.querySelectorAll("[data-project-card]");

  cards.forEach((card) => {
    const index = Number(card.dataset.projectCard);
    const fromLeft = index % 2 === 0;

    gsap.fromTo(
      card,
      { x: fromLeft ? -140 : 140, opacity: 0, rotateY: fromLeft ? -28 : 28, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      },
    );
  });
};

const preloadVideos = () => {
  ["video-website", "video-app", "video-ecommerce"].forEach((id) => {
    document.getElementById(id)?.load();
  });
  projects.value.slice(0, 4).forEach((project) => {
    document.getElementById("project-video-" + project.id)?.load();
  });
};

onMounted(async () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === counterElement.value && !hasAnimatedCountries.value) {
          hasAnimatedCountries.value = true;
          startCounter(count, 30);
        }
        if (entry.target === counterElement1.value && !hasAnimatedProjects.value) {
          hasAnimatedProjects.value = true;
          startCounter(count1, 150);
        }
      });
    },
    { threshold: 0.4 },
  );
  if (counterElement.value) observer.observe(counterElement.value);
  if (counterElement1.value) observer.observe(counterElement1.value);

  try {
    projects.value = projectsData;
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
  await nextTick();
  setupProjectCardAnimations();
  setupTestiEntrance();

  setTimeout(preloadVideos, 800);
});

useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });

const testiSection = ref(null);
const testiTrack = ref(null);
const activeTesti = ref(0);

const testimonialsData = ref([
  { id: 1, initial: "B", company: "Bramwell Finance", review: "They followed through on every single thing that they said they would.", scope: "Custom Software Development for a Financial Company", name: "Hamza Sheikh", role: "COO", avatar: "https://i.pravatar.cc/150?img=11", rating: 5.0 },
  { id: 2, initial: "A", company: "Advent Controls", review: "They epitomize thoroughness and critical thinking in everything that they do.", scope: "Custom Software Development for a Water Management Company", name: "Aaron Kass", role: "Digital Platform Manager", avatar: "https://i.pravatar.cc/150?img=13", rating: 5.0 },
  { id: 3, initial: "B", company: "BetterCare Health", review: "Overall, they cared about the UX and the outcomes of their work.", scope: "Web App UI/UX Design & Dev for Digital Healthcare Company", name: "Damian Este", role: "CTO", avatar: "https://i.pravatar.cc/150?img=15", rating: 5.0 },
  { id: 4, initial: "G", company: "GPS Freight Co.", review: "The developers understood our questions and kept us updated on progress.", scope: "Custom Software Development for a Logistics Company", name: "Farid Malik", role: "Operations Director", avatar: "https://i.pravatar.cc/150?img=17", rating: 4.5 },
  { id: 5, initial: "R", company: "Redline Retail", review: "Great communication throughout and a team that truly listens to feedback.", scope: "E-Commerce Platform Redesign and Development", name: "Sara Ahmed", role: "Marketing Director", avatar: "https://i.pravatar.cc/150?img=25", rating: 5.0 },
]);

const scrollTesti = (dir) => {
  if (!testiTrack.value) return;
  const card = testiTrack.value.querySelector("[data-testi-card]");
  const cardWidth = card ? card.getBoundingClientRect().width + 20 : 340;
  testiTrack.value.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
};

const goToTesti = (index) => {
  if (!testiTrack.value) return;
  const card = testiTrack.value.querySelectorAll("[data-testi-card]")[index];
  if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
};

let testiScrollTimer;
const handleTestiScroll = () => {
  clearTimeout(testiScrollTimer);
  testiScrollTimer = setTimeout(() => {
    if (!testiTrack.value) return;
    const cards = testiTrack.value.querySelectorAll("[data-testi-card]");
    const trackLeft = testiTrack.value.scrollLeft;
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.offsetLeft - trackLeft);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    activeTesti.value = closest;
  }, 80);
};

const handleTiltMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-6px) scale(1.02)`;
};

const handleTiltLeave = (e) => {
  e.currentTarget.style.transform = "";
};

const setupTestiEntrance = () => {
  if (!testiTrack.value) return;
  const cards = testiTrack.value.querySelectorAll("[data-testi-card]");
  gsap.fromTo(
    cards,
    { y: 60, opacity: 0, rotateX: -15, scale: 0.92 },
    {
      y: 0, opacity: 1, rotateX: 0, scale: 1,
      duration: 0.85, ease: "power3.out", stagger: 0.12,
      scrollTrigger: { trigger: testiSection.value, start: "top 85%", once: true },
    },
  );
};

// FAQ Script 
const faqs = ref([
{
question:"How long does a software project usually take?",
answer:"Project timelines depend on the scope and complexity. Small business websites usually take 2–4 weeks, while enterprise platforms and custom applications may require several months. We provide a detailed roadmap before development begins.",
open:true
},
{
question:"Do you develop both websites and mobile applications?",
answer:"Yes. We design and develop responsive websites, enterprise web applications, iOS and Android apps, SaaS platforms, and complete digital ecosystems tailored to your business.",
open:false
},
{
question:"Can you redesign our existing website?",
answer:"Absolutely. We modernize outdated websites by improving UI/UX, performance, SEO, accessibility, animations, and overall user experience while preserving your business goals.",
open:false
},
{
question:"Do you provide support after project delivery?",
answer:"Yes. Every project includes post-launch support, bug fixes, performance monitoring, maintenance, and optional long-term support plans to ensure your product continues to perform at its best.",
open:false
},
{
question:"How do we start working together?",
answer:"Simply contact our team through the Contact page. We'll schedule a discovery meeting, understand your goals, prepare a proposal, and begin development after approval.",
open:false
}])

const toggleFaq = (index)=>{
faqs.value.forEach((faq,i)=>{
faq.open=i===index?!faq.open:false
})
}
</script>

<style scoped>
/* ============================================ -->
/* SECTION 1: CARD BACKGROUNDS                  -->
/* ============================================ */
.card1 {
  background: linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.card2 {
  background-image: linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.card3 {
  background-image: linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it1.webp);
  background-size: cover;
  background-repeat: no-repeat;
}

/* ============================================ -->
/* SECTION 2: ANIMATED SCROLL                   -->
/* ============================================ */
.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 12s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

/* ============================================ -->
/* SECTION 3: CARD VIDEO STYLES                -->
/* ============================================ */
.card-video {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}
.card-video:hover {
  transform: translateY(-6px);
}
.card-video video {
  transition: opacity 0.6s ease;
  opacity: 0;
}
.card-video:hover video {
  opacity: 1;
}
.card-video .card1,
.card-video .card2,
.card-video .card3 {
  background: none;
}

/* ============================================ -->
/* SECTION 4: PROJECT CARDS                     -->
/* ============================================ */
.Cards {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.my-4:hover .Cards {
  transform: translateY(-4px);
}

.laptop-image,
.laptop-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.45s ease;
}

.laptop-video {
  opacity: 0;
  pointer-events: none;
}
.laptop-image {
  opacity: 1;
}
.is-playing .laptop-video {
  opacity: 1;
}
.is-playing .laptop-image {
  opacity: 0;
}

/* ============================================ -->
/* SECTION 5: TECH MARQUEE                      -->
/* ============================================ */
.tech-marquee {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.tech-row {
  display: flex;
  width: max-content;
  gap: 1rem;
}

.tech-row--forward {
  animation: scroll-left 32s linear infinite;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.tech-tile {
  display: flex;
  flex-shrink: 0;
  width: 128px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
  padding: 1.25rem 0.75rem;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 768px) {
  .tech-tile {
    width: 150px;
    padding: 1.5rem 1rem;
  }
}

.tech-tile:hover {
  transform: translateY(-6px);
  border-color: rgba(43, 182, 196, 0.4);
  background: rgba(43, 182, 196, 0.08);
  box-shadow: 0 12px 30px -12px rgba(43, 182, 196, 0.35);
}

.tech-tile__logo {
  height: 3.25rem;
  width: 100%;
  object-fit: contain;
  opacity: 0.7;
  filter: grayscale(20%);
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
}

@media (min-width: 768px) {
  .tech-tile__logo {
    height: 3.75rem;
  }
}

.tech-tile:hover .tech-tile__logo {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.06);
}

.tech-tile__label {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}

.tech-tile:hover .tech-tile__label {
  color: rgba(255, 255, 255, 0.95);
}

@media (prefers-reduced-motion: reduce) {
  .tech-row--forward {
    animation: none;
  }
}

/* ============================================ -->
/* SECTION 6: TESTIMONIALS                      -->
/* ============================================ */
.testi-shell {
  isolation: isolate;
}

.testi-scroll-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem 0.25rem 1.5rem;
  scrollbar-width: none;
}
.testi-scroll-track::-webkit-scrollbar {
  display: none;
}

.testi-card {
  scroll-snap-align: start;
  flex: 0 0 clamp(260px, 82vw, 340px);
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
  will-change: transform;
}

.testi-card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(6px);
  box-shadow: 0 20px 45px -20px rgba(0, 0, 0, 0.55);
  overflow: hidden;
  transition: box-shadow 0.35s ease;
}

.testi-card:hover .testi-card__inner {
  box-shadow: 0 25px 55px -18px rgba(43, 182, 196, 0.55);
}

@media (max-width: 380px) {
  .testi-scroll-track {
    gap: 0.75rem;
  }
  .testi-card__body,
  .testi-card__header,
  .testi-card__footer {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}

@media (min-width: 768px) {
  .testi-card {
    flex-basis: 340px;
  }
}

.testi-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(to right, #185464, #13404c);
}

.testi-card__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  border-radius: 9999px;
  background: rgba(43, 182, 196, 0.25);
  color: #ffffff;
  font-weight: 700;
}

.testi-card__company {
  font-weight: 700;
  color: #ffffff;
}

.testi-card__body {
  padding: 1.25rem 1.5rem;
  flex: 1;
}

.testi-card__label {
  font-weight: 700;
  font-size: 0.85rem;
  color: #185464;
  margin-top: 0.75rem;
}
.testi-card__label:first-child {
  margin-top: 0;
}

.testi-card__quote,
.testi-card__scope {
  font-size: 0.9rem;
  color: #374151;
  margin-top: 0.25rem;
  line-height: 1.5;
}

.testi-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem 1.5rem;
  gap: 0.75rem;
  border-top: 1px solid rgba(24, 84, 100, 0.08);
}

.testi-card__person {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.testi-card__avatar {
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 0 0 2px #2bb6c4;
}

.testi-card__name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #1f2937;
}

.testi-card__role {
  font-size: 0.75rem;
  color: #6b7280;
}

.testi-card__rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
}

.testi-card__stars {
  color: #2bb6c4;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.testi-card__rating-num {
  font-weight: 700;
  color: #185464;
  font-size: 0.85rem;
}

.testi-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.testi-nav-btn:hover {
  background: linear-gradient(to right, #185464, #2bb6c4);
  border-color: transparent;
  transform: scale(1.08);
}

.testi-dot {
  height: 8px;
  width: 8px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}

.testi-dot--active {
  width: 24px;
  background: linear-gradient(to right, #2bb6c4, #185464);
}

/* ============================================ -->
/* SECTION 7: SUBTLE ANIMATIONS                 -->
/* ============================================ */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
}

@keyframes float-slower {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-25px, 30px) scale(1.08); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-slower,
  .animate-pulse-slow,
  .animate-shimmer {
    animation: none;
    opacity: 0.03;
  }
  .testi-card {
    transition: none;
  }
}
</style>