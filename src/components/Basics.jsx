export function Loader() {
    return (
        <div className='flex items-center justify-center p-8'>
            <div className='w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin'></div>
        </div>
    );
}

export function HeroBackground() {
    return (
        <div className='absolute inset-0 -z-10 bg-linear-45 from-bg-secondary to-bg-primary opacity-60'></div>
    );
}
