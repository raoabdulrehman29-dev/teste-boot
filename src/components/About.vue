<template>
  <div ref="pageRoot">
    <!-- section 1  -->
    <PageBanner title="About Us" currentPage="About Us" />
    <!-- section 2  -->
    <div
      v-if="isVisible('About working  awesome things in with us')"
      class="mx-auto my-6 md:mt-10 w-full lg:my-8 px-4 max-w-[1450px]"
    >
      <h3 data-reveal class="mb-2 font-semibold md:ml-8 lg:ml-10">[ About ]</h3>
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="w-full xl:h-full">
          <h1
            data-reveal
            class="inline-block text-[28px] font-semibold capitalize text-black leading-tight sm:text-[30px] md:ml-8 md:w-[58%] md:text-[35px] min-[1226px]:text-[48px] lg:ml-10 lg:text-[46px] min-[1500px]:ml-10 min-[1500px]:w-[62%] xl:w-[58%] xl:text-[52px] xl:leading-14 2xl:ml-12 2xl:w-[64%] 2xl:text-[60px]"
          >
            awesome things in
            <span class="hidden min-[1600px]:inline"> working</span>
            <br class="hidden min-[1600px]:block" />
            <br class="min-[1600px]:hidden" />
            <span class="min-[1600px]:hidden">working </span>with us
          </h1>
        </div>
      </div>
    </div>

    <div
      v-if="
        isVisible(
          'Invictus Hub digital solutions for companies looking to scale up their business and gain greater visibility online Offering innovative solutions sophisticated knowledge and technological advancement competitiveness and efficiency',
        )
      "
      class="mx-auto my-10 flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:my-16 2xl:my-20 xl:gap-2 px-4"
    >
      <div data-reveal class="w-full lg:w-[50%]">
        <h1
          class="inline-block text-[37px] font-extrabold capitalize text-gray-100 drop-shadow-[0_0_2px_#2f758a] md:text-[70px] lg:text-[70px] xl:text-[100px]"
        >
          Invictus Hub
        </h1>
      </div>
      <div data-reveal class="w-full lg:w-[40%]">
        <p class="text-base leading-7 text-black md:text-lg md:leading-7 lg:text-base lg:leading-7">
          For over 10 years, we have been developing digital solutions for companies looking to
          scale up their business and gain greater visibility online.<br />

          Our priority is to understand your specific needs and help you improve your
          competitiveness and efficiency. Offering innovative solutions requires sophisticated
          knowledge and technological advancement.
        </p>
      </div>
    </div>

    <!-- Missions Section  -->
    <div
      v-if="
        isVisible(
          'We aim increase efficiency success by offering state-of-the-art products technological and interdisciplinary expertise  Mission vision curiosity and commitment Our creative thinkers  designers  developers Great Projects View Projects',
        )
      "
      class="Main mx-auto flex w-full max-w-[1920px] flex-col justify-center gap-4 lg:flex-row lg:gap-3 mt-10"
    >
      <div
        data-reveal
        class="rounded-3xl bg-gradient-to-b from-gray-900 via-gray-800 to-[#185464] px-4 pb-6 pt-12 md:rounded-3xl lg:w-[40%] xl:w-[35%] lg:px-8"
      >
        <h1
          class="mt-6 text-2xl font-semibold text-white md:text-3xl lg:my-10 xl:my-6 lg:text-4xl xl:text-4xl"
        >
          Mission
        </h1>
        <p
          class="my-6 text-lg font-semibold text-white md:text-lg lg:text-2xl lg:leading-relaxed xl:mb-32 xl:text-2xl lg:font-normal"
        >
          We aim to add value, increase efficiency and ensure our customers' success by offering
          state-of-the-art products supported by the latest technological and interdisciplinary
          expertise. Our services go beyond software to support you at all process levels.
        </p>
      </div>

      <div
        data-reveal
        class="card relative flex flex-col gap-8 rounded-3xl rounded-br-[2rem] bgimage p-5 text-white md:flex-row md:p-6 lg:min-h-[420px] lg:w-[60%] xl:w-[65%] lg:items-end lg:justify-between xl:p-8 2xl:min-h-[620px]"
      >
        <div class="flex w-full flex-col justify-end lg:w-[60%] xl:w-[70%] lg:pb-16 pt-8">
          <p
            class="text-lg leading-7 lg:leading-9 text-white md:pr-2 md:text-lg lg:text-2xl md:leading-8 lg:pr-6 xl:pr-12 md:mt-[239px]"
          >
            We have assembled a team that combines expertise in modern technologies with vision,
            curiosity, and commitment. Our creative thinkers, designers, and developers focus on
            building the necessary digital products for your growth.
          </p>
        </div>
        <div
          class="mb-6 flex w-full flex-col items-start justify-center gap-1 md:mb-10 md:w-[30%] md:flex-col md:items-end md:gap-4 lg:ml-auto lg:mb-10 lg:flex-col lg:justify-start lg:items-center lg:gap-6 lg:pb-12 lg:text-right xl:mx-10 xl:mb-0 xl:w-[20%] xl:gap-2 xl:pb-0 xl:text-center 2xl:pt-12"
        >
          <h1
            ref="counterElement"
            class="my-2 text-[55px] font-extrabold leading-none md:my-0 md:text-[72px] md:rotate-90 lg:text-[120px] xl:text-[120px] 2xl:text-[110px]"
          >
            {{ missionCount }}+
          </h1>
          <h6
            class="text-lg lg:text-2xl xl:text-2xl font-semibold md:text-xl lg:mx-0 md:mt-[5rem] lg:mb-[9.5rem] xl:mb-[5.5rem]"
          >
            Great Projects
          </h6>
        </div>

        <div class="absolute bottom-0 right-0 z-20 overflow-visible">
          <div class="relative inline-block overflow-visible">
            <div
              class="absolute -top-[18px] right-0 h-[18px] w-[36px] rounded-br-3xl bg-transparent shadow-[18px_14px_0_13px_#fff] z-30"
            ></div>
            <div
              class="absolute bottom-0 -left-[18px] h-[28px] w-[18px] rounded-br-3xl bg-transparent shadow-[15px_15px_0_14px_#fff] z-30"
            ></div>
            <router-link
              to="/projects"
              class="relative z-40 flex items-center justify-between rounded-3xl bg-white px-6 py-3 text-base font-semibold text-black md:px-8 md:text-xl lg:px-[4.5rem] lg:py-8 xl:px-[5.5rem] xl:py-8"
            >
              <svg class="w-auto h-5 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"
                />
              </svg>
              <p class="lg:mx-2">View Projects</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Customer Satisfation Animation  -->

    <div
      v-if="isVisible('Customer Satisfaction and Business ')"
      class="px-2 my-6 overflow-hidden whitespace-nowrap"
    >
      <h1
        class="inline-block text-4xl font-semibold leading-tight text-gray-900 min-w-max animate-text-scroll md:my-8 md:text-6xl lg:my-10 lg:text-7xl xl:text-8xl"
      >
        /Customer Satisfaction and Business are always at the center of our attention.
      </h1>
    </div>

    <!-- Content Section -->
    <div
      v-if="
        isVisible(
          'Customer Satisfaction and Business Not everyone is aware of the technological customized solutions for all your business processes ',
        )
      "
      data-reveal
      class="bg-gradient-to-r from-white via-[#185464]/[15%] to-white rounded-3xl sm:mx-2 relative z-20 overflow-hidden border border-white/20 px-4 pt-10 pb-4 md:px-6 md:pt-10 lg:px-8 lg:py-16 2xl:py-20"
    >
      <div class="relative z-20 mt-4 min-h-[220px] md:min-h-[300px] lg:min-h-[360px]">
        <div
          class="relative z-10 py-8 md:py-10 pl-6 md:pl-28 lg:pl-36 xl:pl-40 min-[1500px]:pl-[clamp(12rem,15vw,20rem)] min-[1800px]:pl-[clamp(14rem,20vw,22rem)] 2xl:mr-10 mb-6"
        >
          <div class="flex flex-col gap-8">
            <h1
              class="text-[28px] text-left font-semibold md:text-[35px] lg:text-[48px] xl:text-[55px] 2xl:text-[60px] leading-[1.15] md:leading-[1.12] max-w-[95%] min-[1500px]:max-w-[97%] min-[1800px]:max-w-[97%]"
            >
              “Not everyone is aware of the technological assets their company lacks in order to
              excel.
              <span
                class="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text"
              >
                We have the right tools
              </span>
              to decipher them and provide you with customized solutions for all your business
              processes.”
            </h1>
          </div>
        </div>
      </div>

      <img
        data-parallax
        src="../assets/sidebannerlogo.png"
        alt=""
        class="absolute top-0 left-0 object-contain w-20 h-full md:w-24 lg:w-28 xl:w-32 2xl:w-36 md:opacity-40 opacity-5"
      />
    </div>

    <!-- What you will get  -->
    <div
      v-if="
        isVisible(
          'Designed to Help You Succeed  We already know head start focused consultation Cross-linked action Assistance',
        )
      "
      class="mx-auto w-full px-2 md:px-6 lg:px-8 max-w-[1450px]"
    >
      <div class="mb-2 mt-20 rounded-3xl px-4 py-2 lg:mb-2 xl:pl-[1rem]">
        <div class="flex flex-col lg:flex-row lg:justify-between">
          <h3 data-reveal class="mb-1 font-semibold">[ What You'll Get ]</h3>
        </div>
        <div class="flex flex-col my-2 lg:flex-row lg:justify-between">
          <div class="md:w-[70%]">
            <h1
              data-split
              class="inline-block text-[30px] font-semibold capitalize text-gray-900 md:text-[35px] lg:text-[45px] xl:text-[60px] xl:w-[75%] leading-tight xl:leading-none"
            >
              Designed to Help You Succeed
            </h1>
          </div>
        </div>
      </div>

      <div
        data-reveal-group
        class="flex flex-col flex-wrap items-start justify-center px-2 py-2 cards md:my-4 md:flex-row"
      >
        <div
          class="flex flex-row items-start justify-between gap-2 my-8 md:items-start lg:items-start md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div class="-rotate-90">
            <h1
              class="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text md:my-2 lg:my-4"
            >
              01
            </h1>
          </div>
          <div>
            <h2 class="text-[1.25rem] font-semibold lg:text-[25px]">A head start</h2>
            <p class="text-base lg:leading-loose">
              We already know what features your business needs in order to thrive.
            </p>
          </div>
        </div>
        <div
          class="flex flex-row items-start justify-between gap-2 my-8 md:items-center lg:items-start md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div class="-rotate-90">
            <h1
              class="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text md:my-2 lg:my-4"
            >
              02
            </h1>
          </div>
          <div>
            <h2 class="text-[1.25rem] font-semibold lg:text-[25px]">A focused consultation</h2>
            <p class="text-base lg:leading-loose">
              We offer cost-effective services tailored to your specific needs.
            </p>
          </div>
        </div>
        <div
          class="flex flex-row items-start justify-between gap-2 my-8 md:items-center lg:items-start md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div class="-rotate-90">
            <h1
              class="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text md:my-2 lg:my-4"
            >
              03
            </h1>
          </div>
          <div>
            <h2 class="text-[1.25rem] font-semibold lg:text-[25px]">Cross-linked action</h2>
            <p class="text-base lg:leading-loose">
              Our interdisciplinary team offers a comprehensive range of services.
            </p>
          </div>
        </div>
        <div
          class="flex flex-row items-start justify-between gap-2 my-8 md:items-center lg:items-start md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div class="-rotate-90">
            <h1
              class="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text md:my-2 lg:my-4"
            >
              04
            </h1>
          </div>
          <div>
            <h2 class="text-[1.25rem] font-semibold lg:text-[25px]">Assistance</h2>
            <p class="text-base lg:leading-loose">
              Through open and easy communication, we support you in each and every stage.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vision Section  -->
    <div
      v-if="
        isVisible(
          'Our vision leading digital solution  business success attention Transparency and Integrity uality and Excellence Flexibility and Efficiency Experience Innovations Inclusion and collaboration',
        )
      "
      class="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-6 px-4 md:my-14 md:flex-row md:px-6 lg:my-20 lg:px-8 max-w-[1450px]"
    >
      <div
        data-reveal
        class="w-full rounded-3xl bg-gradient-to-r from-[#185464] to-[#13404c] md:w-[45%] px-8 py-8 flex-1 xl:py-4"
      >
        <h1 class="my-6 text-base font-semibold text-white xl:my-2">/ Vision /</h1>
        <p
          class="my-2 text-lg font-normal text-white md:text-lg lg:leading-tight lg:text-[25px] xl:mb-18"
        >
          Our vision is to be a leading digital solution company known for its innovative, quality,
          and reliable services. Customer satisfaction and business success are always at the center
          of our attention.
        </p>
      </div>

      <div
        data-reveal
        class="w-full rounded-3xl bg-[#f0f2f4] px-8 py-8 xl:py-6 flex-1 text-lg text-gray-800 md:w-[45%]"
      >
        <h1 class="my-2 font-semibold xl:my-2">[Core Value]</h1>
        <ul class="space-y-1 md:space-y-3">
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Transparency and Integrity</span>
          </li>
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Quality and Excellence</span>
          </li>
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Flexibility and Efficiency</span>
          </li>
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Experience</span>
          </li>
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Innovations</span>
          </li>
          <li class="flex items-center gap-3 text-base">
            <svg
              class="w-auto h-5 md:h-5 lg:h-6"
              width="100%"
              height="100%"
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
            <span>Inclusion and Collaboration</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Over the Years Section -->
    <div
      v-if="
        isVisible('Over the years motivates us to continue  new challenges improve our services')
      "
      class="mx-auto my-10 mt-14 w-full px-4 md:my-2 md:px-12 lg:my-8 lg:mt-24 lg:px-16 max-w-[1450px]"
    >
      <h3 data-reveal class="mb-2 font-semibold">[Fun Facts]</h3>
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h1
            data-reveal
            class="inline-block text-[27px] font-semibold capitalize text-black md:text-[32px] lg:text-[42px] xl:text-[57px] leading-tight"
          >
            Over the years, we have done many things that we are proud of. This motivates us to
            continue looking for new challenges in order to improve our services.
          </h1>
        </div>
      </div>
    </div>
    <div
      v-if="isVisible('Projects Completed Client Satisfaction Happy Clients Years Experience')"
      ref="funFactsElement"
      data-reveal-group
      class="mx-auto my-10 flex w-full flex-wrap items-center justify-center px-4 py-2 md:justify-start md:px-12 lg:px-16 lg:pb-6 max-w-[1450px]"
    >
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ projectCount }}+
        </h1>
        <h2 class="text-xl font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 512 512"
          >
            <path
              d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
            />
          </svg>
          Projects Completed
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ productCount }}%
        </h1>
        <h2 class="text-xl font-semibold flex items-center">
          <svg
            class="inline-block w-auto h-4 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"
            />
          </svg>
          Client Satisfaction
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ happyClientsCount }}+
        </h1>
        <h2 class="text-xl font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 512 512"
          >
            <path
              d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"
            />
          </svg>
          Happy Clients
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ yearsExperienceCount }}+
        </h1>
        <h2 class="text-xl font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 640 512"
          >
            <path
              d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"
            />
          </svg>
          Years Experience
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { userSearchStore } from "@/stores/SearchStore";
import PageBanner from "@/components/PageBanner.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const store = userSearchStore();

