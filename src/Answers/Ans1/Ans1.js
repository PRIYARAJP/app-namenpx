import React from 'react'

const Ans1 = () => {
  return (
    <>
    <h3>
       What is React and Feature of React?
    </h3>
    <div>
    React js is a popular open source Java Script libaray used to build user interfacee for web application It Was created by facebook and has been widly adopted by the web development commity for its simplicity,Speed,and flexibility.
    </div>
    <div>
    React is based on a concept called the virtual DOM, which is a lightweight representation of the actual DOM ( Model).
    </div>
    <div>
    When a user interacts with a React component, the virtual DOM is updated to reflect the changes, and then Read updates only the necessary parts of the actual DOM to reflect those changes. This results in better performance and user experience.
    </div>
    <p>
        Feature of React,

        SPA,

        Reusable Compo,

        JSX and Babel,

        V-DOM,

        One way Data Binding,

        Components based Structure,

        Name export and default export,

        Community Support,
        
        web and mobile support,
    </p>
  
    <p>Difference b/w Library</p>
    <p>Library are built for performing specific, well defined operations. -eg: Network protocols, Image manipulation, math operation, etc.
Library is a collections of helper function, modules and objects
Libraries ask you to call them to accomplish a task
You have full control on modification and all
They are important in program linking and binding process
You can Think of library is a doctor who specializes in one thing
Example Python's Pandas, JavaScript's JQuery</p>
<p>
Framework are built for performing a vast variety of tasks-eg: web application system, Plug-in manager, GUI system etc

It is a collection of lots of libraries and APIs

while frameworks are the ones that will call you to

get the job done.

Framework has a default behaviour and gives you

less control on modification They provide a proper standard way to build and

deploy programs

If library is a doctor who specializes in one thing then

frameworks are hospitals with full of different doctors

Example JavaScript's Angular JS, Python's Django
</p>
<p>Difference b/w Angular and react
    Angular is a frameworks
    React is a Library<br/>
    Angular is one way data binding<br/>
    React is two way data binding<br/>
    Angular is little bit foster then React<br/>
    Because react load every component<br/>
    but Angular load necessary component<br/>
</p>
    </>
  )
}

export default Ans1