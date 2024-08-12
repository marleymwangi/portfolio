"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export default function index({ index, title, link, manageModal }) {
  const router = useRouter();
  const handleClick = (path) => {
    if (path) {
      router.push(path);
      return;
    }
  };
  return (
    <div
      onClick={() => handleClick(link)}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
