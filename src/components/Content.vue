<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
      <!--div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">{{ selectImage.name }}</p>
      </!div-->
      <div class="flex flex-wrap">
        <el-image style="width: 100%; height: 100%" :src="selectImage.url" :preview-src-list="previewlist"
          :initial-index="4" fit="cover" />
      </div>
    </div>
    <div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="bg-gray-800 rounded-3xl px-6 pt-6">
        <div class="flex text-white text-2xl pb-6 font-bold">
          <a href="#" class="block relative">
            <img alt="Maurice Lokumba" src="/images/2.png" class="h-10 mx-auto object-cover rounded-full w-10"
              @click="triggerScann" />
          </a>
          <p>Scann</p>
        </div>
      </div>
      <el-table v-show="images && images.length > 0" style="width: 100%" max-height="100vh" :data="images" fit>
        <el-table-column type="selection" width="45" />
        <el-table-column align="center">
          <template #default="{ row }">
            <el-image :src="row.url" fit="fill" @click="showImage(row)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectImage: {
        name: "No Image Available",
        url: "/images/no_photo.jpg",
      },
      images: []
    };
  },
  computed: {
    previewlist() {
      return this.images.map(image => image.url)
    }
  },
  created() {
    fetch('http://localhost:5555/image-list').then(reponse => reponse.json())
      .then(data => {
        this.images=data
        if (data.length > 0) {
          this.selectImage = data[0]
        }
      })
      .catch((err) => console.log(err))
  },
  methods: {
    showImage(image) {
      console.log(image)
      this.selectImage = image;
    },
    triggerScann() {
      fetch("http://localhost:5555/capture")
        .then((reponse) => reponse.json())
        .then(data => {
          this.images.push(data)
        })
        .catch((err) => console.log(err));
    } 
  },
};
</script>
