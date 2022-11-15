<!-- Please remove this file from your project -->
<template>
  <div
    class="d_inmaintain w-full h-full flex flex-center justify-center items-center py-24 px-6 sm:px-0"
  >
    <div class="bg-d_inmaintain absolute w-full top-0 right-0 left-0 bottom-0"></div>
    <div
      class="bg-d_inmaintain__overlay absolute w-full top-0 right-0 left-0 bottom-0"
    ></div>

    <div class="max-w-lg text-center">
      <div
        class="border-b-2 pb-10 border-b-gray border-opacity-20 flex justify-center items-center w-full"
      >
        <span class="hidden sm:block">
          <UtilsLogo :w="40" />
        </span>
        <span class="block sm:hidden">
          <UtilsLogo :w="30" />
        </span>
        <span class="ml-4 font-bold text-xl mt-1.5 text-gray"> 243digit </span>
      </div>
      <h1 class="font-bold text-4xl sm:text-6xl mt-8 sm:mt-16 relative">
        Nous sommes en
        <span class="text-white font-semibold underline">construction</span>
      </h1>
      <div class="mt-10">
        <p class="text-lg sm:text-xl mt-6 sm:mt-12">
          <span class="text-white">Nous travaillons sur notre site web.</span> Il sera en
          ligne sous peu. En attendant, contactez-nous en cas de besoin.
        </p>
      </div>

      <div class="relative mt-4 flex justify-center space-x-4">
        <span class="text-blue underline">contact@243digit.xyz</span
        ><span class="text-green underline">+243970578507</span>
      </div>

      <div
        class="bg-blackContrast bg-opacity-70 backdrop-blur font-bold text-white text-2xl sm:text-4xl mt-16 rounded-md min-w-full p-8 relative"
      >
        <div id="countdown" class="flex justify-center space-x-2">
          <span class="">00j</span> <span class="text-gray">-</span>
          <span class="">00h</span> <span class="text-gray">-</span>
          <span class="">00m</span> <span class="text-gray">-</span>
          <span class="">00s</span>
        </div>
      </div>

      <div class="mt-12 text-base text-gray">
        <div>© 2022 - <span class="underline font-semibold">243Digit</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  beforeMount() {
    const countDownDate = new Date("Dec 01, 2022 00:00:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        "<span>" +
        days +
        "</span> j <span class='text-gray'>-</span> <span>" +
        hours +
        "</span> h <span class='text-gray'>-</span> <span> " +
        minutes +
        "</span> m <span class='text-gray'>-</span> <span> " +
        seconds +
        "<span class=''>s</span> ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  },
});
</script>
