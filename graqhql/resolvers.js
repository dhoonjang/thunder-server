import { getPeople, getById, addPerson, deletePerson } from './db'

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, {id}) => getById(id)
  },
  Mutation: {
    addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
  }
};

export default resolvers
