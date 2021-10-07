<template>
  <div>
    <section class="item-contain">
      <section class="product-info">
        <h2>{{ product.name }}</h2>
        <h3>{{ product.shortDescription }}</h3>
        <div class="product-options">
          <table >
          <tr><td><p>Packages</p></td>
           <td><div v-if="product.packages" class="size">
            <select v-model="size" class="size-picker" @change="showSizeRequiredMessage = false">
              <option :value="null" disabled hidden >Select</option>
              <option v-for="item in product.packages" v-bind:key="item.package" :value="item.price"> {{ item.package }} {{product.unit}} for {{product.currency}}{{ item.price }}</option>

            </select>
          </div>
            </td>
          </tr>
          <tr>
            <td>
          <p>Quantity</p></td><td>
          <div class="quantity">
            <button class="update-num" @click="quantity > 1 ? quantity-- : quantity = 1" >-</button>
            <input type="number" class="quantitynumber" v-model="quantity" :max="10" :min="1" />
            <button class="update-num" @click="quantity <10 ? quantity++ : 10">+</button>
          </div>
          </td>
          </tr>
                  <tr>
           <td>
          <p>Delivery for $17</p></td><td>
          <div  >
            <input type="radio" class="radio1" name="delivery" v-bind:value="product.shipping" v-model="delivery"/>
          </div>
          </td></tr><tr >        <td class="deliveryrow">
          <p>Pick up at Hope Farm School $0</p></td><td>
            <input type="radio" class="radio1"  name="delivery" v-bind:value="0"  v-model="delivery" />
          </td>
          </tr>
          <tr>        <td>
          <p>Additional donation to <br> Hope Farm School</p></td><td class="additionalamountrow">
          <section class="additionalamountsection" >  
          <input type="radio" class="radio2" name="additionalamount" id="additionalamount" value="0" v-model="additionalamountdiv"> 0%
          <input type="radio" class="radio2" name="additionalamount" id="additionalamount" value="10" v-model="additionalamountdiv"> 10%
          <input type="radio" class="radio2" name="additionalamount" id="additionalamount" value="20" v-model="additionalamountdiv"> 20%
          <input type="radio" class="radio2" name="additionalamount" id="additionalamount" value="30" v-model="additionalamountdiv"> 30%
        </section>
          </td>
          </tr><tr class="total"><strong><td >Total : </td><td> {{ total  | dollar }}</td></strong></tr>
          </table>
  
        </div>
        <p v-if="showSizeRequiredMessage" class="size-required-message">Please choose a package</p>
        <p v-if="quantity==0" class="size-required-message">Please choose a quantity</p>
        <p v-if="quantity>10" class="size-required-message">Please choose quantity less than 11</p>
        <p v-if="total>10000" class="size-required-message">The Checkout Session's total amount due must be no more than $10,000</p>
        <p>
        <button class="button purchase" @click="order" >Place Order</button>
        </p>
      </section>
    </section>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";


