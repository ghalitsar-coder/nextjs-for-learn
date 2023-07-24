export type TFormInputs = {
  id: number;
  name: string;
  placeholder: string;
  type: string;
  label: string;
  required: boolean;
  pattern?: string;
  errorMessage: string;
};

export const formInputs = (
  currentPassword: string | undefined
): Array<TFormInputs> => [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    required: true,
    pattern: "^[A-Za-z]{3,16}$",
    errorMessage:
      "Username should be 3-16 characters and shouldn`t include any special characters! ",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    required: true,
    pattern:
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    errorMessage: "It Should be a valid email address",
  },
  {
    id: 3,
    name: "birthDay",
    type: "date",
    placeholder: "Birth Day",
    label: "Birth Day",
    required: false,
    errorMessage: "",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    required: true,
    pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,20}$",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character ",
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Password Confirmation",
    label: "Password Confirmation",
    required: true,
    pattern: currentPassword,
    errorMessage: "Passoword don`t match!",
  },
];
