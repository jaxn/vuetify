<template>
  <v-banner
    text="Your password was updated on your other device. Please sign in again."
    dismiss_text="Continue as a guest"
    confirm_text="Sign in"
    @confirm="router.push('sign-in') />
</template>
