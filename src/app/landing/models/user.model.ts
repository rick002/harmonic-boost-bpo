export interface User {
    email: string;
    password: string;
}

export interface UserToSignup {
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}


export const DEFAULT_FULL_USER: UserToSignup = {
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
}