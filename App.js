

const h1Tag1 = React.createElement("h1", {},"hello, I am h1 tag")
const h1Tag2 = React.createElement("h2", {},"hello, I am h1 tag")
const child1 = React.createElement("div",{id:'child1'},[h1Tag1,h1Tag2])
const child2 = React.createElement("div",{id:'child2'},[h1Tag1,h1Tag2])

const parent = React.createElement("div",{id:'parent'}, [child1,child2])

// const heading =  React.createElement(parent)
// console.log("heading",heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

