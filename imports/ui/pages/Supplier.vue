<template>
<div class="q-ma-md">
   <div class="q-mb-lg">
      <q-btn color="primary" label="Add New Supplier" icon="add" @click="handleAdd" />
   </div>
   <q-dialog v-model="popup">
      <q-card>
         <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn color="negative" icon="close" flat round dense v-close-popup />
         </q-card-section>

         <q-card-section>
            <div class="text-h6 text-center text-uppercase"  >Supplier</div>
         </q-card-section>

         <q-card-section class="">
            <supplier-form @close="handleClose" :editData="editData" />
         </q-card-section>
      </q-card>
   </q-dialog>
   <supplier-table :suppliers="suppliers" @edit="handleEdit" @delete="handleDelete" />

</div>
</template>

<script>
import SupplierForm from '../components/SupplierForm.vue';
import SupplierTable from '../components/SupplierTable.vue';


export default {
  components: { SupplierForm, SupplierTable },
   
   data() {
      return {
         suppliers: [],
         popup: false,
         editData: null,
      
      };
   },
   methods: {
      handleAdd() {
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
         Meteor.call("supplier.data", (err, result) => {
            if (result) {
               this.suppliers = result;
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
