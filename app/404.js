    import { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    export default function NotFound() {
        const navigate = useNavigate();

        useEffect(() => {
            const timer = setTimeout(() => {
                navigate('/');
            }, 3000);

            return () => clearTimeout(timer);
        }, [navigate]);

        return (
            <div className="justify-center items-center bg-[#5B00FF] w-full h-screen">
                <span>The page you are looking for does not exist.</span>
            </div>
        );
    }
