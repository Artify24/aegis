"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

// Professional cubic-bezier easing curve matching Apple/Linear/Vercel
export const TRANSITION_EASE = [0.16, 1, 0.3, 1] as const;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportMargin?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 20,
  className = "",
  viewportMargin = "0px",
  style,
  ...props
}: FadeInProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin, amount: 0.08 }}
      transition={{
        duration,
        delay,
        ease: TRANSITION_EASE,
      }}
      style={{
        willChange: "transform, opacity",
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = "",
  viewportMargin = "0px",
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin, amount: 0.08 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  duration?: number;
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 18,
  duration = 0.5,
  className = "",
  style,
  ...props
}: StaggerItemProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: TRANSITION_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{
        willChange: "transform, opacity",
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverY?: number;
}

export function HoverCard({
  children,
  className = "",
  hoverY = -6,
  ...props
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: hoverY }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  tapScale?: number;
}

export function HoverScale({
  children,
  className = "",
  scale = 1.03,
  tapScale = 0.97,
  ...props
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: tapScale }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FloatProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

// 100% GPU compositor thread float - zero JS rAF loop overhead
export function Float({
  children,
  className = "",
  duration = 5,
  style,
  ...props
}: FloatProps) {
  return (
    <div
      className={`anim-float ${className}`}
      style={{
        animationDuration: `${duration}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // seconds to complete cycle
  className?: string;
  pauseOnHover?: boolean;
}

// 100% GPU compositor thread marquee - zero JS rAF loop overhead
export function InfiniteMarquee({
  children,
  speed = 32,
  className = "",
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden flex select-none ${
        pauseOnHover ? "pause-on-hover" : ""
      } ${className}`}
    >
      {/* Smooth edge gradient masks with zero CSS mask-image performance penalty */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFD] via-[#FAFAFD]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFD] via-[#FAFAFD]/80 to-transparent z-10" />

      <div
        className="flex shrink-0 items-center gap-12 pr-12 min-w-full animate-marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-12 pr-12 min-w-full animate-marquee-track"
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

