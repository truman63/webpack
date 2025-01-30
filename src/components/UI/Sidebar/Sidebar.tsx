// src/components/Sidebar.tsx
import React, { ReactNode } from 'react';
import styles from "@/components/UI/Sidebar/Sidebar.module.css"

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children }) => {
    return (
        <div 
            className={`
                ${styles.sidebar} 
                ${isOpen ? styles.open : ''}
            `}>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>
            <nav className={styles.nav}>
                {children}
            </nav>
        </div>
    );
};

export default Sidebar;
