<template>
  <div v-if="job" class="fade-in">
    <div class="overflow-hidden">
      <div
        v-if="
          isVisible([
            job.title,
            job.department,
            job.short_description,
            job.location,
            job.type,
            job.experience,
            ...(job.technologies || []),
            'apply for application summary form personal information contact information resume cover letter',
          ])
        "
        class="banner relative isolate mt-3 mb-10 flex min-h-[280px] md:min-h-[400px] items-center rounded-[25px] lg:min-h-[540px]"
      >
        <!-- Top left decoration - hidden on mobile -->
        <div class="absolute top-0 left-0 z-20 hidden lg:block rounded-3xl">
          <div class="relative">
            <div class="h-[66px] w-[100px] overflow-hidden rounded-br-3xl bg-white"></div>
            <div
              class="absolute -right-[19px] top-0 z-30 h-[40px] w-[19px] rounded-tl-3xl bg-transparent shadow-[-24px_-24px_0_23px_#fff]"
            ></div>
            <div
              class="absolute -bottom-[19px] left-0 z-30 h-[19px] w-[40px] rounded-tl-3xl bg-transparent shadow-[-19px_-19px_0_18px_#fff]"
            ></div>
          </div>
        </div>

        <div
          class="relative z-10 my-4 w-full px-4 py-12 pb-[5rem] md:my-6 md:px-6 md:py-16 md:pb-[6rem] lg:my-8 lg:px-20 lg:py-20"
        >
          <div class="grid items-start gap-6 md:gap-8 xl:grid-cols-2 lg:gap-12 md:my-6">
            <div class="text-white">
              <div
                class="mb-3 md:mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[10px] font-medium uppercase tracking-[0.2em]"
              >
                {{ job.department }}
              </div>
              <h1
                class="mb-3 md:mb-6 text-2xl md:text-4xl font-bold leading-[1.1] lg:leading-[1.2] lg:text-5xl"
              >
                Apply For {{ job.title }}
              </h1>

              <!-- Description - HIDDEN on mobile -->
              <p
                class="hidden md:block max-w-xl mb-6 md:mb-10 text-base leading-relaxed text-white/70 md:text-xl"
              >
                Share your details with us and take the next step toward joining the Invictus Hub
                team.
              </p>

              <!-- Experience/Type/Location/Status - HIDDEN on mobile -->
              <div class="hidden md:grid mb-4 gap-3 md:gap-4 sm:grid-cols-2 xl:max-w-2xl">
                <div
                  class="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 md:px-5 py-3 md:py-4 backdrop-blur-sm"
                >
                  <span
                    class="mb-1 block text-[8px] md:text-[10px] uppercase tracking-[0.18em] text-white/50"
                    >Experience</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.experience }}</span>
                </div>
                <div
                  class="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 md:px-5 py-3 md:py-4 backdrop-blur-sm"
                >
                  <span
                    class="mb-1 block text-[8px] md:text-[10px] uppercase tracking-[0.18em] text-white/50"
                    >Type</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.type }}</span>
                </div>
                <div
                  class="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 md:px-5 py-3 md:py-4 backdrop-blur-sm"
                >
                  <span
                    class="mb-1 block text-[8px] md:text-[10px] uppercase tracking-[0.18em] text-white/50"
                    >Location</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.location }}</span>
                </div>
                <div
                  class="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 md:px-5 py-3 md:py-4 backdrop-blur-sm"
                >
                  <span
                    class="mb-1 block text-[8px] md:text-[10px] uppercase tracking-[0.18em] text-white/50"
                    >Status</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.status }}</span>
                </div>
              </div>
            </div>

            <!-- Application Summary - HIDDEN on mobile -->
            <div class="hidden xl:flex relative justify-center lg:ml-6 lg:pl-10">
              <div class="absolute rounded-full -inset-4 bg-cyan-400 opacity-30 blur-3xl"></div>
              <div
                class="relative w-full max-w-md rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-md"
              >
                <h4 class="mb-4 text-xl font-bold leading-tight">Application Summary</h4>
                <p class="mb-6 text-sm leading-7 text-white/70">
                  Make sure your details are complete before you submit your application.
                </p>
                <div class="space-y-3 text-sm text-white/85">
                  <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10">
                    <span class="text-white/60">Role</span>
                    <span class="font-semibold">{{ job.title }}</span>
                  </div>
                  <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10">
                    <span class="text-white/60">Department</span>
                    <span class="font-semibold">{{ job.department }}</span>
                  </div>
                  <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10">
                    <span class="text-white/60">Tech Stack</span>
                    <span class="font-semibold">{{ job.technologies?.length || 0 }} Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom breadcrumb - Made smaller on mobile -->
        <div class="absolute bottom-0 left-0 z-20">
          <div class="relative inline-block">
            <div
              class="absolute -top-[19px] left-0 z-30 h-[19px] w-[40px] rounded-bl-3xl bg-transparent shadow-[-10px_10px_0_9px_#fff]"
            ></div>
            <div class="relative z-40">
              <div
                class="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-3 text-xs md:text-base font-normal bg-white rounded-tr-3xl lg:px-20 lg:py-8"
              >
                <router-link to="/" class="underline">Home</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <router-link to="/career" class="underline">Careers</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <span class="page-title">{{ job.title }}</span>
              </div>
            </div>
            <div
              class="absolute bottom-0 -right-[18px] z-30 h-[30px] w-[22px] rounded-bl-3xl bg-transparent shadow-[-11px_24px_0_10px_#fff] md:-right-[18px] md:w-[18px] lg:h-[32px]"
            ></div>
          </div>
        </div>

        <!-- Bottom right decoration - hidden on mobile -->
        <div class="absolute bottom-0 right-0 z-20 hidden lg:block">
          <div class="relative">
            <div class="h-[14.21vw] w-[90px] rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div
              class="absolute -top-[19px] right-0 z-30 h-[19px] w-[40px] rounded-br-3xl bg-transparent shadow-[13px_11px_0_10px_#fff]"
            ></div>
            <div
              class="absolute -left-[19px] bottom-0 z-30 h-[40px] w-[19px] rounded-br-3xl bg-transparent shadow-[6px_9px_0_4px_#fff]"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <section
      v-if="
        isVisible([
          job.title,
          job.department,
          ...(job.technologies || []),
          'application form personal information contact professional details resume cover letter role snapshot',
        ])
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mx-auto my-16 grid w-full gap-8 px-4 md:px-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] lg:px-8"
    >
      <div
        class="rounded-[2.5rem] border border-gray-100 bg-white p-5 shadow-[0_18px_50px_-28px_rgba(17,24,39,0.28)] sm:p-8 lg:p-10"
      >
        <div class="max-w-3xl mb-10">
          <span
            class="mb-3 inline-block rounded-full bg-[#185464]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#185464]"
          >
            Application Form
          </span>
          <h2 class="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            Tell us about yourself
          </h2>
          <p class="text-sm leading-7 text-gray-500 md:text-base">
            Fill in the details below to apply for this opportunity.
          </p>
        </div>

        <form
          v-if="!issubmitted && !alreadyApplied"
          @submit.prevent="handleSubmit"
          class="space-y-10"
        >
          <div>
            <h3 class="mb-5 text-lg font-semibold leading-tight text-gray-900 md:text-xl">
              Personal Information
            </h3>
            <div class="grid gap-5 md:grid-cols-1">
              <label class="field-group">
                <span class="field-label">Full Name*</span>
                <input
                  v-model="formdata.name"
                  type="text"
                  name="name"
                  class="field-input"
                  :class="{ 'border-red-500': fieldErrors.name }"
                  placeholder="Enter your full name"
                />
                <p v-if="fieldErrors.name" class="field-error">
                  {{ fieldErrors.name }}
                </p>
              </label>
            </div>
          </div>

          <div>
            <h3 class="mb-5 text-lg font-semibold leading-tight text-gray-900 md:text-xl">
              Contact Information
            </h3>
            <div class="grid gap-5 md:grid-cols-2">
              <label class="field-group md:col-span-2">
                <span class="field-label">Email Address*</span>
                <input
                  v-model="formdata.email"
                  type="email"
                  name="email"
                  class="field-input"
                  :class="{ 'border-red-500': fieldErrors.email }"
                  placeholder="you@example.com"
                />
                <p v-if="fieldErrors.email" class="field-error">
                  {{ fieldErrors.email }}
                </p>
              </label>
              <label class="field-group">
                <span class="field-label">Phone Number*</span>
                <input
                  v-model="formdata.phone"
                  type="tel"
                  name="phone"
                  class="field-input"
                  :class="{ 'border-red-500': fieldErrors.phone }"
                  placeholder="+92 300 1234567"
                />
                <p v-if="fieldErrors.phone" class="field-error">
                  {{ fieldErrors.phone }}
                </p>
              </label>
              <label class="field-group">
                <span class="field-label">Country</span>
                <input
                  v-model="formdata.country"
                  type="text"
                  name="country"
                  class="field-input"
                  :class="{ 'border-red-500': fieldErrors.country }"
                  placeholder="Pakistan"
                />
                <p v-if="fieldErrors.country" class="field-error">
                  {{ fieldErrors.country }}
                </p>
              </label>
              <label class="field-group md:col-span-2">
                <span class="field-label">Portfolio URL</span>
                <input
                  v-model="formdata.portfolio_url"
                  type="url"
                  name="portfolio_url"
                  class="field-input"
                  :class="{ 'border-red-500': fieldErrors.portfolio_url }"
                  placeholder="https://your-portfolio.com"
                />
                <p v-if="fieldErrors.portfolio_url" class="field-error">
                  {{ fieldErrors.portfolio_url }}
                </p>
              </label>
            </div>
          </div>

          <div>
            <h3 class="mb-5 text-lg font-semibold leading-tight text-gray-900 md:text-xl">
              Resume and Cover Letter
            </h3>
            <div class="space-y-5">
              <label class="field-group">
                <span class="field-label">Upload your CV / Resume*</span>
                <div class="upload-box" :class="{ 'border-red-500': fieldErrors.resume }">
                  <input
                    @change="handleFileChange"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div class="flex flex-col items-center justify-center text-center">
                    <span class="mb-2 text-sm font-semibold text-[#185464]"
                      >Click to upload your file</span
                    >
                    <span class="text-xs leading-6 text-gray-500">PDF, DOC, or DOCX up to 5MB</span>
                  </div>
                  <div
                    v-if="formdata.resume"
                    class="flex items-center justify-center mt-2 text-sm text-green-600"
                  >
                    ✓ {{ formdata.resume.name }} ({{ (formdata.resume.size / 1024).toFixed(1) }}
                    KB)
                  </div>
                </div>
                <p v-if="fieldErrors.resume" class="field-error">
                  {{ fieldErrors.resume }}
                </p>
              </label>

              <label class="field-group">
                <span class="field-label">Why are you interested in this position?</span>
                <textarea
                  v-model="formdata.message"
                  name="message"
                  rows="6"
                  class="field-input min-h-[170px] resize-none"
                  :class="{ 'border-red-500': fieldErrors.message }"
                  placeholder="Write a short message about your interest, strengths, and experience."
                ></textarea>
                <p v-if="fieldErrors.message" class="field-error">
                  {{ fieldErrors.message }}
                </p>
              </label>
            </div>
          </div>

          <div v-if="apiError" class="p-4 text-sm text-red-700 bg-red-100 rounded-2xl">
            {{ apiError }}
          </div>

          <div
            class="flex flex-col gap-4 pt-6 border-t border-gray-100 md:items-center md:justify-between"
          >
            <p class="max-w-xl text-sm leading-7 text-gray-500">
              By submitting this form, you confirm that the information you provide is accurate and
              ready for review.
            </p>
            <div class="flex flex-col gap-3 sm:flex-row">
              <router-link
                to="/career"
                class="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#185464] hover:text-[#185464]"
              >
                Cancel
              </router-link>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center justify-center rounded-2xl border border-[#185464] bg-transparent px-6 py-3 text-sm font-semibold text-[#185464] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-transparent disabled:hover:text-[#185464] disabled:hover:shadow-none"
              >
                <span v-if="!isSubmitting">Submit Application</span>
                <span v-else>
                  <svg
                    class="inline w-5 h-5 mr-2 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              </button>
            </div>
          </div>
        </form>

        <div v-if="issubmitted">
          <div
            class="relative max-w-2xl p-8 mx-auto overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:-translate-y-1 hover:shadow-2xl"
          >
            <div
              class="absolute w-32 h-32 transition-transform duration-500 rounded-full -right-10 -top-10 bg-green-50 group-hover:scale-150"
            ></div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="flex items-center justify-center w-20 h-20 mb-6 text-green-600 bg-green-100 rounded-full animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1
                class="mb-4 text-2xl font-bold leading-tight text-green-700 md:text-3xl lg:text-4xl"
              >
                Your Application Was
                <span class="block text-green-600 md:inline">Submitted Successfully</span>
              </h1>
              <p class="max-w-md leading-relaxed text-gray-500">
                We've received your details and our recruitment team will review your CV. Check your
                email for a confirmation receipt.
              </p>
              <div class="w-24 h-1 mt-8 rounded-full bg-green-700/20">
                <div class="w-1/2 h-full bg-green-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="alreadyApplied">
          <div
            class="relative max-w-2xl p-8 mx-auto overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:-translate-y-1 hover:shadow-2xl"
          >
            <div
              class="absolute w-32 h-32 transition-transform duration-500 rounded-full -right-10 -top-10 bg-yellow-50 group-hover:scale-150"
            ></div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="flex items-center justify-center w-20 h-20 mb-6 text-yellow-600 bg-yellow-100 rounded-full animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1
                class="mb-4 text-2xl font-bold leading-tight text-yellow-700 md:text-3xl lg:text-4xl"
              >
                You've Already Applied for
                <span class="block text-yellow-600 md:inline">{{ job.title }}</span>
              </h1>
              <p class="max-w-md leading-relaxed text-gray-500">
                You've already submitted an application for this position. Our recruitment team will
                review your application and contact you soon.
              </p>
              <div class="w-24 h-1 mt-8 rounded-full bg-yellow-700/20">
                <div class="w-1/2 h-full bg-yellow-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside
        class="h-fit rounded-[2.5rem] border border-gray-100 bg-gray-50 p-6 shadow-[0_18px_50px_-30px_rgba(17,24,39,0.22)] sm:p-8"
      >
        <h3 class="mb-3 text-2xl font-bold leading-tight text-gray-900">Role Snapshot</h3>
        <p class="mb-6 text-sm leading-7 text-gray-500">
          A quick summary of the role you are applying for.
        </p>
        <div class="space-y-4">
          <div class="rounded-[1.5rem] bg-white px-5 py-4">
            <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
              >Position</span
            >
            <p class="text-base font-semibold leading-7 text-gray-900">
              {{ job.title }}
            </p>
          </div>
          <div class="rounded-[1.5rem] bg-white px-5 py-4">
            <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
              >Location</span
            >
            <p class="text-base font-semibold leading-7 text-gray-900">
              {{ job.location }}
            </p>
          </div>
          <div class="rounded-[1.5rem] bg-white px-5 py-4">
            <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
              >Employment Type</span
            >
            <p class="text-base font-semibold leading-7 text-gray-900">
              {{ job.type }}
            </p>
          </div>
          <div class="rounded-[1.5rem] bg-white px-5 py-4">
            <span class="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
              >Experience</span
            >
            <p class="text-base font-semibold leading-7 text-gray-900">
              {{ job.experience }}
            </p>
          </div>
        </div>
        <div class="mt-8">
          <h4 class="mb-3 text-lg font-semibold text-[#185464]">Key Technologies</h4>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </aside>
    </section>
  </div>

  <div v-else class="flex items-center justify-center min-h-screen px-6 text-center">
    <div>
      <h1 class="mb-3 text-3xl font-bold text-[#185464]">Job Not Found</h1>
      <p class="mb-6 text-gray-500">
        The application page could not find a matching job for this URL.
      </p>
      <router-link
        to="/career"
        class="inline-flex items-center rounded-2xl border border-[#185464] bg-transparent px-6 py-3 font-semibold text-[#185464] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)]"
      >
        Back To Careers
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { userSearchStore } from "@/stores/SearchStore";
import axios from "axios";
import careerData from "@/stores/career.json";

const route = useRoute();
const store = userSearchStore();

const job = ref(null);
const isSubmitting = ref(false);
const issubmitted = ref(false);
const alreadyApplied = ref(false);

const formdata = ref({
  name: "",
  email: "",
  phone: "",
  country: "",
  message: "",
  portfolio_url: "",
  resume: null,
});

const fieldErrors = ref({});
const apiError = ref(null);

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();
  if (!query) return true;
  const content = (Array.isArray(tags) ? tags.join(" ") : tags).toLowerCase();
  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => content.includes(word));
};

