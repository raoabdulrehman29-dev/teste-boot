<template>
  <div ref="pageRoot">
    <!-- Secction One Title -->

    <div
      v-if="
        isVisible(
          'home homepage hero invictus hub innovate transform achieve results digital company landing discover more',
        )
      "
      class="relative w-full overflow-hidden my-4"
    >
      <!-- Centered Background Glow (Gradient effect) -->
      <div
        data-parallax
        class="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[600px] md:h-[900px] bg-gradient-to-br from-blue-400/10 via-emerald-200/5 to-purple-200/5 blur-[100px] md:blur-[160px] rounded-full pointer-events-none z-0"
      ></div>

      <div class="relative z-10 px-4 md:px-14 xl:px-14 lg:pt-14 xl:pt-12 mx-auto max-w-[1450px]">
        <div class="relative z-10">
          <h1
            data-hero-el
            class="text-[40px] sm:mr-6 md:text-[60px] lg:text-[85px] xl:text-[95px] xl:font-semibold inline-block text-6xl font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent lg:mx-6 xl:mx-6"
          >
            Innovate, transform &
            <span
              class="bg-gradient-to-r from-[#185464]/80 via-gray-800 to-gray-900 to-70% bg-clip-text text-transparent"
            >
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>

      <!-- Section2 Information Cards-->
      <div
        v-if="
          isVisible(
            'growth smart solutions services business competitiveness efficiency digital projects transformation clients trust trusted global worldwide countries served international reputation contact  by 120+ clients around the world',
          )
        "
        class="flex flex-col items-stretch justify-center w-full gap-2 mt-10 Main lg:flex-row lg:items-stretch lg:gap-1 xl:mt-20"
      >
        <div
          data-reveal
          class="bg-gradient-to-b from-gray-900 via-gray-800 to-[#185464] lg:mx-1 rounded-3xl md:rounded-3xl px-4 lg:px-8 xl:px-10 pt-6 xl:pt-12 pb-4 xl:pb-8 w-full lg:flex-[30%] lg:w-0"
        >
          <div class="flex justify-start gap-2 mb-4">
            <router-link
              to="/projects"
              class="inline-flex items-center rounded-full bg-white px-3 lg:px-4 py-1 lg:py-2 text-black text-base h-6 lg:h-10 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white transition-all duration-300"
            >
              Projects
            </router-link>

            <router-link
              to="/services"
              class="inline-flex items-center rounded-full bg-white px-3 lg:px-4 py-1 lg:py-2 text-black text-base h-6 lg:h-10 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white transition-all duration-300"
            >
              Services
            </router-link>
          </div>

          <h1
            class="mt-6 text-2xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl lg:my-10"
          >
            Driving Your Growth with Smart Solutions
          </h1>

          <p
            class="my-4 text-base font-semibold text-white lg:leading-relaxed xl:leading-8 xl:mb-24"
          >
            From concept to completion, we craft innovative projects and deliver tailored services
            that boost your competitiveness, enhance efficiency, and help your business thrive in
            the digital age.
          </p>

          <div class="flex items-start justify-start">
            <router-link to="/services" class="group">
              <div
                class="text-white text-lg md:text-lg mt-1 pb-0.5 flex items-center gap-2 group border-b border-current"
              >
                Explore More
                <svg
                  class="w-auto h-4 transition-all duration-300 md:h-5 lg:h-6 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        <div
          data-reveal
          class="card bg-gradient-to-r from-[#185464] to-[#13404c] lg:mx-1 p-5 rounded-3xl rounded-br-[2rem] text-white flex justify-between relative isolate w-full lg:flex-[65%] lg:w-0"
        >
          <div
            class="flex flex-col justify-left items-left w-[55%] xl:w-[30%] 2xl:w-[50%] md:w-[45%] mb-10 md:mb-8 xl:mx-12 2xl:mx-20 xl:mt-14"
          >
            <h1
              ref="counterElement"
              class="text-[60px] lg:text-[108px] lg:mx-8 xl:mx-0 font-extrabold"
            >
              {{ count }}+
            </h1>

            <h6 class="text-xl font-semibold lg:mx-8 xl:mx-0">countries served</h6>

            <h2 class="mt-4 text-3xl font-medium md:text-4xl lg:text-5xl lg:mt-32 xl:mt-8">
              Trusted by 120+ clients around the world
            </h2>
          </div>

          <!-- ONLY FIXED IMAGE SECTION -->

          <div
            class="absolute right-2 bottom-8 sm:right-6 md:right-10 lg:right-8 lg:top-1/2 xl:top-[45%] lg:-translate-y-1/2 flex items-center justify-center h-[70%] lg:max-h-[70%] xl:max-h-[80%] 2xl:max-w-[90%] w-auto overflow-visible"
          >
            <img
              class="w-[10rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[17rem] object-contain max-h-full opacity-[80%]"
              src="../assets/logoji.png"
              alt=""
            />
          </div>

          <div class="absolute bottom-0 right-0 z-20 overflow-visible">
            <div class="relative inline-block overflow-visible">
              <div class="absolute -inset-[2px] z-20 rounded-3xl bg-white"></div>
              <div
                class="absolute -top-[20px] right-0 h-[18px] w-[36px] rounded-br-3xl bg-transparent shadow-[11px_11px_0_10px_#fff] z-30"
              ></div>

              <div
                class="absolute bottom-0 -left-[20px] h-[36px] w-[18px] rounded-br-3xl bg-transparent shadow-[11px_11px_0_10px_#fff] z-30"
              ></div>

              <router-link
                to="/contact"
                class="relative z-40 flex items-center justify-between rounded-3xl bg-white px-6 py-3 text-xl font-semibold text-black md:px-10 lg:px-[4rem] lg:py-8"
              >
                <svg
                  class="w-auto h-5 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                  />
                </svg>
                <p class="lg:mx-2">Contact Us</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section3 Experience Inovations -->
    <div
      v-if="
        isVisible(
          'innovation experience real time seamless reliable stress free digital transformation',
        )
      "
      class="bg-gradient-to-b from-white via-[#e2f1fa]/[90%] to-white rounded-3xl relative z-20 overflow-hidden border border-white/20 py-4 md:pt-10 lg:py-8 lg:pt-20 xl:pt-2 w-full left-1/2 -translate-x-1/2"
    >
      <!-- Content Section -->
      <div class="relative z-20 mt-10 min-h-[220px] md:min-h-[320px] lg:min-h-[420px] 2xl:h-full">
        <h1
          data-reveal
          class="text-[40px] md:text-[60px] w-full text-left my-2 sm:my-6 px-3 md:my-10 md:pl-28 lg:my-4 lg:pl-36 lg:text-[85px] xl:my-16 2xl-[my-18] xl:pl-44 xl:text-[95px] min-[1500px]:pl-[clamp(10rem,14vw,24rem)] min-[1800px]:pl-[clamp(14rem,18vw,30rem)] min-[2000px]:text-[100px] min-[2000px]:w-[90%] xl:font-semibold inline-block text-6xl font-semibold bg-gradient-to-r from-[#0c405a] from-[35%] via-[#2BB6C4] to-[#0c405a] to-[60%] bg-clip-text text-transparent 2xl:w-[80%]"
        >
          Experience real-time innovation—seamless, reliable, and stress-free.
        </h1>
        <img
          data-parallax
          src="../assets/sidebannerlogo.png"
          alt=""
          class="absolute top-0 left-0 object-contain w-20 h-full md:opacity-40 opacity-5 md:w-16 lg:w-24"
        />
      </div>
    </div>

    <!-- section4  Services -->

    <div
      v-if="
        isVisible(
          'services solutions website development mobile applications ecommerce software offerings digital services explore more',
        )
      "
      class="my-6 lg:my-8 mx-1 md:mx-16 min-[1500px]:mx-[10%] xl:my-10 2xl:my-16 max-w-[1450px]"
    >
      <h3 data-reveal class="mb-2 font-semibold lg:mx-2 xl:mx-0">[ services ]</h3>
      <div class="flex flex-col lg:flex-row lg:justify-between lg:mx-2">
        <div>
          <h1
            data-split
            class="text-[30px] md:text-[35px] lg:text-[50px] text-gray-900 xl:text-[70px] xl:font-semibold inline-block text-6xl font-semibold"
          >
            Services and solutions we provide.
          </h1>
        </div>
        <div data-reveal class="flex justify-start lg:justify-end lg:items-end lg:w-[30%]">
          <router-link to="/services" class="group">
            <button
              class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300 my-6"
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- section6 Services cards -->

    <div
      v-if="
        isVisible(
          'services website development mobile applications ecommerce responsive websites online store software',
        )
      "
      :class="store.isSearchEmpty ? '' : 'mb-10 md:mb-16 lg:mb-20'"
      data-reveal-group
      class="flex mb-10 flex-col justify-center gap-2 md:flex-row item-center md:gap-2"
    >
      <div
        class="card1 bg-gray-900 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between relative isolate md:flex-1"
      >
        <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%]">
          <h1 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">Website Development</h1>
          <h2 class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
            We build professional responsive websites optimized for the most popular search engines
          </h2>
        </div>
        <div>
          <div>
            <img
              class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]"
              src="../assets/logoji.png"
              alt=""
            />
          </div>

          <div class="absolute bottom-0 right-0 z-20 overflow-visible">
            <div class="relative inline-block overflow-visible">
              <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
              <div
                class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"
              ></div>
              <div
                class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"
              ></div>
              <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
                <router-link
                  to="/services/web-development"
                  class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5"
                >
                  <svg
                    width="100%"
                    height="100%"
                    class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card2 bg-gray-500 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between relative isolate md:flex-1"
      >
        <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%]">
          <h1 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">Mobile Applications</h1>
          <h2 class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
            Follow the global trend and create your revolutionary mobile app built with the best
            technologies
          </h2>
        </div>
        <div>
          <div>
            <img
              class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]"
              src="../assets/logoji.png"
              alt=""
            />
          </div>

          <div class="absolute bottom-0 right-0 z-20 overflow-visible">
            <div class="relative inline-block overflow-visible">
              <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
              <div
                class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"
              ></div>
              <div
                class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"
              ></div>
              <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
                <router-link
                  to="/services/app-development"
                  class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5"
                >
                  <svg
                    width="100%"
                    height="100%"
                    class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card3 bg-gray-500 p-5 rounded-3xl rounded-br-[2rem] text-white flex flex-col justify-between relative isolate md:flex-1"
      >
        <div class="flex flex-col justify-left items-left w-[60%] 2xl:w-[55%]">
          <h1 class="mt-6 text-lg font-semibold 2xl:text-[25px] 2xl:my-10">E-Commerce Solutions</h1>
          <h2 class="mt-4 text-base lg:w-[90%] xl:w-[80%] leading-normal lg:leading-loose 2xl:mb-8">
            Increase your sales with an incredible online store, full of features and functionality
          </h2>
        </div>
        <div>
          <div>
            <img
              class="w-[105px] xl:w-[138px] object-right relative top-[10px] left-[1px] inset-0 overflow-hidden z-10 opacity-[80%]"
              src="../assets/logoji.png"
              alt=""
            />
          </div>

          <div class="absolute bottom-0 right-0 z-20 overflow-visible">
            <div class="relative inline-block overflow-visible">
              <div class="absolute -inset-[2px] z-20 rounded-[2rem] bg-white"></div>
              <div
                class="absolute -top-[19px] right-0 h-[17px] w-[34px] rounded-br-3xl bg-transparent shadow-[18px_15px_0_14px_#fff] z-30"
              ></div>
              <div
                class="absolute bottom-0 -left-[20px] h-[29px] w-[18px] rounded-br-3xl bg-transparent shadow-[13px_13px_0_12px_#fff] z-30"
              ></div>
              <div class="relative z-40 p-1 bg-white md:p-2 rounded-3xl">
                <router-link
                  to="/services/design-and-development"
                  class="relative z-40 flex items-center justify-between p-4 bg-gray-900 rounded-3xl md:p-5"
                >
                  <svg
                    width="100%"
                    height="100%"
                    class="h-5 w-auto -translate-y-0.5 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- animatiiondiv Tech We use -->

    <div
      v-if="
        isVisible(
          'tech stack technology tools react flutter stripe slack digital ocean twitter platforms frameworks',
        )
      "
      data-reveal
      class="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-br from-[#050a14] via-[#0a1a3a] to-[#0a0a1a] rounded-3xl my-6 px-2 text-white md:mt-20"
    >
      <div class="w-full my-2 lg:w-1/5 lg:my-4 lg:py-4 md:mx-4 lg:mx-8">
        <h1
          class="text-center text-[26px] md:text-[30px] lg:text-[35px] lg:text-start 2xl:text-[41px] font-semibold"
        >
          Tech We Use
        </h1>
      </div>

      <div class="w-full overflow-hidden md:w-4/5">
        <div class="flex items-center gap-0 py-2 md:gap-2 lg:gap-1 animate-scroll">
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/stripe.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Stripe</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/react.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">React</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/flutter-icon.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Flutter</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/digital-ocean.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Ocean</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/twitter.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Twitter</p>
          </div>

          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/slack.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Slack</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/stripe.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Stripe</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/react.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">React</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/flutter-icon.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Flutter</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/digital-ocean.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Ocean</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-3 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-14 w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/twitter.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Twitter</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/stripe.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Stripe</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/react.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">React</p>
          </div>
          <div
            class="flex w-[15%] shrink-0 flex-col items-center justify-center px-1 py-5 xl:px-1 md:w-[8%] lg:w-[10%] xl:[10%]"
          >
            <img
              class="h-[6rem] w-full object-contain md:h-[6rem] lg:h-[7rem] xl:h-[6rem]"
              src="../assets/flutter-icon.png"
              alt=""
            />
            <p class="py-2 text-sm font-bold md:text-base">Flutter</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section About -->
    <div
      v-if="
        isVisible(
          'about company innovation business life digital solutions scale visibility competitiveness efficiency Bringing Your Business to Life Through explore more',
        )
      "
      data-reveal
      class="mt-20 mb-10 rounded-3xl bg-gradient-to-r from-gray-50 via-[#A9C8DA] to-gray-200 px-8 py-6 relative md:mx-2 lg:mb-20 lg:pl-[16rem] xl:pl-[18rem] min-[1500px]:mx-[10%] min-[1500px]:py-6 max-w-[1450px]"
    >
      <h3 class="font-semibold md:my-2 xl:mx-16">[ About ]</h3>

      <h1
        class="text-[29px] md:text-[35px] text-gray-900 font-semibold lg:text-[60px] xl:text-[65px] 2xl:text-[60px] xl:font-semibold inline-block text-6xl my-2 md:my-4 xl:my-2 xl:mx-16"
      >
        Bringing Your Business to Life Through Innovation
      </h1>
      <h6
        class="inline-block mt-6 text-base text-left text-gray-900 lg:leading-loose lg:text-lg xl:mx-16"
      >
        For over 10 years, we have been developing digital solutions for companies looking to scale
        up their business and gain greater visibility online. <br />Our priority is to understand
        your specific needs and help you improve your competitiveness and efficiency. Offering
        innovative solutions requires sophisticated knowledge and technological advancement.
      </h6>
      <div
        class="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center xl:mt-10 xl:mx-16 gap-6 my-6"
      >
        <div class="flex justify-start my-3 group">
          <router-link to="/about">
            <button
              class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300"
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </div>
        <div
          class="flex flex-col items-start sm:items-center justify-between gap-2 md:gap-4 md:items-center md:flex-row md:w-full lg:w-auto"
        >
          <div>
            <h1
              ref="counterElement1"
              class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent md:text-[70px] xl:text-[90px] 2xl:text-[80px] xl:font-normal inline-block text-6xl my-2"
            >
              {{ count1 }}+
            </h1>
          </div>
          <div class="md:w-[60%] lg:w-full">
            <h4 class="text-[16px] font-semibold md:text-end">
              Successfully completed great projects
            </h4>
          </div>
        </div>
      </div>
      <div
        class="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 object-fit w-[15%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] h-full overflow-hidden rounded-3xl"
      >
        <div class="relative w-full h-full overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=800&fit=crop"
            alt=""
            class="w-full h-full object-cover opacity-50"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#185464]/30 via-transparent to-transparent"
          ></div>
        </div>
      </div>
    </div>

    <!-- Section Built Project fro Customers -->

    <div
      v-if="
        isVisible(
          'projects portfolio case studies customers work built amazing project showcase development',
        )
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="ProjectBuilds bg-gradient-to-r from-[#185464] to-[#13404c] rounded-3xl text-white py-10 px-1"
    >
      <div
        class="flex flex-col items-start justify-between gap-6 mx-4 md:flex-row xl:justify-around lg:items-end lg:mx-auto max-w-[1450px] lg:px-16"
      >
        <div class="w-full sm:w-[78%] lg:w-[70%] mx-2">
          <h3 data-reveal class="my-2 font-semibold">[ Projects ]</h3>

          <h1
            data-split
            class="text-[29px] md:text-[40px] lg:text-[50px] xl:text-[58px] xl:font-semibold inline-block text-6xl font-bold my-2"
          >
            We have already built amazing things for our customers.
          </h1>
        </div>
        <div data-reveal class="flex justify-end xl:justify-center lg:w-[30%] my-4">
          <router-link to="/projects" class="group">
            <button
              class="flex items-center gap-2 rounded-2xl border border-[#2bb6c4] text-white bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300"
            >
              More Projects
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
      <div
        class="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-[2px] items-stretch w-full max-w-[1450px] mx-auto"
      >
        <div
          v-for="project in homeProjects"
          :key="project.id"
          data-reveal
          class="sm:w-[45%] md:w-[45%] my-4"
        >
          <router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug } }">
            <div
              class="flex flex-col justify-center h-full px-2 py-4 mx-2 bg-white Cards rounded-3xl item-center"
            >
              <div
                class="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 relative"
              >
                <div class="relative w-full aspect-[16/9] p-2">
                  <svg viewBox="6 6 514.96 310" class="w-full h-full">
                    <defs>
                      <linearGradient
                        id="bg-gradient-home"
                        x1="42.21"
                        y1="128.56"
                        x2="520.44"
                        y2="128.56"
                        gradientTransform="translate(-2.64 23.39)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#109a5c" stop-opacity=".15" />
                        <stop offset=".94" stop-color="#109a5c" />
                      </linearGradient>
                      <linearGradient
                        id="laptop-gradient-home"
                        x1="261.76"
                        y1="306.92"
                        x2="267.11"
                        y2="3.5"
                        gradientTransform="translate(528.81 314.1) rotate(-180)"
                        gradientUnits="userSpaceOnUse"
                      >
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

                    <rect
                      x="6"
                      y="6"
                      width="515"
                      height="310"
                      rx="12"
                      fill="url(#bg-gradient-home)"
                      opacity="0.1"
                    />

                    <g transform="translate(10, 10)">
                      <g transform="translate(230, 235)">
                        <path
                          d="M45,28 L55,0 L65,28 Z"
                          fill="#c0c0c0"
                          stroke="#a0a0a0"
                          stroke-width="1"
                        />
                        <rect
                          x="10"
                          y="26"
                          width="90"
                          height="6"
                          rx="3"
                          fill="#d0d0d0"
                          stroke="#b0b0b0"
                          stroke-width="0.5"
                        />
                        <rect
                          x="10"
                          y="26"
                          width="90"
                          height="2"
                          rx="1"
                          fill="#ffffff"
                          opacity="0.2"
                        />
                        <rect
                          x="48"
                          y="-4"
                          width="14"
                          height="8"
                          rx="2"
                          fill="#b0b0b0"
                          stroke="#909090"
                          stroke-width="0.5"
                        />
                      </g>

                      <rect x="240" y="220" width="100" height="12" rx="3" fill="#3a3a3a" />
                      <rect
                        x="120"
                        y="195"
                        width="340"
                        height="35"
                        rx="3"
                        fill="#333"
                        opacity="0.4"
                      />

                      <rect x="85" y="10" width="400" height="215" rx="10" fill="#1a1a1a" />

                      <foreignObject x="90" y="15" width="390" height="205" rx="4">
                        <img
                          :src="getImage(project.images[0])"
                          class="w-full h-full object-cover rounded"
                          :alt="project.title"
                          loading="lazy"
                          @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                        />
                      </foreignObject>

                      <rect
                        x="90"
                        y="15"
                        width="390"
                        height="205"
                        rx="4"
                        fill="url(#screen-glare)"
                        opacity="0.3"
                      />
                      <circle cx="285" cy="12" r="2.5" fill="#1a1a1a" />
                      <circle cx="285" cy="12" r="1" fill="#2a6a2a" opacity="0.8" />
                    </g>

                    <g transform="translate(0, 120)">
                      <ellipse cx="96.5" cy="165" rx="65" ry="6" fill="#000000" opacity="0.1" />

                      <rect x="40" y="75" width="113" height="85" rx="6" fill="#000000" />

                      <foreignObject x="43" y="78" width="107" height="79" rx="4">
                        <img
                          :src="getImage(project.images[1])"
                          class="w-full h-full object-cover rounded"
                          :alt="project.title"
                          loading="lazy"
                          @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                        />
                      </foreignObject>

                      <rect
                        x="43"
                        y="78"
                        width="107"
                        height="79"
                        rx="4"
                        fill="url(#screen-glare)"
                        opacity="0.3"
                      />
                      <circle cx="96.5" cy="77" r="2" fill="#1a1a1a" />
                      <circle cx="96.5" cy="77" r="1" fill="#2a6a2a" opacity="0.6" />
                    </g>

                    <g transform="translate(370, 70)">
                      <ellipse cx="76.77" cy="200" rx="40" ry="5" fill="#000000" opacity="0.1" />

                      <rect x="43" y="50" width="67.5" height="145" rx="8" fill="#000000" />

                      <foreignObject x="46" y="53" width="61.5" height="139" rx="6">
                        <img
                          :src="getImage(project.images[2])"
                          class="w-full h-full object-cover rounded"
                          :alt="project.title"
                          loading="lazy"
                          @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                        />
                      </foreignObject>

                      <rect
                        x="46"
                        y="53"
                        width="61.5"
                        height="139"
                        rx="6"
                        fill="url(#screen-glare)"
                        opacity="0.3"
                      />

                      <g transform="translate(61, 55)">
                        <rect x="0" y="0" width="28" height="7" rx="3.5" fill="#000000" />
                        <circle cx="9" cy="3.5" r="1.8" fill="#1a1a1a" />
                        <circle cx="9" cy="3.5" r="1" fill="#2a6a2a" opacity="0.6" />
                        <rect
                          x="14"
                          y="2.5"
                          width="10"
                          height="2"
                          rx="1"
                          fill="#1a1a1a"
                          opacity="0.7"
                        />
                        <rect
                          x="1"
                          y="1"
                          width="26"
                          height="5"
                          rx="2.5"
                          fill="#ffffff"
                          opacity="0.06"
                        />
                      </g>
                    </g>

                    <rect
                      x="6"
                      y="0"
                      width="515"
                      height="40"
                      rx="6"
                      fill="url(#laptop-gradient-home)"
                      opacity="0.1"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h1 class="my-8 text-lg lg:text-xl font-semibold text-center text-black">
                  {{ project.title }}
                </h1>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Section Our Trusted Partner -->

    <div
      v-if="
        isVisible(
          'contact get started transform business goals portfolio consultation innovative solutions call to action Ready to Transform Your Business? ',
        )
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="md:px-12 overflow-hidden mt-8 md:mt-10 bg-gradient-to-r from-white via-[#A9C8DA]/50 to-white rounded-3xl xl:mt-20 md:mx-2 lg:mt-20 sm:py-12 xl:py-18 2xl:py-24 max-w-[1450px] lg:mx-auto"
    >
      <div class="flex flex-col items-center text-center flex-center">
        <h1
          data-split
          class="text-[33px] md:text-[35px] text-gray-900 xl:text-[55px] 2xl:text-[60px] xl:font-semibold inline-block text-6xl font-bold my-4 mx-4 lg:text-[44px]"
        >
          Ready to Transform Your Business?
        </h1>
        <h3 data-reveal class="mx-4 my-2 font-semibold md:text-lg">
          Let's discuss how our innovative solutions can help you achieve your goals and drive your
          business forward with cutting-edge technology.
        </h3>
      </div>

      <div
        data-reveal
        class="flex flex-col items-center justify-center md:gap-2 md:flex-row lg:gap-4 my-4"
      >
        <div class="flex justify-start lg:justify-center lg:w-[25%] xl:w-[20%]">
          <router-link to="/contact" class="group">
            <button
              class="flex items-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300 my-2"
            >
              Get Started Today
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </router-link>
        </div>
        <div class="flex justify-start lg:justify-center lg:w-[25%] xl:w-[20%]">
          <router-link to="/projects" class="group">
            <button
              class="flex items-center gap-2 rounded-2xl border border-white text-white bg-gray-800 px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300"
            >
              View Our Portfolio
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 sm:w-4 h-auto -translate-y-0.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { userSearchStore } from "@/stores/SearchStore";
import projectsData from "@/stores/projects.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

const pageRoot = ref(null);

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

  if (!query) {
    return true;
  }

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

const getImage = (imgName) => {
  return new URL(`../assets/${imgName}`, import.meta.url).href;
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

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

  if (counterElement.value) {
    observer.observe(counterElement.value);
  }

  if (counterElement1.value) {
    observer.observe(counterElement1.value);
  }
});

onMounted(async () => {
  try {
    projects.value = projectsData;
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
});

useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });
</script>

<style scoped>
.card1 {
  background:
    linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.card2 {
  background-image:
    linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.card3 {
  background-image:
    linear-gradient(to right, rgba(24, 84, 100, 0.6), rgba(19, 64, 76, 0.6)), url(../assets/it1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

/* The wrapper that actually moves */
.animate-scroll {
  display: flex;
  width: max-content; /* Ensures it doesn't wrap */
  animation: scroll 12s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
