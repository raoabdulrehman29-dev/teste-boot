<template>
  <div ref="pageRoot">
    <div>
      <PageBanner title="Contact Us" currentPage="Contact Us" />
    </div>

    <div
      v-if="
        isVisible(
          'contact name form get in touch consultants phone email whatsapp location lahore form message follow us social linkedin facebook',
        )
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mapbg w-full mx-auto my-4 md:my-16 flex flex-col gap-10 px-4 md:px-8 lg:px-12 xl:px-16 lg:flex-row lg:items-center lg:justify-between max-w-[1450px] md:px-8"
    >
      <!-- Faint centered world-map background (matches reference look) -->
      <div
        class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-5 md:opacity-[0.15]"
      >
        <img
          src="../assets/mapbg.webp"
          alt=""
          class="h-1/2 w-full object-cover md:h-3/4 md:w-3/4"
        />
      </div>

      <div data-reveal class="relative z-10 w-full lg:w-[50%]">
        <div class="mb-10">
          <h3 class="mb-2 font-semibold">[ Get In Touch ]</h3>
          <div class="flex flex-col">
            <div>
              <h1
                class="inline-block text-[28px] font-semibold capitalize leading-tight text-gray-900 md:text-[35px] lg:text-[45px] xl:text-[60px]"
              >
                Awesome things in working with us
              </h1>
              <h2
                class="mt-4 max-w-[650px] text-base font-medium leading-4 text-gray-700 md:text-lg md:leading-8"
              >
                Speak with our consultants today and discover how to take your business to the next
                level.
              </h2>
            </div>
          </div>
        </div>
        <div class="w-full space-y-10">
          <div class="flex flex-col gap-8 md:flex-row md:justify-between">
            <div class="md:w-[45%]">
              <h2 class="text-[18px] font-semibold">Call Us</h2>
              <a
                href="https://wa.me/923394025020"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-2 text-base md:text-lg hover:text-[#0A66C2] hover:scale-105"
              >
                +92 (339) 4025020
              </a>
            </div>
            <div class="md:w-[45%]">
              <h2 class="text-[18px] font-semibold">Our Location</h2>
              <p class="mt-2 text-base md:text-lg">
                Plaza no 5, Block D Commercial Basement, Architects Engineers Housing Society,
                Lahore, 54000
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-8 md:flex-row md:justify-between">
            <div class="md:w-[45%]">
              <h2 class="text-[18px] font-semibold">Email</h2>
              <a
                href="mailto:info@invictushub.com"
                class="inline-block mt-2 text-base underline md:text-lg hover:text-[#0A66C2] hover:scale-105"
              >
                info@invictushub.com
              </a>
            </div>
            <div class="md:w-[45%]">
              <h2 class="text-[18px] font-semibold">Follow Us</h2>
              <div class="flex gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/company/invictus-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Invictus Hub on LinkedIn"
                  class="group transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <svg
                    class="h-6 p-0 m-0 transition-colors duration-300 group-hover:fill-[#0A66C2]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/p/Invictus-Hub-100086688422372"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Invictus Hub on Facebook"
                  class="group transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <svg
                    class="h-6 p-0 m-0 transition-colors duration-300 group-hover:fill-[#1877F2]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-reveal
        class="relative z-10 w-full lg:w-[50%] rounded-3xl py-6 px-4 shadow-sm backdrop-blur-[2px] xl:px-20 xl:py-14"
        style="background: rgba(243, 244, 246, 0.5); border: 1px solid rgba(255, 255, 255, 0.2)"
      >
        <div
          class="text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-black pb-4 md:pb-8"
        >
          Get In Touch
        </div>

        <div v-if="isSubmitted" class="mt-4 p-4 text-sm text-green-700 bg-green-100 rounded-2xl">
          ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>

        <div v-if="apiError" class="mt-4 p-3 text-sm text-red-700 bg-red-100 rounded-2xl">
          {{ apiError }}
        </div>

        <form @submit.prevent="handleSubmit" class="mt-6 flex flex-col gap-5 rounded-3xl">
          <!-- Full Name -->
          <div class="relative">
            <input
              v-model="formdata.name"
              type="text"
              id="cf-name"
              placeholder=" "
              class="peer block w-full appearance-none rounded-2xl border border-gray-300 bg-white px-4 pb-2.5 pt-5 text-sm text-black transition-colors focus:border-[#185464] focus:outline-none focus:ring-0"
              :class="{ 'border-red-500': fieldErrors.name }"
            />
            <label for="cf-name" class="floating-label">Full Name *</label>
            <p v-if="fieldErrors.name" class="mt-1.5 text-sm text-red-500">
              {{ fieldErrors.name }}
            </p>
          </div>

          <!-- Phone -->
          <div class="relative">
            <input
              v-model="formdata.phone"
              type="tel"
              id="cf-phone"
              placeholder=" "
              class="peer block w-full appearance-none rounded-2xl border border-gray-300 bg-white px-4 pb-2.5 pt-5 text-sm text-black transition-colors focus:border-[#185464] focus:outline-none focus:ring-0"
              :class="{ 'border-red-500': fieldErrors.phone }"
            />
            <label for="cf-phone" class="floating-label">Phone No: *</label>
            <p v-if="fieldErrors.phone" class="mt-1.5 text-sm text-red-500">
              {{ fieldErrors.phone }}
            </p>
          </div>

          <!-- Email -->
          <div class="relative">
            <input
              v-model="formdata.email"
              type="email"
              id="cf-email"
              placeholder=" "
              class="peer block w-full appearance-none rounded-2xl border border-gray-300 bg-white px-4 pb-2.5 pt-5 text-sm text-black transition-colors focus:border-[#185464] focus:outline-none focus:ring-0"
              :class="{ 'border-red-500': fieldErrors.email }"
            />
            <label for="cf-email" class="floating-label">Email *</label>
            <p v-if="fieldErrors.email" class="mt-1.5 text-sm text-red-500">
              {{ fieldErrors.email }}
            </p>
          </div>

          <!-- Country -->
          <div class="relative">
            <input
              v-model="formdata.country"
              type="text"
              id="cf-country"
              placeholder=" "
              class="peer block w-full appearance-none rounded-2xl border border-gray-300 bg-white px-4 pb-2.5 pt-5 text-sm text-black transition-colors focus:border-[#185464] focus:outline-none focus:ring-0"
              :class="{ 'border-red-500': fieldErrors.country }"
            />
            <label for="cf-country" class="floating-label">Country</label>
            <p v-if="fieldErrors.country" class="mt-1.5 text-sm text-red-500">
              {{ fieldErrors.country }}
            </p>
          </div>

          <!-- Message -->
          <div class="relative">
            <textarea
              v-model="formdata.message"
              id="cf-message"
              rows="6"
              placeholder=" "
              class="peer block w-full resize-none appearance-none rounded-2xl border border-gray-300 bg-white px-4 pb-2.5 pt-5 text-sm text-black transition-colors focus:border-[#185464] focus:outline-none focus:ring-0"
              :class="{ 'border-red-500': fieldErrors.message }"
            ></textarea>
            <label for="cf-message" class="floating-label floating-label--textarea"
              >Message *</label
            >
            <p v-if="fieldErrors.message" class="mt-1.5 text-sm text-red-500">
              {{ fieldErrors.message }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting || isSubmitted"
            class="flex items-center justify-center gap-2 rounded-2xl border border-[#185464] text-[#185464] bg-transparent px-6 sm:px-8 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300 self-start disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#185464] group font-medium"
          >
            <span v-if="!isSubmitting">Send Message</span>
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
              Sending...
            </span>

            <!-- Arrow Icon (only when not submitting) -->
            <svg
              v-if="!isSubmitting"
              class="w-4 h-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <div
      v-if="
        isVisible('map office location directions lahore pakistan invictus hub address google maps')
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      data-reveal
      class="h-[500px] my-6 rounded-3xl overflow-hidden w-full"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.0057897813485!2d74.25845847609618!3d31.441507551033396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901ef0abcfda5%3A0xd638ad032f44e8cb!2sInvictus%20Hub!5e0!3m2!1sen!2s!4v1776697115208!5m2!1sen!2s"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { userSearchStore } from "@/stores/SearchStore";
import axios from "axios";
import PageBanner from "@/components/PageBanner.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const store = userSearchStore();

const pageRoot = ref(null);
useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });

