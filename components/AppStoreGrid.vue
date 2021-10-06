<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
        <div class="img-contain">
          <NuxtLink :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`" />
          </NuxtLink>
        </div>
        <h3>{{ item.name }}</h3>
        <h4 class="price">{{ item.price | dollar }}</h4>
        <NuxtLink :to="`product/${item.id}`">
          <button class="multi-item">Click Here ></button>
        </NuxtLink>
      </div>
    </transition-group>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      min: 0,
      max: 200,
      pricerange: 200
    };
  },
  computed: {
    filteredprice() {
      return this.data.filter(el => el.price < this.pricerange);
    }
  },
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  display: inline-block;
  float: right;
}
</style>