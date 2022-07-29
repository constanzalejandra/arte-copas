<template>
  <div>
    <Submain />
    <Details />
    <SectionMain />
    <Contact />
    <Information />
  </div>
</template>

<script>
import Submain from "@/components/landing/Submain.vue";
import Details from "@/components/landing/Details.vue";
import SectionMain from "@/components/landing/SectionMain.vue";
import Contact from "@/components/landing/Contact.vue";
import Information from "@/components/landing/Information.vue";
export default {
  name: "Landing",
  components: {
    Submain,
    Details,
    SectionMain,
    Contact,
    Information,
  },
};
</script>

<style></style>
