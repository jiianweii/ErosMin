import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type NavbarProviderProps = {
  isNavbarShown: boolean;
  setIsNavbarShown: Dispatch<SetStateAction<boolean>>;
};

const NavbarContext = createContext<NavbarProviderProps | null>(null);

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("Unable to use context outside of provider");

  return context;
}

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavbarShown, setIsNavbarShown] = useState<boolean>(true);
  return (
    <NavbarContext.Provider value={{ isNavbarShown, setIsNavbarShown }}>
      {children}
    </NavbarContext.Provider>
  );
}
