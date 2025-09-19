import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'teacher' | 'student';
  avatar?: string;
  joinedDate: string;
  completedPrograms: string[];
  certificates: Certificate[];
  eventRegistrations: EventRegistration[];
}

export interface Certificate {
  id: string;
  programName: string;
  completionDate: string;
  certificateUrl: string;
}

export interface EventRegistration {
  id: string;
  eventName: string;
  eventDate: string;
  status: 'registered' | 'attended' | 'cancelled';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: 'teacher' | 'student') => Promise<boolean>;
  logout: () => void;
  updateProgress: (programId: string) => void;
  downloadCertificate: (certificateId: string) => void;
  registerForEvent: (eventName: string, eventDate: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('eduUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('eduUsers') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('eduUser', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string, name: string, role: 'teacher' | 'student'): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('eduUsers') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      return false; // User already exists
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      role,
      joinedDate: new Date().toISOString(),
      completedPrograms: [],
      certificates: [],
      eventRegistrations: []
    };

    users.push(newUser);
    localStorage.setItem('eduUsers', JSON.stringify(users));
    
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('eduUser', JSON.stringify(userWithoutPassword));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduUser');
  };

  const updateProgress = (programId: string) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      completedPrograms: [...user.completedPrograms, programId],
      certificates: [
        ...user.certificates,
        {
          id: Date.now().toString(),
          programName: `Program ${programId}`,
          completionDate: new Date().toISOString(),
          certificateUrl: '#'
        }
      ]
    };
    
    setUser(updatedUser);
    localStorage.setItem('eduUser', JSON.stringify(updatedUser));
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('eduUsers') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      localStorage.setItem('eduUsers', JSON.stringify(users));
    }
  };

  const downloadCertificate = (certificateId: string) => {
    // Simulate certificate download
    const certificate = user?.certificates.find(c => c.id === certificateId);
    if (certificate) {
      // Create a mock PDF download
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,Certificate of Completion for ' + certificate.programName;
      link.download = `certificate-${certificate.programName.replace(/\s+/g, '-')}.txt`;
      link.click();
    }
  };

  const registerForEvent = (eventName: string, eventDate: string) => {
    if (!user) return;
    
    const newRegistration: EventRegistration = {
      id: Date.now().toString(),
      eventName,
      eventDate,
      status: 'registered'
    };
    
    const updatedUser = {
      ...user,
      eventRegistrations: [...user.eventRegistrations, newRegistration]
    };
    
    setUser(updatedUser);
    localStorage.setItem('eduUser', JSON.stringify(updatedUser));
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('eduUsers') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      localStorage.setItem('eduUsers', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProgress,
      downloadCertificate,
      registerForEvent
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};