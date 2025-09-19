import { useState, useEffect } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';

export const AuthWrapper = () => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Create demo accounts on first load
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('eduUsers') || '[]');
    if (users.length === 0) {
      const demoUsers = [
        {
          id: '1',
          email: 'teacher@demo.com',
          password: 'demo123',
          name: 'Dr. Sarah Johnson',
          role: 'teacher',
          joinedDate: new Date().toISOString(),
          completedPrograms: ['1', '2'],
          certificates: [
            {
              id: '1',
              programName: 'Digital Literacy Fundamentals',
              completionDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
              certificateUrl: '#'
            },
            {
              id: '2',
              programName: 'Advanced Teaching Methods',
              completionDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
              certificateUrl: '#'
            }
          ],
          eventRegistrations: [
            {
              id: '1',
              eventName: 'Educational Technology Summit',
              eventDate: '2024-01-15',
              status: 'registered'
            }
          ]
        },
        {
          id: '2',
          email: 'student@demo.com',
          password: 'demo123',
          name: 'Alex Martinez',
          role: 'student',
          joinedDate: new Date().toISOString(),
          completedPrograms: ['1'],
          certificates: [
            {
              id: '3',
              programName: 'Digital Literacy Fundamentals',
              completionDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
              certificateUrl: '#'
            }
          ],
          eventRegistrations: [
            {
              id: '2',
              eventName: 'Teaching Innovation Workshop',
              eventDate: '2024-01-22',
              status: 'registered'
            }
          ]
        }
      ];
      localStorage.setItem('eduUsers', JSON.stringify(demoUsers));
    }
  }, []);

  if (user) {
    return (
      <DashboardLayout>
        <DashboardOverview />
      </DashboardLayout>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm onToggleMode={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggleMode={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};