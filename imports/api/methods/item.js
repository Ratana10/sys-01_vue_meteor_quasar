import {Meteor} from 'meteor/meteor'
import { Category, Item } from '../collections/collections';


Meteor.methods({
   'item.data'(){
      let data = [];

      Item.find().fetch().forEach((e)=>{
         e.categoryName = Category.findOne({_id: e.categoryId}).categoryName;
         data.push(e);
      });
      return data;
   },
   'item.insert'(doc){

      return Item.insert(doc);
   },
   'item.update'(doc){
      return Item.update({_id: doc._id}, {$set: doc});
   },
   'item.remove'(id){
      return Item.remove({_id: id});
   }
})