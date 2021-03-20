import React, {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
} from 'react';

interface UserDataProps {
  login?: string;
  id?: number;
  avatar_url?: string;
  html_url?: string;
  name?: string;
  company?: string;
  blog: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

interface RepositoriesDataProps {
  name: string;
  html_url: string;
  description: string;
  clone_url: string;
}

interface InterfaceProps {
  userInput: string;
  setUserInput: React.Dispatch<SetStateAction<string>>;
  userData: UserDataProps;
  setUserData: React.Dispatch<SetStateAction<UserDataProps>>;
  repositories: RepositoriesDataProps[];
  setRepositories: React.Dispatch<SetStateAction<RepositoriesDataProps[]>>;
}

interface PropsComponent {
  children?: ReactNode;
}

export const userContext = createContext<InterfaceProps>({} as InterfaceProps);

export const UserProvider: React.FC = ({ children }: PropsComponent) => {
  const [userInput, setUserInput] = useState('maykonsousa');
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps);
  const [repositories, setRepositories] = useState<RepositoriesDataProps[]>([]);

  useEffect(() => {
    if (userInput) {
      fetch(`https://api.github.com/users/${userInput}`)
        .then(response => response.json())
        .then(response => setUserData(response));

      fetch(`https://api.github.com/users/${userInput}/repos`)
        .then(response => response.json())
        .then(response => setRepositories(response));
    }
  }, [userInput]);

  return (
    <userContext.Provider
      value={{
        userInput,
        setUserInput,
        userData,
        setUserData,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
