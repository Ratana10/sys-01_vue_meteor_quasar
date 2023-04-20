<template>
<div>
   <div class="q-mb-md">
      <q-btn icon="print" label="Print" color="secondary" @click="handlePrint" />
   </div>
   <q-markup-table id="print" dense>
      <thead>
         <tr>
            <th class="text-left">No</th>
            <th class="text-left">Date</th>
            <th class="text-left">Company</th>
            <th class="text-left">Item</th>
            <th class="text-left">Remain</th>
            <th class="text-left">Cost</th>
            <th class="text-left">Price</th>
            <th class="text-left">Qty</th>
            <th class="text-left">Status</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="(item, index) in items" :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-left">{{ item.date | toDate }}</td>
            <td class="text-left">{{ item.company }}</td>
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.remain }}</td>
            <td class="text-left">{{ item.cost  }}</td>
            <td class="text-left">{{ item.price  }}</td>
            <td class="text-left">{{ item.qty  }}</td>
            <td class="text-left">{{ item.status }}</td>

         </tr>
      </tbody>
   </q-markup-table>
</div>
</template>

<script>

import moment from 'moment'
import printJS from 'print-js'

export default {
   props: {
      items: {
         type: Array,
         defual: null
      }
   },
   filters: {
      toDate(date) {
         return moment(date).format("YYYY-MM-DD")
      }
   },
   methods: {
      handlePrint() {
         printJS({
            printable: 'print',
            type: 'html',
            targetStyles: '*'
         })
      }
   }
}
</script>

<style>

</style>