const formdata = ref({
  name: "",
  phone: "",
  email: "",
  country: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const apiError = ref(null);
const fieldErrors = ref({});

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();
  if (!query) return true;
  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => tags.toLowerCase().includes(word));
};

const validateForm = () => {
  fieldErrors.value = {};
  let isValid = true;

  if (!formdata.value.name?.trim()) {
    fieldErrors.value.name = "Full name is required.";
    isValid = false;
  }
  if (!formdata.value.phone?.trim()) {
    fieldErrors.value.phone = "Phone number is required.";
    isValid = false;
  }
  if (!formdata.value.email?.trim()) {
    fieldErrors.value.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formdata.value.email)) {
    fieldErrors.value.email = "Please enter a valid email address.";
    isValid = false;
  }
  if (!formdata.value.message?.trim()) {
    fieldErrors.value.message = "Message is required.";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  fieldErrors.value = {};
  apiError.value = null;
  isSubmitted.value = false;

  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/contact", formdata.value, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data.status) {
      isSubmitted.value = true;
      setTimeout(() => {
        isSubmitted.value = false;
      }, 5000);
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
      apiError.value = "Please fix the validation errors above.";
    } else {
      apiError.value = error.response?.data?.message || "Something went wrong. Please try again.";
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Floating-label form fields */
.floating-label {
  position: absolute;
  left: 0.75rem;
  top: 0.5rem;
  z-index: 10;
  transform-origin: 0 0;
  transform: translateY(-1rem) scale(0.75);
  padding: 0 0.5rem;
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
  background: #f3f4f6; /* gray-100 — masks the field border where the label floats */
  pointer-events: none;
  transition: all 0.2s ease;
}

/* Resting state: empty & unfocused → sit inside the field like a placeholder */
.peer:placeholder-shown ~ .floating-label {
  top: 50%;
  transform: translateY(-50%) scale(1);
  background: transparent;
}

/* Textarea resting label sits near the top, not vertically centered */
.peer:placeholder-shown ~ .floating-label--textarea {
  top: 1.1rem;
  transform: translateY(0) scale(1);
}

/* Focused → float up and pick up the brand colour */
.peer:focus ~ .floating-label {
  top: 0.5rem;
  transform: translateY(-1rem) scale(0.75);
  background: #f3f4f6;
  color: #185464;
}

.mapbg {
  position: relative;
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
</style>
