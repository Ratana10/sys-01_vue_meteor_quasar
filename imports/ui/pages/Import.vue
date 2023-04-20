<template>
<div class="q-ma-md">
   <div class="q-mb-lg">

      <search-by-date-form @searchByDate="searchByDate" />
   </div>

   <import-table :items="items" />
</div>
</template>

<script>

import SearchByDateForm from '../components/SearchByDateForm.vue'
import ImportTable from '../components/ImportTable.vue'

export default {
   components: {
      SearchByDateForm,
      ImportTable
   },
   data() {
      return {
         items: [],
      }
   },
   methods: {
      searchByDate(date) {
         Meteor.call("import.findByDate", date, (err, result) => {
            if (result) {
               this.items = result
            } else {
               console.log("error in server", err)
            }
         })
      }
   },
}
</script>

<style>

</style>
