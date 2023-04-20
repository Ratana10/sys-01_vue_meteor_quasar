<template>
<div>
   <fieldset>
      <legend>Search By date</legend>
      <div class="row justify-center items-center">
         <div class="col-md-2 col-xs-12 q-pa-sm">
            <div style="max-width: 300px">
               <q-input outlined v-model="form.fromDate">
                  <template v-slot:append>
                     <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                           <q-date mask="DD-MM-YYYY" v-model="form.fromDate">
                              <div class="row items-center justify-end">
                                 <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                           </q-date>
                        </q-popup-proxy>
                     </q-icon>
                  </template>
               </q-input>
            </div>
         </div>
         <div class="col-md-4 col-xs-12 q-pa-sm">
            <div style="max-width: 300px">
               <q-input outlined v-model="form.toDate">
                  <template v-slot:append>
                     <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                           <q-date mask="DD-MM-YYYY" v-model="form.toDate">
                              <div class="row items-center justify-end">
                                 <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                           </q-date>
                        </q-popup-proxy>
                     </q-icon>
                  </template>
               </q-input>
            </div>
         </div>

         <div class="col-md-2 col-xs-12">
            <q-btn color="primary" label="Search" @click="findByDate()" />
         </div>

      </div>
   </fieldset>
</div>
</template>

 
<script>
import moment from "moment";
export default {
   data() {
      return {
         form: {
            fromDate: moment(new Date()).startOf("month").format("DD-MM-YYYY"),
            toDate: moment(new Date()).format("DD-MM-YYYY"),
         },
      };
   },
   mounted() {
      this.findByDate();
   },
   methods: {
      findByDate() {
         this.$emit('searchByDate', this.form);
      }
   },
};
</script>

 
<style>
 </style>
