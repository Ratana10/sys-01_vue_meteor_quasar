<template>
<div>
   <!-- <q-dialog v-model="confirm.status" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white" />
          <span class="q-ml-sm">{{ confirm.message }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="No" color="primary" v-close-popup />
          <q-btn
            flat
            label="Yes"
            color="negative"
            @click="handleYes"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

   <q-markup-table>
      <thead>
         <tr>
            <th class="text-left">No</th>
            <th class="text-left">Name</th>
            <th class="text-left">Cost</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Date</th>
            <th class="text-left">Status</th>
         </tr>
      </thead>
      <tbody>
         <template v-if="items && items.length">
            <tr v-for="(item, index) in items" :key="index">
               <td class="text-left">{{ index + 1 }}</td>
               <td class="text-left">{{ item.name }}</td>
               <td class="text-left">{{ item.cost }}</td>
               <td class="text-left">{{ item.price }}</td>
               <td class="text-left">{{ item.qty }}</td>
               <td class="text-left">{{ item.date | toDate }}</td>
               <td class="text-left">{{ item.status }}</td>
            </tr>
         </template>
         <template v-else>
          <tr>
            <td class="text-center" colspan="7">No item</td>
          </tr>
         </template>

      </tbody>
   </q-markup-table>
</div>
</template>

<script>
import moment from "moment";

export default {
   props: {
      items: {
         type: Array,
         default: null,
      },
   },
   filters: {
      toDate(date) {
         return moment(date).format("YYYY-MM-DD");
      },
   },

};
</script>

<style>
</style>
