import { useRouter } from "next/router";
import React from "react";

interface ConditionalTilesWrapperPropsIF {
  children: JSX.Element[];
}

const ConditionalTilesWrapper: React.FC<ConditionalTilesWrapperPropsIF> = ({
  children,
}) => {
  const router = useRouter();
  const [SelectedChild, setSelectedChild] = React.useState<JSX.Element>(<></>);

  React.useEffect((): void => {
    if (
      router.query.editProfileItem === "personalInformation" &&
      children?.length
    ) {
      setSelectedChild(children[0]);
    } else if (
      router.query.editProfileItem === "planAndBilling" &&
      children?.length
    ) {
      setSelectedChild(children[1]);
    } else {
      setSelectedChild(children[2]);
    }
  }, [router, setSelectedChild, children]);

  return React.cloneElement(SelectedChild);
};

export default ConditionalTilesWrapper;
