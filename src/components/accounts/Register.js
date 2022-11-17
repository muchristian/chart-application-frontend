import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { createUser } from "../../services/UserService";

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await createUser({ firstName, lastName, email, password });
      await navigate("/login");
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[26rem] p-4 sm:px-5">
        <div class="text-center">
          <img class="mx-auto h-16 w-16" src="images/app-logo.svg" alt="logo" />
          <div class="mt-4">
            <h2 class="text-2xl font-semibold text-slate-600 dark:text-navy-100">
              Welcome To WeTalk
            </h2>
            <p class="text-slate-400 dark:text-navy-300">
              Please sign up to continue
            </p>
          </div>
        </div>
        <form
          className="card mt-5 rounded-lg p-5 lg:p-7"
          onSubmit={handleFormSubmit}
        >
          <label class="relative flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Firstname"
              name="firstname"
              type="text"
              autoComplete="firstname"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
          </label>

          <label class="relative mt-4 flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Lastname"
              name="lastname"
              type="text"
              autoComplete="lastname"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
          </label>

          <label class="relative mt-4 flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
          </label>
          <label class="relative mt-4 flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </span>
          </label>
          <label class="relative mt-4 flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Repeat Password"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </span>
          </label>
          <button
            disabled={loading}
            class="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Sign Up
          </button>
          <div class="mt-4 text-center text-xs+">
            <p class="line-clamp-1">
              <span>Already have an account? </span>
              <Link
                to="/login"
                class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                href="pages-login-1.html"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
