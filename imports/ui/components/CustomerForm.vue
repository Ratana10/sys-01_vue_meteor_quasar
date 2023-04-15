<template>
<div>
   <q-card class="">
      <!-- <q-card-section class="text-h5 text-center">Category Form</q-card-section> -->
      <q-card-section>
         <form @keydown.enter.prevent="handleSubmit">
            <div class="fit row justify-evenly">

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Name" v-model="form.name" autofocus />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-select outlined label="Gender" v-model="form.gender" :options="gender" />
               </div>
               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Date of Birth" type="date" v-model="form.dob" />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Contact" v-model="form.contact" />
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
            name: null,
            contact: null,
            gender: 'Female',
            dob: moment(new Date()).format("YYYY-MM-DD"),
         },
         gender: [
            'Unknow',
            'Male',
            'Female'
         ]
      };
   },
   methods: {
      handleSubmit() {
         this.form.dob = moment(this.form.dob, "YYYY-MM-DD").toDate();
         
         let method = this.editData ? "customer.update" : "customer.insert";

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
