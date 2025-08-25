"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import PersonalInfoStep from "./PersonalInfoStep";
import Step3 from "./Step3";
import Step4 from "./Step4";

interface FormData {
  goal: string | null;
  diet: string | null;
  duration: string | null;
  meals: string | null;
  dietType: string | null;
  mealType: string[];
  age: string | null;
  weight: string | null;
  heightFeet: string | null;
  heightInches: string | null;
  gender: string | null;
  name: string | null;
  phone: string | null;
  email: string | null;
  state: string | null;
}

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    goal: null,
    diet: null,
    duration: null,
    meals: null,
    dietType: null,
    mealType: [],
    age: null,
    weight: null,
    heightFeet: null,
    heightInches: null,
    gender: null,
    name: null,
    email: null,
    phone: null,
    state: null,
  });

  const handleStep1Continue = () => {
    if (formData.goal == "Weight Loss") {
      setCurrentStep(2);
    } else {
      setCurrentStep(2.5);
    }
  };

  const handleStep2Continue = () => {
    if (formData.diet) {
      setCurrentStep(2.5); // Go to Personal Info Step
    }
  };

  const handlePersonalInfoBack = () => {
    setCurrentStep(2);
  };

  const handlePersonalInfoNext = () => {
    setCurrentStep(3);
  };

  const handleStep3Back = () => {
    setCurrentStep(2.5);
  };

  const handleStep3Next = () => {
    setCurrentStep(4); // go to Step 4 now
  };

  const handleStep4Back = () => {
    setCurrentStep(3);
  };

  const handleStep4Next = () => {
    console.log("Final form submitted:", formData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            selectedGoal={formData.goal}
            onGoalSelect={(goal) => setFormData({ ...formData, goal })}
            onContinue={handleStep1Continue}
          />
        );
      case 2:
        return (
          <Step2
            selectedGoal={formData.goal!}
            selectedDiet={formData.diet}
            onDietSelect={(diet) => setFormData({ ...formData, diet })}
            onContinue={handleStep2Continue}
          />
        );
      case 2.5:
        return (
          <PersonalInfoStep
            selectedGoal={formData.goal!}
            selectedGender={formData.gender}
            selectedAge={formData.age}
            selectedWeight={formData.weight}
            selectedHeightFeet={formData.heightFeet}
            selectedHeightInches={formData.heightInches}
            onGenderSelect={(gender) => setFormData({ ...formData, gender })}
            onAgeSelect={(age) => setFormData({ ...formData, age })}
            onWeightSelect={(weight) => setFormData({ ...formData, weight })}
            onHeightFeetSelect={(feet) =>
              setFormData({ ...formData, heightFeet: feet })
            }
            onHeightInchesSelect={(inches) =>
              setFormData({ ...formData, heightInches: inches })
            }
            onBack={handlePersonalInfoBack}
            onNext={handlePersonalInfoNext}
          />
        );
      case 3:
        return (
          <Step3
            selectedDuration={formData.duration}
            selectedMeals={formData.meals}
            selectedDietType={formData.dietType}
            selectedMealType={formData.mealType}
            onDurationSelect={(duration) =>
              setFormData({
                ...formData,
                duration,
                meals: null,
                dietType: null,
                mealType: [],
              })
            }
            onMealsSelect={(meals) =>
              setFormData({
                ...formData,
                meals,
                dietType: null,
                mealType: [],
              })
            }
            onDietTypeSelect={(dietType) =>
              setFormData({ ...formData, dietType, mealType: [] })
            }
            onMealTypeSelect={(mealType) => {
              setFormData((prev) => {
                const alreadySelected = prev.mealType.includes(mealType);
                const maxMeals = prev.meals ? parseInt(prev.meals) : 0;

                // If deselecting → remove
                if (alreadySelected) {
                  return {
                    ...prev,
                    mealType: prev.mealType.filter((m) => m !== mealType),
                  };
                }

                // If selecting new → only allow up to `meals` count
                if (prev.mealType.length < maxMeals) {
                  return {
                    ...prev,
                    mealType: [...prev.mealType, mealType],
                  };
                }

                // If already full → don't add more
                return prev;
              });
            }}
            onBack={handleStep3Back}
            onNext={handleStep3Next}
          />
        );

      case 4:
        return (
          <Step4
            name={formData.name}
            phone={formData.phone}
            email={formData.email}
            state={formData.state}
            onNameChange={(name) => setFormData({ ...formData, name })}
            onPhoneChange={(phone) => setFormData({ ...formData, phone })}
            onEmailChange={(email) => setFormData({ ...formData, email })}
            onStateChange={(state) => setFormData({ ...formData, state })}
            onBack={handleStep4Back}
            onNext={handleStep4Next}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };

  return <div className="h-fit w-full">{renderCurrentStep()}</div>;
};

export default MultiStepForm;
