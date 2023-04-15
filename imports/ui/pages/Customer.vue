<template>
<div class="q-ma-md">
   <div class="q-mb-lg">
      <q-btn color="primary" label="Add New Customer" icon="add" @click="handleAdd" />
   </div>
   <q-dialog v-model="popup">
      <q-card>
         <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn color="negative" icon="close" flat round dense v-close-popup />
         </q-card-section>

         <q-card-section>
            <div class="text-h6 text-center text-uppercase">Customer</div>
         </q-card-section>

         <q-card-section class="">
            <customer-form @close="handleClose" :editData="editData" />
         </q-card-section>
      </q-card>
   </q-dialog>
   
   <customer-table :customers="customers" @edit="handleEdit" @delete="handleDelete" />
</div>
</template>

<script>
import moment from "moment";
import CustomerForm from "../components/CustomerForm.vue";
import CustomerTable from "../components/CustomerTable.vue";

export default {
   components: {
      CustomerForm,
      CustomerTable
   },

   data() {
      return {
         customers: [],
         popup: false,
         editData: null,
      };
   },
   methods: {
      handleAdd(){
         this.editData = null;
         this.popup = true;

      },
      handleClose() {
         this.popup = false;
         this.editData = null;
         this.getData();
      },
      handleDelete() {
         this.getData();
      },
      handleEdit(data) {
         this.editData = data;
         this.popup = true;
      },
      getData() {
         Meteor.call("customer.data", (err, result) => {
            if (result) {
               this.customers = result;
            } else {
               console.log("error in serve", err);
            }
         });
      },
   },
   mounted() {
      this.getData();
   },
};
</script>

<style>
</style>
