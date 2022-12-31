import { useRef } from "react";
const NewTask = ({add}) => {
  const input = useRef()
  return(
    <form
        onSubmit={(e) => {
          e.preventDefault();
          let subject = input.current.value;
          if (!subject) {
            return false;
          }
          add(subject);
          input.current.value = "";
          input.current.focus();
        }}
      >
        <input type="text" ref={input} />
        <br />
        <button>Add</button>
      </form>
  )
}

export default NewTask;