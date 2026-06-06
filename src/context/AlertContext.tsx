"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Image from "next/image";
import { AlertCircle, Info } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ShowAlertParams = {
  text: string;
  image?: string;
  okText: string;
  ngText?: string;
  type?: "info" | "warning";
};

type AlertContextType = {
  showAlert: (params: ShowAlertParams) => Promise<boolean>;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState<ShowAlertParams | null>(null);
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

  const showAlert = (newParams: ShowAlertParams): Promise<boolean> => {
    setParams(newParams);
    setIsOpen(true);
    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleClose = (result: boolean) => {
    setIsOpen(false);
    if (resolver) {
      resolver(result);
    }
    setTimeout(() => {
      setParams(null);
      setResolver(null);
    }, 300);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <AnimatePresence>
        {isOpen && params && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={overlayStyle}
            onClick={() => params.ngText ? handleClose(false) : handleClose(true)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={modalStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={contentContainerStyle}>
                
                {/* 飾り付けのアイコン */}
                {!params.image && (
                  <div style={iconWrapperStyle}>
                    {params.type === "warning" || params.ngText ? (
                      <AlertCircle size={42} color="var(--primary-color, #C7442E)" strokeWidth={1.5} />
                    ) : (
                      <Info size={42} color="var(--accent-color, #C9A84C)" strokeWidth={1.5} />
                    )}
                  </div>
                )}

                {/* 任意の画像表示 */}
                {params.image && (
                  <div style={{ marginBottom: "20px", position: "relative", width: "100px", height: "100px" }}>
                    <Image 
                      src={params.image} 
                      alt="Alert image" 
                      fill 
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                
                <p style={textStyle}>
                  {params.text}
                </p>

                <div style={buttonContainerStyle}>
                  {params.ngText && (
                    <button
                      onClick={() => handleClose(false)}
                      style={ngButtonStyle}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)")}
                    >
                      {params.ngText}
                    </button>
                  )}
                  <button
                    onClick={() => handleClose(true)}
                    style={okButtonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
                  >
                    {params.okText}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AlertContext.Provider>
  );
};

export const useCustomAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useCustomAlert must be used within an AlertProvider");
  }
  return context;
};

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "20px",
};

const modalStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: "340px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  borderRadius: "28px",
  boxShadow: "0 24px 40px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 24px",
};

const contentContainerStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

const iconWrapperStyle: React.CSSProperties = {
  marginBottom: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "50%",
  padding: "16px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: 500,
  color: "#222222",
  marginBottom: "32px",
  whiteSpace: "pre-wrap",
  textAlign: "center",
  lineHeight: 1.7,
  letterSpacing: "0.02em",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  width: "100%",
  justifyContent: "center",
};

const buttonBaseStyle: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: "30px",
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
  flex: 1,
  maxWidth: "150px",
  border: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const okButtonStyle: React.CSSProperties = {
  ...buttonBaseStyle,
  backgroundColor: "var(--secondary-color, #111111)",
  color: "#ffffff",
  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
};

const ngButtonStyle: React.CSSProperties = {
  ...buttonBaseStyle,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: "#555555",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
};
