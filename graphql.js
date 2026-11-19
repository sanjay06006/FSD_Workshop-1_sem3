
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();


const schema = buildSchema(`
    type Query {
        hello: String
        student: Student
    }

    type Student {
        id: Int
        name: String
        course: String
    }
`);


const studentData = {
    id: 101,
    name: "Sanjay",
    course: "B.Tech CSE"
};


const root = {
    hello: () => {
        return "Hello World from GraphQL!";
    },

    student: () => {
        return studentData;
    }
};


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('GraphQL Server running at http://localhost:4000/graphql');
});
