import { Suspense } from "react";
import GlobalError, {
  ErrorBoundary,
} from "next/dist/client/components/error-boundary";
import { AccountCircleIcon } from "@/shared/svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary errorComponent={GlobalError}>
      <Suspense>
        <main className="flex flex-col h-dvh justify-center items-center bg-bgColor px-5  gap-y-4">
          <section className="p-5">
            <AccountCircleIcon />
          </section>
          {children}
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
