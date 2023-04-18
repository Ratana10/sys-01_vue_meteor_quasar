<template>
<div>
   <q-card class="">
      <!-- <q-card-section class="text-h5 text-center">Category Form</q-card-section> -->
      <q-card-section>
         <form @keydown.enter.prevent="handleSubmit">
            <div class="fit row justify-evenly">
               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Company" v-model="form.company" autofocus />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="OwnerName" v-model="form.ownerName" autofocus />
               </div>

               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Phone" v-model="form.phone" />
               </div>
               
               <div class="col-xs-12 q-ma-sm">
                  <q-input outlined label="Address" v-model="form.address" />
               </div>
               <div class="col-xs-12 q-ma-sm">
                  <q-select outlined label="Status" v-model="form.status" :options="status" option-label="label" option-value="value" map-options emit-value />
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
         status: [{
               label: "Active",
               value: "active",
            },
            {
               label: "Inactive",
               value: "inactive",
            },
         ],

         form: {
            company: null,
            ownerName: null,
            phone: null,
            address: null,
            status: null,
         },
         
      };
   },
   methods: {
      handleSubmit() {
         let method = this.editData ? "supplier.update" : "supplier.insert";

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
