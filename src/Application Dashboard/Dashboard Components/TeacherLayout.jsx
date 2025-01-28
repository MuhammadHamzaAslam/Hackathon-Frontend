import * as React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link, useLocation } from "react-router";
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FaHome, FaRegEnvelope, FaBook, FaUser } from "react-icons/fa";
import {
  FaBookOpen,
  FaUserCheck,
  FaUserTie,
  FaUsersCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { LogoutUser } from "../../Constant/helperFunction";

const navItems = [
  {
    title: "Home",
    // href: "/admin",
    icon: FaHome,
  },
];

export default function TeacherLayout({ children }) {
  const loc = useLocation();
  //  console.log(loc.pathname.startsWith("/admin"));

  let fetchedAllCourses = async () => {
    try {
      let response = await fetch(
        "https://saylani-management-system-backen-production.up.railway.app/api/admin/courses"
      );
      let data = await response.json();
      // console.log(data, "courses");
    } catch (err) {
      console.log(err);
    }
  };

  // fetchedAllCourses();
  useEffect(() => {
    fetchedAllCourses();
  }, []);
  const [open, setOpen] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  //

  const [loader, setLoader] = React.useState(true);

  //   const currentUser = getCurrentUser();
  //   if (currentUser) {
  //     console.log("Logged-in User:", currentUser);
  //     // Add role-specific logic if needed
  //     if (currentUser.role === "admin") {
  //       console.log("User is an admin");
  //     } else {
  //       navigate("/");
  //       console.log("User role:", currentUser.role);
  //     }
  //   } else {
  //     console.log("No user is logged in.");
  //     navigate("/login"); // Redirect to login if no user
  //   }
  // }, [navigate]);
  //
  return (
    <>
      <div className="flex flex-row">
        <SidebarProvider>
          <div className="flex  min-h-screen bg-background w-[100vw] an">
            <Sidebar>
              <SidebarHeader className="bg-white">
                <Link to="/" className="flex items-center pl-8 p-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s"
                    alt="Admin Panel Logo"
                    className="h-16 w-16 rounded-full"
                  />
                </Link>
              </SidebarHeader>
              <SidebarContent className="pt-16 bg-white">
                <SidebarMenu>
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.href}
                        >
                          <Link
                            to={item.href}
                            className={`nav-linkss ${
                              location.pathname === item.href ? "active" : ""
                            }`}
                          >
                            <span className="text">
                              <Icon className="icon" />
                              {item.title}
                            </span>
                            <span className="nav-hover"></span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                  {/* <span className="flex items-center justify-center ml-8 mr-7">
                              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-md font-bold rounded-lg py-2 px-5">Post Assignment</button>
                            </span> */}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>

            {/* Main Content */}
            {/* Main Content */}
            <main className="flex-1 bg-gray-50">
              <header className="sticky top-0 z-10 flex h-16 w-full items-center gap-4 border-b bg-background px-6">
                <SidebarTrigger />
                <div className="flex flex-1 items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden lg:flex"
                    onClick={() => setOpen(true)}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search
                    <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                      <span className="text-xs">⌘</span>K
                    </kbd>
                  </Button>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="h-9 md:w-[300px] lg:hidden"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    aria-label="Notifications"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <Link to={"/resetPassword"}>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={LogoutUser}>
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>
              <div className="p-6">{children}</div>
            </main>
          </div>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>

          <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-2 py-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1 text-sm",
                      location.pathname === item.href &&
                        "font-semibold text-primary"
                    )}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </SidebarProvider>
      </div>
    </>
  );
}
