export type SignInFormValues = {
    si_email: string;
    si_password: string;
    si_rememberMe: boolean;
};

export type SignUpFormValues = {
    su_fullName: string;
    su_email: string;
    su_password: string;
    su_confirmPassword: string;
};

export type ContactFormValues = {
    co_firstName: string;
    co_lastName: string;
    co_email: string;
    co_subject: string;
    co_country: string;
    co_message: string;
};

export type DateFormValue = {
    date: string;
}