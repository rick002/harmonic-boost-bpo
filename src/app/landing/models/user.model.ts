export interface User {
    email: string;
    password: string;
}

export interface UserToSignup {
    confirmPassword: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}