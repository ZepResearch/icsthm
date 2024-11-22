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
import { Menu, Info, FileText } from "lucide-react"; // Correctly import Lucide React icons

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
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
  <AccordionItem value={href}>
    {subItems ? (
      <>
        <AccordionTrigger>
          {Icon && <Icon className="mr-2 h-4 w-4 inline" />}
          {children}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="ml-4 space-y-2">
            {subItems.map((item, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Link href={item.href} className="block py-2">
                    {item.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </>
    ) : (
      <SheetClose asChild>
        <Link href={href} className="block py-2">
          {Icon && <Icon className="mr-2 h-4 w-4 inline" />}
          {children}
        </Link>
      </SheetClose>
    )}
  </AccordionItem>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Navigation Menu</SheetTitle>
      </SheetHeader>
      <nav className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <MobileNavItem href="/">HOME</MobileNavItem>
          <MobileNavItem
            href="/about"
            subItems={[
              { href: "/about-conference", title: "About Conference" },
              { href: "/about-zep-research", title: "About Zep Research" },
              { href: "/about-speakers", title: "About Speakers" },
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
            ]}
            icon={FileText}
          >
            CALL FOR PAPERS
          </MobileNavItem>
          <MobileNavItem href="/submission">SUBMISSION</MobileNavItem>
          <MobileNavItem href="/venue">VENUE</MobileNavItem>
          <MobileNavItem href="/contact">CONTACT</MobileNavItem>
        </Accordion>
        <div className="mt-6">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href="/registration">REGISTRATION</Link>
            </Button>
          </SheetClose>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
);

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src="./ictmh.svg" alt="logo" width={200} height={200} />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Info className="mr-2 h-4 w-4 inline" />
                  ABOUT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/about-conference" title="About Conference">
                      Learn about our conference and its objectives.
                    </ListItem>
                    <ListItem
                      href="/about-zep-research"
                      title="About Zep Research"
                    >
                      Discover Zep Research and its contributions.
                    </ListItem>
                    <ListItem href="/about-speakers" title="About Speakers">
                      Discover Zep Research and its contributions.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FileText className="mr-2 h-4 w-4 inline" />
                  CALL FOR PAPERS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem href="/theme-and-topics" title="Theme and Topics">
                      Explore our conference themes and topics.
                    </ListItem>
                    <ListItem href="/papers-format" title="Papers Format">
                      Guidelines for paper submissions.
                    </ListItem>
                    <ListItem
                      href="/mode-of-presentation"
                      title="Mode of Presentation"
                    >
                      Learn about different presentation modes.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/submission" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    SUBMISSION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/venue" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    VENUE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild>
            <Link href="/registration">REGISTRATION</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </div>
  );
}
