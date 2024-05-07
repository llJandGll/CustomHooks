import { useState } from "react";
import { toast } from "sonner";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState({});

  const onInputChange = ({ target } ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });

    setErrorMessage({
      ...errorMessage,
      [name]: ""
    });

  
  };


  const clearForm = () => {
    
    setFormState(initialForm)
  };



  return {
    ...formState,
    formState,
    onInputChange,
    errorMessage,
    setErrorMessage,
    clearForm,
  };
};





// const onResetForm = () => {
//   const isEmpty = Object.values(formState).every( ( item ) => item === "" )
//   console.log(isEmpty)

//   isEmpty ? 
//     toast.error("Los campos están vacios intente nuevamente") 
//     : 
//     toast.success("Campos eliminados exitosamente")
//     setFormState(initialForm);
//     setErrorMessage({});
// };