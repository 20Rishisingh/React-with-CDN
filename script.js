const TextComponent = () => {
   return(
      <div>
         <h1> "Let's Learn React" </h1>
         
         <h2> ♦ History of React:</h2>
         <p>
            Initial Release to the Public (V0.3.0) was in July 2013. React.JS was first used in 2011 for Facebook's Newsfeed feature. <u>Facebook Software Engineer, Jordan Walke, created it.</u> <i>Current version of create-react-app is v5.0.1 (April 2022).</i> create-react-app includes built tools such as webpack, Babel, and ESLint.
         </p>
         
         <hr></hr>

         <h2> ♦ What is React:</h2>
         <p>
            <a href="https://react.dev">React</a> is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by <a href="https://about.meta.com">Meta</a> and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
         </p>
         
         <hr></hr>

         <h2> ♦ How to use React:</h2>
         <p>
            To get an overview of what React is, you can write React code directly in HTML. But in order to use React in production, you need npm and Node.js installed. The quickest way start learning React is to write React directly in your HTML files. Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.
         </p>

         <hr></hr>
      </div>
   )
}

let root = document.getElementById("main");
ReactDOM.render(<TextComponent/>, root);









// let heading1 = React.createElement("h1",null,"Learn Web Devlopment");

// let para1 = React.createElement("p",null,"Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.");

// let para2 = 

// let para3 = 

// let h1 = document.getElementById("h1");
// ReactDOM.render(heading1, h1);

// let p1 = document.getElementById("p1");
// ReactDOM.render(para1, p1);