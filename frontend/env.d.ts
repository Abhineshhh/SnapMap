/// <reference types="expo/types" />

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY?: string;
  }
}
