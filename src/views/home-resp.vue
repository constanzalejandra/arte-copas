<template>
  <div>
    <div class="center">
      <h1 class="title-section">Lista de cursos</h1>
    </div>
    <div class="list-courses">
      <Course
        v-for="(course, index) in listCourses"
        :key="index"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Course from "@/components/Product.vue";
export default {
  name: "Home",

  components: { Course },
  created() {
    this.getAllCourses();
  },
  computed: {
    ...mapState("courses", {
      listCourses: (state) => state.listCourses,
    }),
  },

  methods: {
    ...mapActions("courses", {
      getAllCourses: "getAllCourses",
    }),
  },
};
</script>
<style scoped>
.center,
.list-courses {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.title-section {
  font-weight: 300;
}
</style>
