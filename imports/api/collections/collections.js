import {Mongo} from 'meteor/mongo'

export const Category = new Mongo.Collection('categories')

export const Customer = new Mongo.Collection('customers')