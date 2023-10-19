// React.FC: means react  function based component.
// How we are handling props in TS.
// How to use useState hooks?

import React, { useState } from "react";

interface MyButtonProps {
  //    text: string;   // Here text is required.
  text: string | number | boolean; // here my text is none of one, it can be number or boolean or string
  onClick?: () => void; // Now here text is oftional, if I pass ? that means it is not required.
}
// const MyButton: React.FC<MyButtonProps> = (props) => {
//     const {onClick, text} = props;
//   return <button onClick={onClick}>{text}</button>
// }

// here it is implicitly
// const MyButton: React.FC<MyButtonProps> = (props) => {
//     const {onClick, text} = props;
//     const [value, setValue] = useState(1);

//   return (
//     <div>
//         <h3>{value}</h3>
//         <button onClick={() => setValue(value + 1)}>{text}</button>
//     </div>
//   )
// }

// // explicitly generic as a number
// const MyButton: React.FC<MyButtonProps> = (props) => {
//     const {onClick, text} = props;

//     const [value, setValue] = useState<number>(1);

//   return (
//     <div>
//         <h3>{value}</h3>
//         <button onClick={() => setValue(value + 1)}>{text}</button>
//     </div>
//   )
// }

// explicitly generic as a custom object and using interface we can manage our state.
// explicit always a good ideas.

// interface Book {
//   name: string;
//   price: number;
// }

// const MyButton: React.FC<MyButtonProps> = (props) => {
//   const { onClick, text } = props;

//   const [value, setValue] = useState<Book>({
//     name: 'Mahalaya',
//     price: 1000,
//   });

//   return (
//     <div>
//       <h3>Name: {value.name} (Rs. {value.price} )</h3>
//       <button onClick={() => setValue({name: "DurgaPuja", price: 400})}>{text}</button>
//     </div>
//   );
// };

// form handling
const MyButton: React.FC<MyButtonProps> = (props) => {
  const { onClick, text } = props;

  const [value, setValue] = useState<string | undefined>(); // my state can be either string or undifined

  // For onChange we have ChangeEvent || for onclick we have ClickEvent
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // If you hover onSubmit we can get to know what even it was..
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleNameChange}
          value={value}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{value}</h3>
    </div>
  );
};

export default MyButton;
