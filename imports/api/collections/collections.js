import {Mongo} from 'meteor/mongo'

export const Category = new Mongo.Collection('categories')

export const Customer = new Mongo.Collection('customers')

export const Supplier = new Mongo.Collection('suppliers')

export const Item = new Mongo.Collection('items')

export const Purchase = new Mongo.Collection('purchases')

export const Import = new Mongo.Collection('imports')

export const Export = new Mongo.Collection('exports')