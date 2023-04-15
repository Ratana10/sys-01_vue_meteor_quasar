<template>
<div>
   <q-card class="">
      <!-- <q-card-section class="text-h5 text-center">Category Form</q-card-section> -->
      <q-card-section>
         <form @keydown.enter.prevent="handleSubmit">
            <div class="fit row justify-evenly">
               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Date" type="date" v-model="form.date" />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Category Name" v-model="form.categoryName" autofocus />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Description" v-model="form.description" />
               </div>

               <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
                  <q-btn type="submit" :color="editData ? 'secondary' : 'positive'" :label="editData ? 'UPDATE' : 'CREATE'" @click="handleSubmit"></q-btn>
               </div>
            </div>
         </form>
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

   data() {
      return {
         form: {
            categoryName: null,
            description: null,
            date: moment(new Date()).format("YYYY-MM-DD"),
         },
      };
   },
   methods: {
      handleSubmit() {
         this.form.date = moment(this.form.date, "YYYY-MM-DD").toDate();

         let method = this.editData ? "category.update" : "category.insert";

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
