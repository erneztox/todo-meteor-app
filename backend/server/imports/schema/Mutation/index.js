import {SchemaMutations as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import {addTodo} from './addtodo.js'

export default `
type Mutation {
  ${addTodo}
  ${Auth()}
 }
`
