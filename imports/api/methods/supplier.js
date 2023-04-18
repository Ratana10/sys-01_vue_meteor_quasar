import {Meteor} from 'meteor/meteor'
import { Supplier } from '../collections/collections'

Meteor.methods({
   'supplier.data'(){
      return Supplier.find().fetch();
   },
   'supplier.insert'(doc){
      return Supplier.insert(doc);
   },
   'supplier.update'(doc){
      return Supplier.update({_id: doc._id}, {$set: doc});
   },
   'supplier.remove'(id){
      return Supplier.remove({_id: id});
   }
})