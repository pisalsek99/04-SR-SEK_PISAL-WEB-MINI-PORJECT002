'use client';

import { signIn } from 'next-auth/react';

export const signInAction = async (formData) => {
    console.log("Form Data", formData);

    // Accessing email and password directly from the plain object
    const result = await signIn('credentials', {
        email: formData.email, // Access directly from the object
        password: formData.password, // Access directly from the object
        redirect: false,
    });

    console.log("Sign In Result:", result);

    if (result?.ok) {
        // Redirect to homepage or any protected page on success
        window.location.href = "/";
    } else {
        alert("Login failed. Please check your email and password.");
    }
};
