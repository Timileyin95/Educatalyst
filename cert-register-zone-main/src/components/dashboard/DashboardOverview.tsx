import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  TrendingUp,
  Download,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const mockPrograms = [
  { id: '1', name: 'Digital Literacy Fundamentals', progress: 85, status: 'in-progress' },
  { id: '2', name: 'Advanced Teaching Methods', progress: 100, status: 'completed' },
  { id: '3', name: 'Student Assessment Strategies', progress: 45, status: 'in-progress' },
];

const mockEvents = [
  { name: 'Educational Technology Summit', date: '2024-01-15', status: 'registered' },
  { name: 'Teaching Innovation Workshop', date: '2024-01-22', status: 'registered' },
  { name: 'Assessment Best Practices', date: '2024-02-05', status: 'registered' },
];

export const DashboardOverview = () => {
  const { user, updateProgress, downloadCertificate, registerForEvent } = useAuth();

  const completedPrograms = user?.completedPrograms.length || 0;
  const totalCertificates = user?.certificates.length || 0;
  const eventRegistrations = user?.eventRegistrations.length || 0;

  const handleCompleteProgram = (programId: string) => {
    updateProgress(programId);
  };

  const handleDownloadCertificate = (certificateId: string) => {
    downloadCertificate(certificateId);
  };

  const handleRegisterEvent = (eventName: string, eventDate: string) => {
    registerForEvent(eventName, eventDate);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-hero rounded-xl p-6 text-white shadow-large">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-white/90">
          {user?.role === 'teacher' 
            ? 'Manage your professional development and track your progress.' 
            : 'Continue your learning journey and track your achievements.'
          }
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-soft border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Programs</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{completedPrograms}</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
            <Award className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{totalCertificates}</div>
            <p className="text-xs text-muted-foreground">
              Available for download
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Event Registrations</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{eventRegistrations}</div>
            <p className="text-xs text-muted-foreground">
              Upcoming events
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">7</div>
            <p className="text-xs text-muted-foreground">
              Days in a row
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Programs */}
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Current Programs
            </CardTitle>
            <CardDescription>
              Track your learning progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockPrograms.map((program) => (
              <div key={program.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{program.name}</h4>
                  <Badge variant={program.status === 'completed' ? 'default' : 'secondary'}>
                    {program.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Progress value={program.progress} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {program.progress}% complete
                    </span>
                    {program.status !== 'completed' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCompleteProgram(program.id)}
                      >
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certificates & Events */}
        <div className="space-y-6">
          {/* Certificates */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-warning" />
                Your Certificates
              </CardTitle>
              <CardDescription>
                Download your earned certificates
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user?.certificates.length ? (
                <div className="space-y-3">
                  {user.certificates.slice(0, 3).map((certificate) => (
                    <div key={certificate.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">{certificate.programName}</h4>
                        <p className="text-xs text-muted-foreground">
                          Completed {new Date(certificate.completionDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownloadCertificate(certificate.id)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Award className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Complete programs to earn certificates
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Register for educational events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockEvents.slice(0, 2).map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{event.name}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleRegisterEvent(event.name, event.date)}
                    >
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};