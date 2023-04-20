import {Meteor} from 'meteor/meteor'
import { Import, Item, Purchase } from '../collections/collections';

Meteor.methods({
   'purchase.insert'(doc){
      let oldPurchase = Purchase.findOne({itemId: doc.itemId})
      let importDoc =  Object.assign({}, doc);

      if(oldPurchase){
         importDoc.remain = oldPurchase.qty
         Import.insert(importDoc)
         oldPurchase.cost = doc.cost
         oldPurchase.price = doc.price
         oldPurchase.qty = oldPurchase.qty + doc.qty
         oldPurchase.date = doc.date
         oldPurchase.status = doc.status
         return Purchase.update({_id: oldPurchase._id}, {$set: oldPurchase})
      }else{
         importDoc.remain = 0;
         Import.insert(importDoc)
         return Purchase.insert(doc);
      }
   },
   'purchase.data'(){
      let data = []
      Purchase.find().forEach(e => {
         let item = e
         item.name = Item.findOne({_id: e.itemId}).name
         data.push(item)
      })
      return data
   }
})