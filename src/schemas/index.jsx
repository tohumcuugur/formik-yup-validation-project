import * as yup from "yup";
const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.,#?!@$%^&*-]).{8,}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Your email is invalid")
        .required("Email is required"),

    age: yup
        .number()
        .positive("Please enter positive number")
        .integer("Please enter integer number")
        .required("Age is required"),
    password: yup
        .string()
        .min(8, "Please enter a minimum 8 characters")
        .matches(passwordRules, {
            message: "Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number and one special charakter"
        })
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords doesn't match ")//we can use oneOf feature for take all the passwords features.Like this "oneOf([yup.ref("password")]"
        .required("Repassword is required"),

})

export const advencedSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, "User name must be at least 5 characters")
        .required("User name is required"),

    university: yup
        .string()
        .oneOf(["bogazici", "odtu", "itu", "beykent"], "Please Chose university")
        .required("Please Chose university"),

    isAccepted: yup
        .boolean().oneOf([true], "Please accept the terms of use"),
})