const pageRoot = ref(null);
useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();

  if (!query) {
    return true;
  }
  const keyword = query.split(/\s+/).filter(Boolean);

  const content = tags.toLowerCase();

  return keyword.every((word) => content.includes(word));
};

const missionCount = ref(0);
const projectCount = ref(0);
const productCount = ref(0);
const happyClientsCount = ref(0);
const yearsExperienceCount = ref(0);
const counterElement = ref(null);
const funFactsElement = ref(null);
const hasAnimatedMission = ref(false);
const hasAnimatedFunFacts = ref(false);

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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        if (entry.target === counterElement.value && !hasAnimatedMission.value) {
          hasAnimatedMission.value = true;
          startCounter(missionCount, 150);
        }

        if (entry.target === funFactsElement.value && !hasAnimatedFunFacts.value) {
          hasAnimatedFunFacts.value = true;
          startCounter(projectCount, 150);
          startCounter(productCount, 98);
          startCounter(happyClientsCount, 120);
          startCounter(yearsExperienceCount, 10);
        }
      });
    },
    { threshold: 0.4 },
  );

  if (counterElement.value) {
    observer.observe(counterElement.value);
  }

  if (funFactsElement.value) {
    observer.observe(funFactsElement.value);
  }
});
</script>

<style scoped>
.bgimage {
  background:
    linear-gradient(to right, rgba(24, 84, 100, 0.8), rgba(19, 64, 76, 0.8)),
    url(../assets/servicecard.webp);

  background-size: cover;
  background-position: center;
}

.animate-text-scroll {
  display: inline-block;
  padding-left: 0;
  /* Use 'linear' to keep speed constant */
  animation: text-scroll 14s linear infinite;
}

@keyframes text-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
