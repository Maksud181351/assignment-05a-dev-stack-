Technologies Used
React, Vite, Tailwind CSS, DaisyUI, React-Toastify, JavaScript (ES6+), JSON

 Features
1. Technology cards with icon, badge, category, difficulty and rating, loaded from a JSON file with a loading spinner.
2. "Your Stack" panel to add, remove one item, or remove all, with toast alerts for every action.
3. One shared gradient theme and a fully responsive layout with a mobile navbar.

React Questions
1. What is JSX, and why is it used in React?
JSX is HTML-like code written inside JavaScript. It helps us write UI and logic together.

2. What is the difference between props and state?
Props come from the parent and are read-only. State belongs to the component and can change.

3. What does useState do, and where did you use it?
It stores a changing value. I used it in App.jsx for technologies, loading and stack.

4. What does useEffect do, and why was it needed to load the JSON?
It runs code after render. I used it to fetch the JSON file once when the page loads.

5. Why does every item in .map() need a unique key?
React uses the key to identify each item, so it updates only the changed ones.

6. What is conditional rendering?
Showing UI based on a condition. In Stack.jsx I show an empty message when the stack has no items.

7. How do you pass data between parent and child?
Parent sends data to child with props. Child sends data back by calling a function prop like onAdd(tech).