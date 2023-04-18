<template>
<div class="q-ma-md">
   <div class="q-mb-lg">
      <q-btn color="primary" label="Add New Item" icon="add" @click="handleAdd" />
   </div>
   <q-dialog v-model="popup">
      <q-card>
         <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn color="negative" icon="close" flat round dense v-close-popup />
         </q-card-section>

         <q-card-section>
            <div class="text-h6 text-center text-uppercase">Item</div>
         </q-card-section>

         <q-card-section class="">
            <item-form  @close="handleClose" :editData="editData"  />
         </q-card-section>
      </q-card>
   </q-dialog>
   <!-- <supplier-table :suppliers="suppliers" @edit="handleEdit" @delete="handleDelete" /> -->
   <item-table :items="items" @edit="handleEdit" @delete="handleDelete" />
</div>
</template>

<script>
import ItemForm from '../components/ItemForm.vue';
import ItemTable from '../components/ItemTable.vue';


export default {
   components: {
      ItemForm,
      ItemTable
   },

   data() {
      return {
         items: [],
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
         Meteor.call("item.data", (err, result) => {
            if (result) {
               this.items = result;
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
