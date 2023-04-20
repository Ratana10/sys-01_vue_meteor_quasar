<template>
<div>
   <q-card class="">
      <!-- <q-card-section class="text-h5 text-center">Category Form</q-card-section> -->
      <q-card-section>

         <div class="fit row justify-evenly">
            <div class="col-xs-12 q-ma-sm">
               <q-input outlined label="Date" v-model="form.date" />
            </div>

            <div class="col-xs-12 q-ma-sm">
               <q-select outlined label="Supplier" v-model="form.supplierId" :options="supplierOpts" map-options emit-value option-label="company" option-value="_id" />
            </div>
            <div class="col-xs-12 q-ma-sm">
               <q-select outlined label="Item" v-model="form.itemId" :options="itemOtps" map-options emit-value option-label="name" option-value="_id" />
            </div>

            <div class="col-xs-12 q-ma-sm">
               <q-input outlined type="number" label="Cost" v-model.number="form.cost" />
            </div>

            <div class="col-xs-12 q-ma-sm">
               <q-input outlined type="number" label="Price" v-model.number="form.price" />
            </div>

            <div class="col-xs-12 q-ma-sm">
               <q-input outlined type="number" label="Quantity" v-model.number="form.qty" />
            </div>

            <div class="col-xs-12 q-ma-sm">
               <q-select outlined label="Status" v-model="form.status" :options="status" map-options emit-value option-label="label" option-value="value" />
            </div>

            <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
               <q-btn type="submit" :color="editData ? 'secondary' : 'positive'" :label="editData ? 'UPDATE' : 'CREATE'" @click="handleSubmit"></q-btn>
            </div>
         </div>
      </q-card-section>
   </q-card>
</div>
</template>

<script>
import moment from 'moment';
export default {
   props: {
      editData: {
         data: Object,
         default: null,
      },
   },
   mounted() {

      this.getItemOtps();
      this.getSupplierOtps();
   },
   data() {
      return {
         form: {
            supplierId: null,
            itemId: null,
            cost: null,
            price: null,
            qty: null,
            date: moment(new Date()).format("YYYY-MM-DD"),
            status: null,
         },
         status: [{
               label: 'Active',
               value: 'active',
            },
            {
               label: 'Inactive',
               value: 'inactive',
            },
         ],
         itemOtps: [],
         supplierOpts: [],
      }
   },
   methods: {
      handleSubmit() {
         //Convert to date format
         this.form.date = moment(this.form.date, "YYYY-MM-DD").toDate();

         Meteor.call('purchase.insert', this.form, (err, result) => {
            if (result) {
               this.$emit('close')
            } else {
               console.log('error in server', err);

            }
         })
      },
      getItemOtps() {
         Meteor.call('item.data', (err, result) => {
            if (result) {
               this.itemOtps = result

            } else {
               console.log('error in server', err);
            }
         })
      },
      getSupplierOtps() {
         Meteor.call('supplier.data', (err, result) => {
            if (result) {
               this.supplierOpts = result

            } else {
               console.log('error in server', err);
            }
         })
      }
   },
}
</script>

<style>

</style>
