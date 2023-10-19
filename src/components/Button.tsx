
// React.FC: means react  function based component.
// How we are handling props in TS.

interface MyButtonProps  {
//    text: string;   // Here text is required.
   text: string | number | boolean // here my text is none of one, it can be number or boolean or string
   onClick?: () => void; // Now here text is oftional, if I pass ? that means it is not required.
}
const MyButton: React.FC<MyButtonProps> = (props) => {
    const {onClick, text} = props;
  return <button onClick={onClick}>{text}</button>
}

export default MyButton;
