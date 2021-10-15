import React from "react";

// Componente de Input, sendo reutilizado é possivel definir sua label, tipo, nome, além de pode utilizar um hook personalizado para realizar validações.

const Input = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
  ...rest
}) => {
  // Ao invés de gerenciar seu estado dentro do componente o estado é gerenciado atráves de um hook personalizado, o useForm, que retorna valores e funções necessárias para validações.

  // const [value, setValue] = useState("");

  // function handleChange(e) {
  //   setValue(e.target.value);
  // }

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
