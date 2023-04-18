import {Mongo} from 'meteor/mongo'

export const Category = new Mongo.Collection('categories')

export const Customer = new Mongo.Collection('customers')

export const Supplier = new Mongo.Collection('suppliers')

export const Item = new Mongo.Collection('items')