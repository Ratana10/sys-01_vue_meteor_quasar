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
            <th class="text-left">Company</th>
            <th class="text-left">Owner</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Address</th>
            <th class="text-left">Status</th>
            <th class="text-left">Action</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="(item, index) in suppliers" :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-left">{{ item.company }}</td>
            <td class="text-left">{{ item.ownerName }}</td>
            <td class="text-left">{{ item.phone }}</td>
            <td class="text-left">{{ item.address }}</td>
            <td class="text-left">{{ item.status }}</td>

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
      suppliers: {
         type: Array,
         default: null,
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
         Meteor.call("supplier.remove", this.confirm.deleteId, (err, result) => {
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
         data.date = moment(data.date).format("YYYY-MM-DD");
         this.$emit("edit", data);
      },
   },
};
</script>

<style>
</style>
