import React, { useState, useRef } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    return setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    function a() {
      e.preventDefault();
      onSubmit(form);
      setForm({
        name: "",
        description: "",
      }); // 초기화
      console.log(inputRef);
      if (!inputRef.current) {
        return;
      }
      inputRef.current.focus();
    }
    return a;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
