import { useState } from 'react';
import { Settings, User, HelpCircle, LogOut, UserCircle, Bell, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

// Top navigation bar component
export const Navbar = () => {
  return (
    <nav
      data-testid="navbar"
      className="sticky top-0 z-50 border-b border-[#2e2e4a]/50 bg-gradient-to-r from-[#1a1a2e] to-[#0f0f1f]"
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left side - Logo and Title */}
        <div className="flex items-center gap-3">
          <div
            data-testid="navbar-logo"
            className="h-8 w-8 rounded-lg bg-[#4a4aff] flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <h1
            data-testid="navbar-title"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Uptime AI
          </h1>
        </div>

        {/* Right side - Action icons */}
        <div className="flex items-center gap-2">
          {/* Help Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="help-button"
                className="h-9 w-9 rounded-full bg-[#2e2e4a]/50 flex items-center justify-center text-[#a0a0c0] hover:text-white hover:bg-[#3e3e6a]/50 transition-all"
                title="Help"
              >
                <HelpCircle className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#2e2e4a] border-[#4e4e6a] text-white min-w-[180px]">
              <DropdownMenuLabel className="text-[#a0a0c0]">Help & Support</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#4e4e6a]" />
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer">
                Documentation
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer">
                FAQs
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer">
                Contact Support
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="settings-button"
                className="h-9 w-9 rounded-full bg-[#2e2e4a]/50 flex items-center justify-center text-[#a0a0c0] hover:text-white hover:bg-[#3e3e6a]/50 transition-all"
                title="Settings"
              >
                <Settings className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#2e2e4a] border-[#4e4e6a] text-white min-w-[180px]">
              <DropdownMenuLabel className="text-[#a0a0c0]">Settings</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#4e4e6a]" />
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2">
                <Bell className="h-4 w-4" /> Notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2">
                <Moon className="h-4 w-4" /> Appearance
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2">
                <Settings className="h-4 w-4" /> Preferences
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="user-button"
                className="h-9 w-9 rounded-full bg-[#2e2e4a]/50 flex items-center justify-center text-[#a0a0c0] hover:text-white hover:bg-[#3e3e6a]/50 transition-all"
                title="User Profile"
              >
                <User className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#2e2e4a] border-[#4e4e6a] text-white min-w-[180px]">
              <DropdownMenuLabel className="text-[#a0a0c0]">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#4e4e6a]" />
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2">
                <UserCircle className="h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2">
                <Settings className="h-4 w-4" /> Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#4e4e6a]" />
              <DropdownMenuItem className="hover:bg-[#3e3e6a] cursor-pointer flex items-center gap-2 text-[#e06a8a]">
                <LogOut className="h-4 w-4" /> Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
