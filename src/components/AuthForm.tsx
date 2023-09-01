import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';

const registerContent = {
    linkUrl: "/signin",
    linkText: "Already have an account?",
    header: "Create a new Account",
    subheader: "Just a few things to get started",
    buttonText: "Register",
};

const signinContent = {
    linkUrl: "/register",
    linkText: "Don't have an account?",
    header: "Welcome Back",
    subheader: "Enter your credentials to access your account",
    buttonText: "Sign In",
};

const initial = { email: "", password: "", firstName: "", lastName: "" };
const AuthForm = ({ mode }: { mode: "register" | "signin" }) => {
    const [formState, setFormState] = useState({ ...initial });
    const [error, setError] = useState("");

    // const router = useRouter();
    const navigate = useNavigate();
    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            navigate('/')
            // try {
            //     if (mode === "register") {
            //         await register(formState);
            //     } else {
            //         await signin(formState);
            //     }

            //     router.replace("/home");
            // } catch (e) {
            //     setError(`Could not ${mode}`);
            // } finally {
            //     setFormState({ ...initial });
            // }
        },
        [
            formState.email,
            formState.password,
            formState.firstName,
            formState.lastName,
        ]
    );

    const content = mode === "register" ? registerContent : signinContent;
    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="m-auto	w-3/12 text-center align-middle">
                <div >
                    <div className="text-center">
                        <h2 className="mb-2 text-3xl">{content.header}</h2>
                        <p className="tex-lg text-black/25">{content.subheader}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full py-10">
                        {mode === "register" && (
                            <div className="mb-8 flex justify-between">
                                <div className="pr-2">
                                    <div className="mb-4 ml-2 text-lg text-black/50">
                                        First Name
                                    </div>
                                    <input
                                        // required
                                        placeholder="First Name"
                                        value={formState.firstName}
                                        className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                                        onChange={(e) =>
                                            setFormState((s) => ({ ...s, firstName: e.target.value }))
                                        }
                                    />
                                </div>
                                <div className="pl-2">
                                    <div className="mb-4 ml-2 text-lg text-black/50">Last Name</div>
                                    <input
                                        // required
                                        placeholder="Last Name"
                                        value={formState.lastName}
                                        className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                                        onChange={(e) =>
                                            setFormState((s) => ({ ...s, lastName: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        <div className="mb-8">
                            <div className="mb-4 ml-2 text-lg text-black/50">Email</div>
                            <input
                                // required
                                type="email"
                                placeholder="Email"
                                value={formState.email}
                                className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                                onChange={(e) =>
                                    setFormState((s) => ({ ...s, email: e.target.value }))
                                }
                            />
                        </div>
                        <div className="mb-8">
                            <div className="mb-4 ml-2 text-lg text-black/50">Password</div>
                            <input
                                // required
                                value={formState.password}
                                type="password"
                                placeholder="Password"
                                className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                                onChange={(e) =>
                                    setFormState((s) => ({ ...s, password: e.target.value }))
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span>
                                    <Link
                                        to={content.linkUrl}
                                        className="font-bold text-blue-600"
                                    >
                                        {content.linkText}
                                    </Link>
                                </span>
                            </div>
                            <div>
                                <button type="submit" >
                                    {content.buttonText}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default AuthForm
