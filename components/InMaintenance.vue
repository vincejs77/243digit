<!-- Please remove this file from your project -->
<template>
  <div
    class="d_inmaintain w-full h-full flex flex-center justify-center items-center py-24"
  >
    <div class="w max-w-lg">
      <div class="flex justify-left items-center space-x-4 w-full">
        <span>
          <UtilsLogo :w="40" />
        </span>
        <span class="font-wotfardBold text-2xl mt-2 text-gray"> 243digit </span>
      </div>
      <h1 class="font-wotfardBold text-6xl mt-16 relative">
        Nous sommes en
        <span
          class="text-white relative z-10 after:-rotate-3 after:bg-blue after:opacity-80 after:h-full after:w-full after:absolute after:left-0 after:-z-10"
          >maintenance</span
        >
      </h1>
      <p class="mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem cum
        porro, sapiente non, nemo assumenda corrupti unde saepe id quisquam illum est
        quasi ipsum recusandae necessitatibus, quis nulla eveniet!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InMaintenance",
};
</script>
