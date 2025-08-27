import { create } from 'zustand';
import { MealSubscription } from './useMealSubscriptionStore';

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
  currentStep: number;
  selectedClusterId: string | null;
  selectedSubscription: MealSubscription | null;
}

interface FormStore {
  formData: FormData;
  setGoal: (goal: string) => void;
  setDiet: (diet: string) => void;
  setDuration: (duration: string) => void;
  setMeals: (meals: string) => void;
  setDietType: (dietType: string) => void;
  toggleMealType: (mealType: string) => void;
  setAge: (age: string) => void;
  setWeight: (weight: string) => void;
  setHeightFeet: (feet: string) => void;
  setHeightInches: (inches: string) => void;
  setGender: (gender: string) => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setState: (state: string) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetMealType: () => void;
  setSelectedClusterId: (clusterId: string) => void;
  setSelectedSubscription: (subscription: MealSubscription) => void;
}

const initialState: FormData = {
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
  phone: null,
  email: null,
  state: null,
  currentStep: 1,
  selectedClusterId: null,
  selectedSubscription: null, 
};

export const useFormStore = create<FormStore>((set) => ({
  formData: initialState,
  setGoal: (goal) => set((state) => ({ formData: { ...state.formData, goal } })),
  setDiet: (diet) => set((state) => ({ formData: { ...state.formData, diet } })),
  setDuration: (duration) =>
    set((state) => ({
      formData: {
        ...state.formData,
        duration,
        meals: null,
        dietType: null,
        mealType: [],
      },
    })),
  setMeals: (meals) =>
    set((state) => ({
      formData: {
        ...state.formData,
        meals,
        dietType: null,
        mealType: [],
      },
    })),
  setDietType: (dietType) =>
    set((state) => ({
      formData: {
        ...state.formData,
        dietType,
        mealType: [],
      },
    })),
  toggleMealType: (mealType) =>
    set((state) => {
      const { mealType: currentMealTypes, meals } = state.formData;
      const maxMeals = meals ? parseInt(meals) : 0;
      const alreadySelected = currentMealTypes.includes(mealType);
      if (alreadySelected) {
        return {
          formData: {
            ...state.formData,
            mealType: currentMealTypes.filter((m) => m !== mealType),
          },
        };
      }
      if (currentMealTypes.length < maxMeals) {
        return {
          formData: {
            ...state.formData,
            mealType: [...currentMealTypes, mealType],
          },
        };
      }
      return state;
    }),
  setAge: (age) => set((state) => ({ formData: { ...state.formData, age } })),
  setWeight: (weight) =>
    set((state) => ({ formData: { ...state.formData, weight } })),
  setHeightFeet: (feet) =>
    set((state) => ({ formData: { ...state.formData, heightFeet: feet } })),
  setHeightInches: (inches) =>
    set((state) => ({ formData: { ...state.formData, heightInches: inches } })),
  setGender: (gender) =>
    set((state) => ({ formData: { ...state.formData, gender } })),
  setName: (name) => set((state) => ({ formData: { ...state.formData, name } })),
  setPhone: (phone) =>
    set((state) => ({ formData: { ...state.formData, phone } })),
  setEmail: (email) =>
    set((state) => ({ formData: { ...state.formData, email } })),
  setState: (stateValue) =>
    set((state) => ({ formData: { ...state.formData, state: stateValue } })),
  setCurrentStep: (step) => set({ formData: { ...initialState, currentStep: step } }),
  nextStep: () =>
    set((state) => {
      const {  formData } = state;
      const { currentStep } = formData;
      if (currentStep === 1 && formData.goal === 'Weight Loss') {
        return { formData: { ...formData, currentStep: 2 } };
      } else if (currentStep === 1) {
        return { formData: { ...formData, currentStep: 2.5 } };
      } else if (currentStep === 2 && formData.diet) {
        return { formData: { ...formData, currentStep: 2.5 } };
      } else if (currentStep === 2.5) {
        return { formData: { ...formData, currentStep: 3 } };
      } else if (currentStep === 3) {
        return { formData: { ...formData, currentStep: 4 } };
      }
      return state;
    }),
  prevStep: () =>
    set((state) => {
      const { currentStep } = state.formData;
      if (currentStep === 2.5) {
        return { formData: { ...state.formData, currentStep: 2 } };
      } else if (currentStep === 3) {
        return { formData: { ...state.formData, currentStep: 2.5 } };
      } else if (currentStep === 4) {
        return { formData: { ...state.formData, currentStep: 3 } };
      }
      return state;
    }),
  resetMealType: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        mealType: [],
      },
    })),
  setSelectedClusterId: (clusterId) =>
    set((state) => ({
      formData: {
        ...state.formData,
        selectedClusterId: clusterId,
      },
    })),
    setSelectedSubscription: (subscription) =>
    set((state) => ({
      formData: { ...state.formData, selectedSubscription: subscription },
    })),
}));