export default {
  components: {
    StarRating,
    AppFeaturedProducts
  },
    data: {
      delivery: 0,
  },
    mounted() {
    // enable after slight delay for the user:
    setTimeout(() => {
      this.delivery = '0';
    }, 200);
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      size: null,
      delivery: 0,
      showSizeRequiredMessage: false,
      additionalamountdiv: 0,
      package: 0,
      total:0,
      isDisabled:true,
      tempcart: [] // this object should be the same as the json store object, with additional params, quantity and size
    };
  },
  computed: {
    ...mapState(["storedata"]),
    product() {
      return this.storedata.find(el => el.id === this.id);
    }
  },
    watch: {
    '$data': {
      handler: function(item) {
        var additionalCalculatedAmount=Number(item.quantity * item.size) * Number(item.additionalamountdiv) / 100;
        var total = Number(item.quantity*item.size) + additionalCalculatedAmount + Number(item.delivery);
        this.total = total;
      },
      deep: true
    }
  },
  methods: {
   async order() {
      if (this.product.packages && !this.size) {
        this.showSizeRequiredMessage = true;
        return;
      }

      let item = this.product;
      item = { 
        ...item, 
        quantity: this.quantity, 
        size: this.size ,
        delivery: this.delivery,
        additionalamountdiv: this.additionalamountdiv,
        package:this.package
      };

      var additionalCalculatedAmount=Number(item.quantity * item.size) * Number(item.additionalamountdiv) / 100;
      var total = Number(item.quantity*item.size) + additionalCalculatedAmount + Number(item.delivery);
      var packageDetails =  Number(item.size) / 10  + " lb "+ "  "+item.quantity+" packages for " ;
      if(item.delivery==0){
        packageDetails =packageDetails +" pick up at the farm  ";
      }else {
        packageDetails =packageDetails +" delivery fee $17  ";
      }

      if(item.additionalamountdiv==0){
        packageDetails =packageDetails;
      }else {
        packageDetails =packageDetails +" and addition Hope Farm donation of $" + additionalCalculatedAmount +"( "+item.additionalamountdiv +"% of "+Number(item.quantity * item.size)+")";
      }

      const data = {
        sku: item.id,
        quantity: item.quantity,
        total: total*100,
        package:packageDetails,
        shipping:item.delivery,
        name:item.name
      };

      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      const stripe = Stripe(response.publishableKey);
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.sessionId,
      });

      if (error) {
        document
          .querySelectorAll('button')
          .forEach((button) => (button.disabled = false));
        console.error(error);
      }

    }
  }
};
</script>

<style lang="scss" scoped>

.radio1 {
    border: 0px;
    height: 2em;
    font-size: 15vm;
}
.radio2 {
    border: 0px;
    height: 2em;
    font-size: 15vm;
      justify-items: center;

}

td.deliveryrow {
        justify-items: center;

}

.item-contain {
  width: 50%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin-left:2vmin;
  margin-right:2vmin;
}
.additionalamountsection {
    justify-content: space-around;
    display: grid;
    grid-template-columns: 1fr 2fr;
     grid-gap: .5em;
    padding: .5em; /* NEW */
    justify-items: center;
      font-size: 10vm;
        padding-left: 0;

}
.product-info {
  margin-left:2vmin;
  margin-right:2vmin;
  margin-top:2vmin;
  font-size: 10vm;
  justify-content: space-around;

  
}
table ,tr,td{
  width: 100%;
  margin-top: 10px;
  border: 1px solid rgb(51, 32, 32);
  font-size:1.5vw;  
}

tr.total td {
  border: 0;
  font-size:2vw;  
}
p {
  border: 0;
  font-size:1.5vw;  
}
input,
select {
  width: 60px;
  font-size: 15px;
  margin: 2 5px;
  padding: 5px 10px;
}

.update-num {
  background: black;
  border-color: black;
  color: white;
  font-size: 15px;
  width: 45px;
}
.quantitynumber {
    font-size: 20px;
}
.size {
  margin-left: 0px;
}
.total {
  font-size:2vw;  
  border: none;

}
.total tr {
  color: unset;
}
img {
  margin-top: 5vmin;
  max-width:100%;
  height:auto;
  }
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
.size-picker {
  width: 150px;
  font-size: 20px;
  height: 100%;
  border: 0;
  background-color: white;
  outline: 1px solid #ccc;

}

.quantity {
  display: flex;
    font-size: 20px;
    outline-offset: 1px;

}

.size-required-message {
  color: red;
}
@media (max-width:629px) {
  img#optionalstuff {
    display: none;
  }
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) {
table ,tr,td{
  width: 100%;
  margin-top: 10px;
  border: 1px solid rgb(51, 32, 32);
  font-size:1.5vw;  
}

tr.total td {
  border: 0;
  font-size:2vw;  
}
}

@media screen and (max-width: 650px) {
  .img img {
    width: 100%;
    align-items: center;
  }

  .item-contain {
    margin-left: 0 !important;
    width: 95% !important;
  }

  .review {
    width: 90%;
    margin-left: 4%;
  }
p {
  border: 0;
  font-size:4vw;  
}
table ,tr,td{
  width: 100%;
  margin-top: 10px;
  border: 1px solid rgb(51, 32, 32);
  font-size:4vw;  
}
tr.total td {
  border: 0;
  font-size:4vw;  
}
}
</style>