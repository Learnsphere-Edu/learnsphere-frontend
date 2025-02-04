'use client'
import { useState, useRef, useEffect } from 'react';
import ResendVerificationCode from './ResendVerificationCode';

const VerifyCode = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Use the ref array here

  // Focus the first input on mount
  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0]?.focus(); // Safely focus the first input
    }
  }, []);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if a digit is entered
    if (value && index < 5 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace key
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0 && inputsRef.current[index - 1]) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
   <div>
     <div className="flex gap-3 verification-code">
      {code.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => {
            // This is the key fix: Don't return anything, just assign
            inputsRef.current[index] = el;
          }}
          className="code-input"
        />
      ))}

    </div>

    <div className="timer">
       <ResendVerificationCode />
      </div>
   </div>
  );
};

export default VerifyCode;
