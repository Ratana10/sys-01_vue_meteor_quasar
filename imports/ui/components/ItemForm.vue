<template>
<div>
   <q-card class="">
      <!-- <q-card-section class="text-h5 text-center">Category Form</q-card-section> -->
      <q-card-section>
         <!-- <form @keydown.enter.prevent="handleSubmit"> -->
            <div class="fit row justify-evenly">

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Date" type="date" v-model="form.date" />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Item Name" v-model="form.name" autofocus />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-select outlined label="Category" v-model="form.categoryId" :options="categoryOpt" option-label="categoryName" option-value="_id" map-options emit-value />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Description" v-model="form.description" />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-select outlined label="Status" v-model="form.status" :options="status" option-label="label" option-value="value" map-options emit-value />
               </div>

               <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
                  <q-btn type="submit" :color="editData ? 'secondary' : 'positive'" :label="editData ? 'UPDATE' : 'CREATE'" @click="handleSubmit"></q-btn>
               </div>
            </div>
         <!-- </form> -->
      </q-card-section>
   </q-card>
</div>
</template>

<script>
import moment from "moment";

export default {
   props: {
      editData: {
         data: Object,
         default: null,
      },
   },
   mounted() {
      if (this.editData != null) {
         this.form = this.editData;
      }
   },
   created() {
      this.getCategory();
   },

   data() {
      return {
         form: {
            name: null,
            categoryId: null,
            description: null,
            status: null,
            date: moment(new Date()).format("YYYY-MM-DD"),
         },
         categoryOpt: [],
         status : [
          {
           label: 'Active',
           value: 'active',
          },
          {
           label: 'Inactive',
           value: 'inactive',
          },
         ]
      };
   },
   methods: {
      getCategory() {
         Meteor.call('category.data', (err, result) => {
            if (result) {
               this.categoryOpt = result
            } else {
               console.log('error in server', err);
            }
         })
      },
      handleSubmit() {
         this.form.date = moment(this.form.date, "YYYY-MM-DD").toDate();

         let method = this.editData ? "item.update" : "item.insert";

         Meteor.call(method, this.form, (err, result) => {
            if (result) {
               this.$emit("close");
            } else {
               console.log("error in server", err);
            }
         });
      },
   },
};
</script>

<style>
</style>
