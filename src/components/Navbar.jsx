"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Menu, Info, FileText, X, ChevronRight } from "lucide-react";

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:shadow-md hover:scale-[1.02] focus:bg-gradient-to-br focus:from-primary/10 focus:to-primary/5 border border-transparent hover:border-primary/20",
              className
            )}
            {...props}
          >
            <div className="text-sm font-semibold leading-none mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
              {title}
              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const MobileNavItem = ({ href, children, subItems, icon: Icon }) => (
  <AccordionItem value={href} className="border-b border-border/50">
    {subItems ? (
      <>
        <AccordionTrigger className="hover:no-underline py-4 hover:text-primary transition-colors duration-300">
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-5 w-5" />}
            <span className="font-medium">{children}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="ml-8 space-y-1 mt-2 mb-4">
            {subItems.map((item, index) => (
              <li key={index} className="group">
                <SheetClose asChild>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 hover:translate-x-1"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </>
    ) : (
      <SheetClose asChild>
        <Link 
          href={href} 
          className="flex items-center gap-3 py-4 hover:text-primary transition-all duration-300 hover:translate-x-1 group"
        >
          {Icon && <Icon className="h-5 w-5" />}
          <span className="font-medium">{children}</span>
          <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </Link>
      </SheetClose>
    )}
  </AccordionItem>
);

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden relative hover:bg-primary/10 transition-all duration-300 rounded-xl"
        >
          <Menu className={cn("h-5 w-5 transition-all duration-300", open && "rotate-90 opacity-0")} />
          <X className={cn("h-5 w-5 absolute transition-all duration-300", !open && "rotate-90 opacity-0")} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] sm:w-[400px] bg-gradient-to-br from-background to-muted/20 border-l-2 border-primary/10"
      >
        <SheetHeader className="border-b border-border/50 pb-4">
          <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <MobileNavItem
              href="/about"
              subItems={[
                { href: "/about-conference", title: "About Conference" },
                { href: "/about-zep-research", title: "About Zep Research" },
              ]}
              icon={Info}
            >
              ABOUT
            </MobileNavItem>
            <MobileNavItem
              href="/call-for-papers"
              subItems={[
                { href: "/theme-and-topics", title: "Theme and Topics" },
                { href: "/papers-format", title: "Papers Format" },
                { href: "/mode-of-presentation", title: "Mode of Presentation" },
                { href: "/schedule", title: "Schedule" },
              ]}
              icon={FileText}
            >
              CALL FOR PAPERS
            </MobileNavItem>
            <MobileNavItem href="/committee">COMMITTEE</MobileNavItem>
            <MobileNavItem href="/gallery">GALLERY</MobileNavItem>
            <MobileNavItem href="/submission">SUBMISSION</MobileNavItem>
            <MobileNavItem href="/venue">VENUE</MobileNavItem>
            <MobileNavItem href="/contact">CONTACT</MobileNavItem>
          </Accordion>
          <div className="mt-8 space-y-3 px-2">
            <SheetClose asChild>
              <Button asChild className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <Link href="/registration">
                  <span className="font-semibold">REGISTRATION</span>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button 
                asChild 
                className="w-full rounded-xl border-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]" 
                variant="outline"
              >
                <Link href="/sponsorship">
                  <span className="font-semibold">Exhibit & Sponsor</span>
                </Link>
              </Button>
            </SheetClose>
          </div>
          <div className="mt-8 flex justify-center flex-col items-center gap-3 py-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl">
            <Button 
              size="icon" 
              className="rounded-full bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Link href="https://wa.me/9237388328" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
              </Link>
            </Button>
            <span className="text-sm font-medium text-green-700 dark:text-green-400">Chat with us on WhatsApp</span>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "border-b z-50 fixed left-0 right-0 top-0 bg-white/80 backdrop-blur-xl transition-all duration-500",
        scrolled && "shadow-lg border-b-primary/10"
      )}
    >
       
      <div className="container mx-auto flex h-14 sm:h-16 lg:h-18 items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Logo - Responsive sizing with animation */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="block group">
            <Image 
              src="/ictmh.png" 
              alt="ICTMH Conference Logo" 
              width={180} 
              height={60}
              className={cn(
                "h-10 w-auto sm:h-12 md:h-14 lg:h-24 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[280px] transition-all duration-300 group-hover:scale-105",
                  
              )}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on tablet and mobile */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300 data-[state=open]:bg-primary/10">
                  <Info className="mr-2 h-4 w-4" />
                  ABOUT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2 bg-gradient-to-br from-background to-muted/30">
                    <ListItem href="/about-conference" title="About Conference">
                      Learn about our conference and its objectives.
                    </ListItem>
                    <ListItem href="/about-zep-research" title="About Zep Research">
                      Discover Zep Research and its contributions.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300 data-[state=open]:bg-primary/10">
                  <FileText className="mr-2 h-4 w-4" />
                  CALL FOR PAPERS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2 bg-gradient-to-br from-background to-muted/30">
                    <ListItem href="/theme-and-topics" title="Theme and Topics">
                      Explore our conference themes and topics.
                    </ListItem>
                    <ListItem href="/papers-format" title="Papers Format">
                      Guidelines for paper submissions.
                    </ListItem>
                    <ListItem href="/mode-of-presentation" title="Mode of Presentation">
                      Learn about different presentation modes.
                    </ListItem>
                    <ListItem href="/schedule" title="Schedule">
                      Learn about Session and track.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/committee" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300")}>
                    COMMITTEE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300")}>
                    GALLERY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/submission" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300")}>
                    SUBMISSION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/venue" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300")}>
                    VENUE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm xl:text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300")}>
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            asChild 
            className="text-xs xl:text-sm px-4 xl:px-5 rounded-xl border-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] font-semibold" 
            variant="outline"
          >
            <Link href="/sponsorship">Exhibit & Sponsor</Link>
          </Button>
          
          <Button 
            asChild 
            className="text-xs xl:text-sm px-4 xl:px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] font-semibold"
          >
            <Link href="/registration">REGISTRATION</Link>
          </Button>
          
        </div>

        {/* Mobile Menu Toggle */}
        <MobileNav />

        {/* WhatsApp Floating Button - Desktop only */}
    
      </div>
    </div>
  );
}