# Dev Stack

Build your ideal development stack. Browse frontend, backend, database, language, styling and DevOps technologies, then add your favourites to a personal stack.

## Technologies Used

React, Vite, Tailwind CSS, DaisyUI, React-Toastify, JavaScript (ES6+), JSON

## Features

1. Cards with technology icons/badges with categories/difficulty/rating values pulled in via a JSON file with a loading spinner.
2. “Your Stack” panel for adding/removing one item, and clearing all with toasts showing after each action.
3. Single gradient style throughout and full responsiveness with a mobile navigation bar.

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is an HTML-like syntax that is written using JavaScript. It makes it easier for us to develop both UI and logic.

**2. What is the difference between props and state?**

Props are from the parent and are read-only whereas state is owned by the component and can be mutable.

**3. What does useState do, and where did you use it?**

This contains a variable value. I applied this in App.jsx file on technologies, loading and stack.

**4. What does useEffect do, and why was it needed to load the JSON?**

It runs code after the render is complete. I used it to fetch the JSON file once on page load.

**5. Why does every item in .map() need a unique key?**

React uses the key to recognize individual items, and hence, only the items that have been modified are updated.

**6. What is conditional rendering?**

Conditionally rendering UI. In YourStack.jsx file, I render an empty message if there are no items in the stack.

**7. How do you pass data between parent and child?**

Parent passes down data using props. The child passes back data by calling functions passed down as props.