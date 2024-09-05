type Props = {
  readonly children: React.ReactNode
  readonly fallback: React.ReactNode
}

export async function ArAuthGate({ children, fallback }: Props) {
  const user = true
  return user ? children : fallback
}
