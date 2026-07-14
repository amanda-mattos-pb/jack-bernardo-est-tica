import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import { TreatmentProvider } from "../context/TreatmentContext";
import { TreatmentModal } from "../components/site/TreatmentModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jack Bernardo — Estética Avançada" },
      { name: "description", content: "Estética avançada com resultados naturais. Tratamentos faciais, harmonização e protocolos exclusivos por Jack Bernardo." },
      { name: "author", content: "Jack Bernardo" },
      { property: "og:title", content: "Jack Bernardo — Estética Avançada" },
      { property: "og:description", content: "Estética avançada com resultados naturais. Tratamentos faciais, harmonização e protocolos exclusivos por Jack Bernardo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Jack Bernardo — Estética Avançada" },
      { name: "twitter:description", content: "Estética avançada com resultados naturais. Tratamentos faciais, harmonização e protocolos exclusivos por Jack Bernardo." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/01b3b954-cd66-4594-ba40-203ab1a6d968/id-preview-34da26a5--c053d99c-8560-4720-832c-12d1dabc49ff.lovable.app-1780599097111.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/01b3b954-cd66-4594-ba40-203ab1a6d968/id-preview-34da26a5--c053d99c-8560-4720-832c-12d1dabc49ff.lovable.app-1780599097111.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,500&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <TreatmentProvider>
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          {/* Optional background grain */}
          <div className="pointer-events-none fixed inset-0 bg-grain opacity-[0.03] mix-blend-overlay z-50" />
          
          <Nav />
          <main className="flex-1 pt-24">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
          <TreatmentModal />
        </div>
      </TreatmentProvider>
    </QueryClientProvider>
  );
}
