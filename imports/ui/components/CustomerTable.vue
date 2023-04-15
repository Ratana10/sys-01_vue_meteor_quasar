<template>
<div>
   <q-dialog v-model="confirm.status" persistent>
      <q-card>
         <q-card-section class="row items-center">
            <q-avatar icon="delete" color="negative" text-color="white" />
            <span class="q-ml-sm">{{ confirm.message }}</span>
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="No" color="primary" v-close-popup />
            <q-btn flat label="Yes" color="negative" @click="handleYes" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>

   <q-markup-table>
      <thead>
         <tr>
            <th class="text-left">No</th>
            <th class="text-left">Name</th>
            <th class="text-left">Gender</th>
            <th class="text-left">DOB</th>
            <th class="text-left">Contact</th>
            <th class="text-left">Action</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="(item, index) in customers" :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.gender }}</td>
            <td class="text-left">{{ item.date | toDate }}</td>
            <td class="text-left">{{ item.contact }}</td>
            <td class="text-left">
               <q-btn color="secondary" icon="edit" dense @click="handleEdit(item)"></q-btn>
               <q-btn color="negative" icon="delete" dense @click="handleRemove(item._id)"></q-btn>
            </td>
         </tr>
      </tbody>
   </q-markup-table>
</div>
</template>

<script>
import moment from "moment";

export default {
   props: {
      customers: {
         type: Array,
         default: null,
      },
   },
   filters: {
      toDate(date) {
         return moment(date).format("YYYY-MM-DD");
      },
   },
   data() {
      return {
         confirm: {
            status: false,
            message: null,
            deleteId: null,
         },
      };
   },
   methods: {
      handleYes() {
         Meteor.call("customer.remove", this.confirm.deleteId, (err, result) => {
            if (result) {
               this.$emit("delete");
            } else {
               console.log("error in server", err);
            }
         });
      },
      handleRemove(id) {
         this.confirm.message = "Are you sure you want to remove this item ?";
         this.confirm.status = true;
         this.confirm.deleteId = id;
      },
      handleEdit(data) {
         data.dob = moment(data.dob).format("YYYY-MM-DD");
         this.$emit("edit", data);
      },
   },
};
</script>

<style>
</style>
