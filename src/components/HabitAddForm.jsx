import React, { memo } from 'react';

//props의 데이터 변경되지않으면 메모를 쓰면 pure component쓰는거 처럼 된다
const HabitAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); // this.inputRef.current.value='';
  };

  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Enter new habit here'
      />
      <button className='add-button'>Add</button>
    </form>
  );
};

export default memo(HabitAddForm);
