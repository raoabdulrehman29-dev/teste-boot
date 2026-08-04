<template>
  <div
    class="hidden 2xl:flex absolute inset-y-0 2xl:right-[3%] z-[-10] pointer-events-none items-center justify-end pr-4 lg:pr-6 xl:pr-10 mb-12 xl:mb-16">

    <div class="relative [perspective:1000px]">

      <div
        class="relative z-[-10]  2xl:w-[450px]  mt-12 rounded-3xl border border-[#2bb6c4]/40 bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-700 ease-out transform [transform-style:preserve-3d] -rotate-y-6 rotate-x-3 hover:rotate-0 hover:scale-[1.01] shadow-[0_20px_60px_-15px_rgba(43,182,196,0.15)]">

        <div
          class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#c8dce6] via-[#d4e8f0] to-[#c0d8e4] border-b border-[#2bb6c4]/30">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-400/80 shadow-[0_0_8px_#fb7185] inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_#fbbf24] inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#34d399] inline-block"></span>
          </div>

          <div
            class="flex items-center gap-1.5 text-xs text-gray-700 font-mono tracking-wide px-3 py-0.5 rounded-full bg-[#b8d0dc] border border-[#2bb6c4]/40">
            <span class="text-[#185464] font-bold">&lt;/&gt;</span>
            EnterpriseSolution.tsx
          </div>
          <div class="w-8"></div>
        </div>

        <div
          class="p-5 font-mono text-xs sm:text-sm leading-relaxed text-left min-h-[230px] whitespace-pre-wrap bg-gradient-to-b from-[#f5fafc] via-white to-[#f0f8fa] text-gray-800">
          <span v-html="renderedCode"></span>
          <span
            class="inline-block w-2.5 h-4 ml-0.5 bg-[#2bb6c4] animate-pulse align-middle shadow-[0_0_10px_#2bb6c4]"></span>
        </div>

        <div
          class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#c8dce6] via-[#d4e8f0] to-[#c0d8e4] border-t border-[#2bb6c4]/30">
          <div class="flex gap-1.5">
            <div
              class="px-2.5 py-1 bg-white/90 border border-[#2bb6c4]/50 rounded-lg text-[11px] font-semibold text-[#185464] shadow-[0_0_10px_rgba(43,182,196,0.1)] flex items-center gap-1 backdrop-blur-sm">
              <span>⚛️ React</span>
            </div>
            <div
              class="px-2.5 py-1 bg-white/90 border border-[#2bb6c4]/50 rounded-lg text-[11px] font-semibold text-[#185464] shadow-[0_0_10px_rgba(43,182,196,0.1)] flex items-center gap-1 backdrop-blur-sm">
              <span>🟢 Vue</span>
            </div>
            <div
              class="px-2.5 py-1 bg-white/90 border border-[#2bb6c4]/50 rounded-lg text-[11px] font-semibold text-[#185464] shadow-[0_0_10px_rgba(43,182,196,0.1)] flex items-center gap-1 backdrop-blur-sm">
              <span>🔺 Laravel</span>
            </div>
          </div>

          <span class="text-[10px] text-[#185464] font-mono flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-[#2bb6c4] animate-ping"></span>
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Cyber Matrix Syntax Highlighting (Original Theme)
const codeSequence = [
  `<span class="text-slate-500">// Trusted Technology Partner</span>\n`,

  `<span class="text-fuchsia-400 font-semibold">const</span> <span class="text-sky-300">platform</span> = <span class="text-fuchsia-400">await</span> <span class="text-cyan-300">deployPlatform</span>({\n`,

  `  <span class="text-cyan-400">security</span>: <span class="text-emerald-300">"Enterprise Grade"</span>,\n`,

  `  <span class="text-cyan-400">uptime</span>: <span class="text-emerald-300">"99.9%"</span>,\n`,

  `  <span class="text-cyan-400">support</span>: <span class="text-emerald-300">"24/7 Available"</span>,\n`,

  `});\n\n`,

  `<span class="text-slate-500">// System health verified</span>\n`,

  `<span class="text-cyan-400">console</span>.<span class="text-fuchsia-400">info</span>(<span class="text-emerald-300">\`✓ All Services Online\`</span>);`
];

const renderedCode = ref("");
let typingTimer = null;

const startLiveTyping = () => {
  const fullText = codeSequence.join("");
  let index = 0;

  const type = () => {
    if (index < fullText.length) {
      if (fullText[index] === "<") {
        const tagEnd = fullText.indexOf(">", index);
        if (tagEnd !== -1) {
          index = tagEnd + 1;
        }
      } else {
        index++;
      }

      renderedCode.value = fullText.slice(0, index);
      typingTimer = setTimeout(type, 45);
    }
  };

  type();
};

onMounted(() => {
  setTimeout(startLiveTyping, 500);
});

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer);
});
</script>