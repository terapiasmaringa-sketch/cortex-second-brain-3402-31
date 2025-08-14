import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Search, Upload, User, Settings, LogOut, Table } from 'lucide-react';
import { useRippleEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/AuthModal';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ to, icon, label, active, onClick }: NavItemProps) => {
  const handleRipple = useRippleEffect();
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          to={to} 
          className={cn(
            "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
            "hover:bg-primary/10 hover:text-primary",
            "overflow-hidden",
            active ? "bg-primary/10 text-primary" : "text-foreground/80"
          )}
          onClick={(e) => {
            handleRipple(e);
            onClick();
          }}
        >
          <span className={cn(
            "transition-all duration-300",
            active ? "text-primary" : "text-foreground/60"
          )}>
            {icon}
          </span>
          <span className="font-medium">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};


export const Navbar = () => {
  const [active, setActive] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  
  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleNavItemClick = (id: string) => {
    setActive(id);
  };

  
  const authNavItems = [
    { to: '/manage', icon: <Table size={20} />, label: 'Manage', id: 'manage' },
    { to: '/search', icon: <Search size={20} />, label: 'Search', id: 'search' },
    { to: '/import', icon: <Upload size={20} />, label: 'Import', id: 'import' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile', id: 'profile' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  const navItems = isAuthenticated ? authNavItems : [];

  return (
    <>
      {/* Desktop Navigation - Fixed Header */}
      <TooltipProvider>
        <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl font-bold text-foreground">
                  Brand
                </Link>
              </div>

              {/* Navigation Items */}
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    active={active === item.id}
                    onClick={() => handleNavItemClick(item.id)}
                  />
                ))}
                
                {/* Auth Button */}
                {isAuthenticated ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground"
                        onClick={logout}
                      >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Logout</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground"
                        onClick={handleOpenAuthModal}
                      >
                        <LogIn size={20} />
                        <span className="font-medium">Login</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Login</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </nav>
            </div>
          </div>
        </header>
      </TooltipProvider>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </>
  );
};

export default Navbar;
