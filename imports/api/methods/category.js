import {Meteor} from 'meteor/meteor'
import { Category } from '../collections/collections';


Meteor.methods({
   'category.data'(){
      return Category.find().fetch();
   },
   'category.insert'(doc){
      return Category.insert(doc);
   },
   'category.update'(doc){
      return Category.update({_id: doc._id}, {$set: doc});
   },
   'category.remove'(id){
      return Category.remove({_id: id});
   }
})