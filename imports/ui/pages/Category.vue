<template>
<div class="q-ma-md">
   <div class="q-mb-lg">
      <q-btn color="primary" label="Add New Category" icon="add" @click="popup = !popup" />

   </div>
   <q-dialog v-model="popup">
      <q-card>
         <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn color="negative" icon="close" flat round dense v-close-popup />
         </q-card-section>

         <q-card-section>
            <div class="text-h6 text-center text-uppercase">Add new Category</div>
         </q-card-section>

         <q-card-section class="">
            <category-form @close="handleClose" :editData="editData" />
         </q-card-section>
      </q-card>
   </q-dialog>
   <!-- <category-form /> -->
   <category-table :categories="categories" @edit="handleEdit" @delete="handleDelete" />
</div>
</template>

<script>
import moment from 'moment';
import CategoryForm from "../components/CategoryForm.vue";
import CategoryTable from "../components/CategoryTable.vue";

export default {
   components: {
      CategoryForm,
      CategoryTable,
   },
   data() {
      return {
         categories: [],
         popup: false,
         editData: null,
      };
   },
   methods: {
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
         Meteor.call("category.data", (err, result) => {
            if (result) {
               this.categories = result;
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
