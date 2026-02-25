# React Form Experiments

This project contains two React experiments demonstrating form handling using controlled components and client-side validation.

------------------------------------------------------------

EXPERIMENT–1: Handling Forms Using Controlled Components

Aim:
To create and handle forms in a frontend application using controlled components in React.

Software Requirements:
- Node.js
- React
- VS Code
- Web Browser

Theory:
Controlled components are React form elements whose values are controlled by the component’s state. Instead of allowing the DOM to manage form data, React stores input values using useState(). This provides complete control over user input and ensures predictable data flow.

Procedure:
1. Create a React application.
2. Create a form component.
3. Use useState() to store input values.
4. Handle input change events.
5. Submit the form using an event handler.

Features Implemented:
- Text inputs (First Name, Last Name)
- Radio buttons (Gender)
- Textarea (Address)
- Date input with future date restriction
- Dropdown (All Indian States & UTs)
- Checkbox (Skills)
- Reset functionality
- Display submitted data using alert()

Concepts Used:
- useState Hook
- Controlled Components
- Event Handling
- Form Submission Handling

<img width="620" height="859" alt="image" src="https://github.com/user-attachments/assets/132ca056-2943-4619-a526-a97e8aea04ee" />
<img width="611" height="867" alt="image" src="https://github.com/user-attachments/assets/5eb183cd-f891-4287-b4cf-065686f5a65e" />
<img width="660" height="902" alt="image" src="https://github.com/user-attachments/assets/2b95fa66-2d8d-4129-9b8a-45686e60c6c8" />
<img width="534" height="172" alt="image" src="https://github.com/user-attachments/assets/7b53e486-4053-4e98-8095-727d9d246484" />

------------------------------------------------------------

EXPERIMENT–2: Client-Side Form Validation

Aim:
To validate form inputs on the client side before submission.

Theory:
Client-side validation ensures correctness of user data and provides immediate feedback without server interaction. It improves user experience and prevents invalid data submission.

Procedure:
1. Create form inputs (Email and Password).
2. Define validation conditions using Regular Expressions.
3. Display error messages.
4. Allow submission only for valid data.

Validation Rules:

Email:
- Must contain '@'
- Must contain valid domain such as .com, .in, .org, .net, etc.
- Invalid examples blocked:
  - abc.com@gmail.com
  - abc@@gmail.com
  - abc@gmail

Password:
1. Must start with a Capital letter
2. Must contain at least one number
3. Must contain at least one special character
4. Must be minimum 5 characters long

Concepts Used:
- useState Hook
- Regular Expressions (Regex)
- Conditional Rendering
- Error Handling
- Controlled Inputs

<img width="644" height="628" alt="image" src="https://github.com/user-attachments/assets/0fc971d6-0189-4e37-aa6d-35a76a35f11b" />
<img width="669" height="629" alt="image" src="https://github.com/user-attachments/assets/f521568c-fa31-49a1-abbb-e61c6b3bf3cc" />
<img width="748" height="627" alt="image" src="https://github.com/user-attachments/assets/e9050099-48ae-4a62-a594-4cd39b001eef" />
<img width="663" height="223" alt="image" src="https://github.com/user-attachments/assets/2edd1d0a-d5be-4c1f-a937-f80c8bb640ca" />


------------------------------------------------------------

How to Run:

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Open in browser:
   http://localhost:5173
