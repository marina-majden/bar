import { useState } from "react";

/**
 * Home komponenta - Izgrađena prema React 19 i Tailwind CSS v4 standardima.
 */
export default function Home() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <main className='flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50'>
            <div className='w-full max-w-xl rounded-2xl border border-zinc-200 bg-white/85 p-8 shadow-xs backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/85'>
                <header className='mb-6 text-center'>
                    <h1 className='text-3xl font-bold tracking-tight'>
                        Dobrodošli u React 19 & Tailwind 4
                    </h1>
                    <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Optimizirano za performanse uz Vite 8 arhitekturu.
                    </p>
                </header>

                <section className='flex flex-col items-center justify-center gap-4'>
                    <div className='text-lg font-medium'>
                        Brojač klikova:{" "}
                        <span className='font-bold text-indigo-600 dark:text-indigo-400'>
                            {count}
                        </span>
                    </div>

                    <button
                        type='button'
                        onClick={handleIncrement}
                        className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-indigo-500 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'>
                        Povećaj brojač
                    </button>
                </section>
            </div>
        </main>
    );
}
