<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
      <!--div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">{{ selectImage.name }}</p>
      </!div-->
      <div class="flex flex-wrap">
        <el-image
          style="width: 100%; height: 100%"
          :src="selectImage.url"
          :preview-src-list="previewlist"
          :initial-index="4"
          fit="cover"
        />
      </div>
    </div>
    <div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="bg-gray-800 rounded-3xl px-6 pt-6">
        <div class="flex text-white text-2xl pb-6 font-bold">
          <p>Image List</p>
        </div>
        <el-table
          v-show="images && images.length > 0"
          style="width: 100%"
          max-height="100vh"
          :data="images"
          fit
        >
          <el-table-column type="selection" width="45" />
          <el-table-column align="center">
            <template #default="{ row }">
              <el-image :src="row.image" fit="fill" @click="showImage(row)" />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store";
const images = store.images;
</script>

<script>
export default {
  data() {
    return {
      selectImage: {
        name: "No Image Available",
        url: "/images/no_photo.jpg",
      },
      previewlist: ["/images/no_photo.jpg"],
    };
  },
  mounted() {
    if (this.images && this.images.length > 0) {
      this.selectImage = this.images[0];
    }
  },

  methods: {
    showImage(image) {
      this.selectImage = image;
    },
  },
};
</script>
