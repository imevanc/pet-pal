import type { NextPage } from "next";
import ContactContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import NewsletterContainer from "../components/NewsletterContainer/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";
import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import { useUserData } from "../hooks/useUserData";
import { useUser } from "../../lib/hooks";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { setUser } = useUserData();
  const user = useUser();

  React.useEffect((): void => {
    const fetchProviderUserByEmail = async (email: string): Promise<any> => {
      try {
        const fetchedUser = await axios.get(
          `/api/getProviderUserByEmail?email=${email}`
        );
        if (fetchedUser.data) {
          setUser(fetchedUser.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUserByEmail = async (email: string): Promise<any> => {
      try {
        const fetchedUser = await axios.post(`/api/getUserByEmail`, email);
        if (fetchedUser.data) {
          setUser(fetchedUser.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (session) {
      fetchProviderUserByEmail(JSON.stringify(session.user?.email));
    }
    if (user?.email) {
      fetchUserByEmail(user.email);
    }
  }, [session, setUser, user]);
  console.log(user);
  return (
    <div className="flex flex-col justify-between bg-white px-6">
      <DescriptionContainer />
      <ServicesContainer />
      <NewsletterContainer />
      <ContactContainer />
    </div>
  );
};

export default Home;
