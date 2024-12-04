"use client"

import { signIn } from "next-auth/react"
import { BsApple, BsFacebook } from "react-icons/bs"

import styles from "./index.module.scss"

export const AppleButton = () => {
  return (
    <button
      onClick={() => {
        signIn("apple")
      }}
      className={styles.btn_apple}
    >
      <BsApple className={styles.provider_icon} />
      Sign in with Apple
    </button>
  )
}
