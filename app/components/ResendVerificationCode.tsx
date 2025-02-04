'use client'

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ResendVerificationCode = () => {
  const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds
  const [isCooldown, setIsCooldown] = useState(false); // Whether cooldown is active
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCooldown && timeLeft > 0) {
      // Start a countdown when cooldown is active
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsCooldown(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      // Reset timeLeft to the initial cooldown time when starting the timer
      setTimeLeft(60); // 60 seconds cooldown (adjust as needed)
    }

    // Cleanup on component unmount or if cooldown state changes
    return () => clearInterval(timer);
  }, [isCooldown]);

  const handleResendCode = () => {
    if (!isCooldown) {
      setIsCooldown(true);
      // Your function to send the verification code goes here
      router.push('/reset')
      console.log("Verification code sent!");
      
    }
  };

  return (
    <div>
      <button onClick={handleResendCode} disabled={isCooldown} className={`text-black mt-3 ${isCooldown ? "opacity-50" : "opacity-100"}`}>
        {isCooldown ? `Send Code again ${timeLeft}s` : "Send Code"}
      </button>
    </div>
  );
};

export default ResendVerificationCode;
