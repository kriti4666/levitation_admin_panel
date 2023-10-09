import React, {ChangeEvent} from "react";

interface InputProps {
    label: string;
    errorMessage: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    name: string;
    focused: string;
}

const Input: React.FC<InputProps> = ({
    label, errorMessage, onChange, id, name, focused: inputFocused, ...inputProps
}) => {

  // const [focused, setFocused] = useState(false);


  return name === "password" ? (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="text-sm">
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="mt-2">
        <input

        {...inputProps}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          
        />
        <span className="text-red-600" hidden>{errorMessage}</span>
      </div>
    </div>
  ) : (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
        {...inputProps}
          autoComplete={name}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          
        />
        <span className="text-red-600" hidden>{errorMessage}</span>
      </div>
    </div>
  );
};





export {  Input };
