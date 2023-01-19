import type { NextPage } from "next";
import ContactContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import NewsletterContainer from "../components/NewsletterContainer/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";
import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import { useUserData } from "../hooks/useUserData";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { setUser } = useUserData();

  React.useEffect((): void => {
    const fetchUserByEmail = async (email: string): Promise<any> => {
      try {
        const user = await axios.get(`/api/getUserByEmail?email=${email}`);
        if (user.data) {
          setUser(user.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (session) {
      fetchUserByEmail(JSON.stringify(session.user?.email));
    }
  }, [session, setUser]);

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
