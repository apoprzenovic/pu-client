import React from "react";
import {Link} from "react-router-dom";

function InvalidPage() {
    return (
        <div>
            <main className="grid min-h-full place-items-center bg-main-background px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-main-in-focus">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re
                        looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={"/"}
                            className="rounded text-base px-3.5 py-2.5 focus:!outline-none focus:!ring-0 focus:!ring-transparent !bg-main-color !text-main-text-in-focus hover:!bg-main-in-focus transition-colors duration-300"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default InvalidPage;
