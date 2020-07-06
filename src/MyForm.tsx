import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
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

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    const a = function () {
      e.preventDefault();
      onSubmit(form);
      setForm({
        name: "",
        description: "",
      });
    };
    return a;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
