<template>
<div class="q-ma-md">
   <div class="q-mb-lg">
      <q-btn color="primary" label="Add New Purchase" icon="add" @click="handleAdd" />
   </div>
   <q-dialog v-model="popup">
      <q-card>
         <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn color="negative" icon="close" flat round dense v-close-popup />
         </q-card-section>

         <q-card-section>
            <div class="text-h6 text-center text-uppercase">Purchase</div>
         </q-card-section>

         <q-card-section class="">
            <purchase-from @close="handleClose" />
         </q-card-section>
      </q-card>
   </q-dialog>
   <purchase-table :items="items" />
</div>
</template>

<script>
import PurchaseFrom from "../components/PurchaseFrom.vue";
import PurchaseTable from "../components/PurchaseTable.vue";

export default {
   components: {
      PurchaseFrom,
      PurchaseTable
   },
   mounted() {
      this.getData();
   },
   data() {
      return {
         popup: false,
         editData: null,
         items: [],
      };
   },
   methods: {
      handleAdd() {
         this.popup = true;
      },
      
      handleClose() {
         this.popup = false;
         this.getData();
      },
      // handleDelete() {
      //    this.getData();
      // },
      // handleEdit(data) {
      //    this.editData = data;
      //    this.popup = true;
      // },
      getData() {
         Meteor.call("purchase.data", (err, result) => {
            if (result) {
               this.items = result
            } else {
               console.log("error in serve", err);
            }
         });
      },
   },

};
</script>

<style>
</style>
