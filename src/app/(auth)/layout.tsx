import AuthContainer from '@/components/AuthContainer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthContainer>{children}</AuthContainer>;
}
