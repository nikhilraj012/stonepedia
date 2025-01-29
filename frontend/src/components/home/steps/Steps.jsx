import React, { useEffect, useState, useRef } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Steps = () => {
  const stepsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = stepsRef.current.indexOf(entry.target);
            setActiveStep(stepIndex);
          }
        });
      },
      {
        root: null,
        threshold: 0.9, // Trigger when 90% of the element is visible
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div>
      {/* Step 1 */}
      <div
        className={`${
          activeStep === 0 ? "sticky top-0" : "relative z-10"
        } bg-black text-white`}
        ref={(el) => (stepsRef.current[0] = el)}
      >
        <Step1 />
      </div>

      {/* Step 2 */}
      <div
        className={`${
          activeStep === 1 ? "sticky top-0 " : "relative z-10"
        } bg-black text-white`}
        ref={(el) => (stepsRef.current[1] = el)}
      >
        <Step2 />
      </div>

      {/* Step 3 */}
      <div
        className={`${
          activeStep === 2 ? "sticky top-0 z-20" : "relative z-10"
        } bg-black text-white`}
        ref={(el) => (stepsRef.current[2] = el)}
      >
        <Step3 />
      </div>
    </div>
  );
};

export default Steps;
