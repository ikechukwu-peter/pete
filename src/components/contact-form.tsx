import { useForm } from "@formspree/react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
    const [state, handleSubmit] = useForm(formId);

    if (!formId) {
        return (
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <p className="text-center text-red-500">
                    The contact form is currently unavailable. Please provide a Formspree ID.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Full name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Subject
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Message
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {state.submitting ? "Sending..." : "Send"}
                    <FiSend className="ml-2 h-5 w-5" />
                </button>
            </div>
            {state.succeeded && (
                <p className="mt-4 text-center text-green-600">
                    Thanks for your message! I&apos;ll get back to you soon.
                </p>
            )}
        </form>
    );
}
