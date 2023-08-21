import React from 'react'

const Ans2 = () => {
  return (
   <>
   <h3>What is Virtual DOM</h3>
    <div> DOM stands for Document Object Model. Normally, whenever a user requests a webpage, receives an HTML document for that page from the server. The browser then constructs a lo like structure from the HTML to show the user the requested page in the client.
</div>
<br></br><b>-The Problem in DOM
</b><br></br>
<p>
DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is

slower than most JavaScript operations. This slowness is made worse by the fact that most

frameworks update the DOM much more than they have to.<dd>
<br></br>
- React contains a lightweight representation of real DOM in the memory called Virtual DOM.
DOM gets created whenever any React application gets loaded on the screen for the first time,
<br></br>
Whenever React components gets mounted on the screen for the first time. -Now when any user makes any changes on the screen like button click, then the changes will not directly go to Real Dom.
<br></br>
So, we are having two virtual doms, one VDON gets created at the time of mounting of react
<br></br>
component so it is a copy of your real DOM.
<br></br>
Another VDOM is the dom which contains the new changes, updated state variables values.
<br></br>
Now the new changes will be updated in your Real DOM, this procedure is known as Recoinciliation This makes a big difference! React can update only the necessary parts of the DOM. React's reputation for performance comes largely from this innovation.
</dd></p>
   </>
  )
}

export default Ans2