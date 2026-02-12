import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type UserProfile = {
  username: string;
  about: string;
  age: number;
  images: string[];
  hobbies: string[];
};

type SelectUserProps = {
  selectedUserProfile: string;
  setSelectedUserProfile: Dispatch<SetStateAction<string>>;
};

const SelectUserContext = createContext<SelectUserProps | null>(null);

export function useSelectUserContext() {
  const context = useContext(SelectUserContext);
  if (!context) throw new Error("Unable to use context outside of provider");

  return context;
}

export default function SelectUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedUserProfile, setSelectedUserProfile] = useState<string>("");
  return (
    <SelectUserContext.Provider
      value={{ selectedUserProfile, setSelectedUserProfile }}
    >
      {children}
    </SelectUserContext.Provider>
  );
}