onMounted(async () => {
  try {
    job.value = careerData.find((item) => item.slug === route.params.slug) || null;
  } catch (error) {
    console.error("Error loading job details:", error);
  }
});

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (!allowedTypes.includes(file.type)) {
    fieldErrors.value.resume = "Please upload PDF, DOC, or DOCX files only.";
    formdata.value.resume = null;
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    fieldErrors.value.resume = "File size must be less than 5MB.";
    formdata.value.resume = null;
    event.target.value = "";
    return;
  }

  formdata.value.resume = file;
  fieldErrors.value.resume = null;
};

const validateForm = () => {
  fieldErrors.value = {};
  let isValid = true;

  if (!formdata.value.name?.trim()) {
    fieldErrors.value.name = "Full name is required.";
    isValid = false;
  }
  if (!formdata.value.email?.trim()) {
    fieldErrors.value.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formdata.value.email)) {
    fieldErrors.value.email = "Please enter a valid email address.";
    isValid = false;
  }
  if (!formdata.value.phone?.trim()) {
    fieldErrors.value.phone = "Phone number is required.";
    isValid = false;
  }
  if (!formdata.value.resume) {
    fieldErrors.value.resume = "Resume is required.";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  fieldErrors.value = {};
  apiError.value = null;

  if (!validateForm()) return;

  const storageKey = `applicants_${route.params.slug || "general"}`;
  const appliedEmails = JSON.parse(localStorage.getItem(storageKey) || "[]");

  if (appliedEmails.includes(formdata.value.email)) {
    alreadyApplied.value = true;
    fieldErrors.value.email = "You have already applied for this position.";
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = new FormData();
    formData.append("name", formdata.value.name);
    formData.append("email", formdata.value.email);
    formData.append("phone", formdata.value.phone);
    formData.append("country", formdata.value.country || "");
    formData.append("message", formdata.value.message || "");
    formData.append("portfolio_url", formdata.value.portfolio_url || "");
    formData.append("resume", formdata.value.resume);

    const response = await axios.post("http://127.0.0.1:8000/api/apply", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 30000,
    });

    if (response.data.status) {
      appliedEmails.push(formdata.value.email);
      localStorage.setItem(storageKey, JSON.stringify(appliedEmails));
      issubmitted.value = true;
    }
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      apiError.value = "Cannot connect to the server. Please make sure Laravel is running.";
    } else if (error.response?.status === 422) {
      const errors = error.response.data.errors;
      Object.keys(errors).forEach((key) => {
        if (Object.hasOwn(fieldErrors.value, key)) {
          fieldErrors.value[key] = errors[key][0];
        }
      });
      apiError.value = "Please fix the validation errors below.";
    } else {
      apiError.value = error.response?.data?.message || "Something went wrong. Please try again.";
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.banner {
  background:
    linear-gradient(to right, rgba(24, 84, 100, 0.45), rgba(19, 64, 76, 0.45)),
    url("@/assets/page-banner.webp");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field-label {
  color: #1f2937;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.field-input {
  width: 100%;
  border-radius: 1.25rem;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #111827;
  font-size: 0.95rem;
  line-height: 1.5rem;
  outline: none;
  padding: 0.95rem 1rem;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.field-input:focus {
  border-color: #185464;
  box-shadow: 0 0 0 4px rgba(24, 84, 100, 0.12);
}

.field-input.border-red-500 {
  border-color: #dc2626;
}

.field-error {
  color: #dc2626;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: -0.25rem;
}

.upload-box {
  position: relative;
  min-height: 150px;
  border: 1px dashed rgba(24, 84, 100, 0.35);
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(24, 84, 100, 0.03), rgba(43, 182, 196, 0.05));
  padding: 1.5rem;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.upload-box:hover {
  border-color: #185464;
  box-shadow: 0 16px 35px -24px rgba(24, 84, 100, 0.45);
  transform: translateY(-1px);
}

.upload-box.border-red-500 {
  border-color: #dc2626;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin988 {
  0% {
    transform: scale(1) rotate(0);
  }
  20%,
  25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%,
  50% {
    transform: scale(1) rotate(180deg);
  }
  70%,
  75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%,
  100% {
    transform: scale(1) rotate(360deg);
  }
}
.page-title {
  display: inline-block;
  max-width: 200px; /* Adjust based on your design */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Responsive - different max-width for different screen sizes */
@media (max-width: 640px) {
  .page-title {
    max-width: 200px;
  }
}

@media (max-width: 380px) {
  .page-title {
    max-width: 60px;
  }
}
</style>
