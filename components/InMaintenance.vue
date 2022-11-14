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
        <span class="ml-4 font-wotfardBold text-xl mt-1.5 text-gray"> 243digit </span>
      </div>
      <h1 class="font-wotfardBold text-4xl sm:text-6xl mt-8 sm:mt-16 relative">
        Nous sommes en
        <span class="text-white bg__txt_blue">construction</span>
      </h1>
      <div class="mt-10">
        <p class="text-lg sm:text-xl mt-6 sm:mt-12">
          <span class="text-white">Nous travaillons sur notre site web.</span> Il sera en
          ligne sous peu. En attendant, contactez-nous en cas de besoin.
        </p>
      </div>

      <div class="bg-blackContrast text-white mt-16 rounded-md min-w-full p-8 relative">
        <span class="font-wotfardBold">1d</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InMaintenance",
};
</script>
