"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Message {
    isImage: boolean;
    isPublised: boolean;
    message: string;
    createdAt: string;
    updatedAt: string;
}

interface Chat {
    _id: string;
    userId: string;
    username: string;
    name: string;
    messages: Message[];
    updatedAt: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    password: string;
    credits: number;
}

const dummyUserData: User = {
    "_id": "692a8967e7751a54854322b8",
    "name": "Leap with Luvi",
    "email": "leapwithluvi@gmail.com",
    "avatar": "https://i.pravatar.cc/150?img=12",
    "password": "password",
    "credits": 100,
}

const dummyChats: Chat[] = [
    {
        "_id": "1",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Cara membuat AI Chatbot",
        "messages": [],
        "updatedAt": new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 mins ago
    },
    {
        "_id": "2",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Perbedaan React dan Vue",
        "messages": [],
        "updatedAt": new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
    },
    {
        "_id": "3",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Tips belajar Machine Learning",
        "messages": [],
        "updatedAt": new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // yesterday
    },
    {
        "_id": "4",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Setup Ollama di Linux",
        "messages": [],
        "updatedAt": new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() // 2 days ago
    },
    {
        "_id": "5",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Apa itu Retrieval Augmented Generation?",
        "messages": [],
        "updatedAt": new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString() // 3 days ago
    },
    {
        "_id": "6",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Advanced CSS Techniques",
        "messages": [],
        "updatedAt": "2026-02-15T10:00:00.000Z" // Feb 2026
    },
    {
        "_id": "7",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "Introduction to TypeScript",
        "messages": [],
        "updatedAt": "2025-12-20T15:30:00.000Z" // Dec 2025
    },
    {
        "_id": "8",
        "userId": "692a8967e7751a54854322b8",
        "username": "Leap with Luvi",
        "name": "History of AI",
        "messages": [],
        "updatedAt": "2025-12-05T09:00:00.000Z" // Dec 2025
    },
]

interface AppContextType {
    router: ReturnType<typeof useRouter>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    chats: Chat[];
    setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
    selectedChat: Chat | null;
    setSelectedChat: React.Dispatch<React.SetStateAction<Chat | null>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    fetchUser: () => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {

    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [chats, setChats] = useState<Chat[]>([])
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    const fetchUser = async () => {
        setUser(dummyUserData)
    }

    const fetchUserChats = async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }

    useEffect(() => {
        if(user) {
            fetchUserChats()
        } else {
            setChats([])
            setSelectedChat(null)
        }
    }, [user])

    useEffect(() => {
        fetchUser()
    }, [])

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const value = {
        router,
        user,
        setUser,
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
        theme,
        setTheme,
        fetchUser
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}
