<!-- Please remove this file from your project -->
<template>
  <div
    class="d_inmaintain w-full h-full flex flex-center justify-center items-center py-24 px-6 sm:px-0"
  >
    <div class="bg-d_inmaintain absolute w-full top-0 right-0 left-0 bottom-0"></div>
    <div
      class="bg-d_inmaintain__overlay absolute w-full top-0 right-0 left-0 bottom-0"
    ></div>

    <div class="max-w-lg">
      <div class="flex justify-left items-center w-full">
        <span class="hidden sm:block">
          <UtilsLogo :w="40" />
        </span>
        <span class="block sm:hidden">
          <UtilsLogo :w="30" />
        </span>
        <span class="ml-4 font-wotfardBold text-2xl mt-2 text-gray"> 243digit </span>
      </div>
      <h1 class="font-wotfardBold text-4xl sm:text-6xl mt-8 sm:mt-16 relative">
        Nous sommes en
        <span
          class="text-white relative z-10 after:-rotate-3 after:bg-blue after:opacity-80 after:h-full after:w-full after:absolute after:left-0 after:-z-10"
          >maintenance</span
        >
      </h1>
      <p class="mt-6 sm:mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem cum
        porro, sapiente non, nemo assumenda corrupti unde saepe id quisquam illum est
        quasi ipsum recusandae necessitatibus,
        <span class="text-white">quis nulla eveniet !</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InMaintenance",
};
</script>
