import {Resolvers as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import addTodo from './addtodo.js'
export default {
  ...Auth(),
  addTodo
}
