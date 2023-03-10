import type {
  AboutRespones,
  PottyRole,
  EnergyRole,
  FeedingRole,
  LeftAloneRole,
} from "@prisma/client";

type Roles =
  | AboutRespones
  | PottyRole
  | EnergyRole
  | FeedingRole
  | LeftAloneRole;

interface QAndAContainerPropsIF {
  question: string;
  answer: Roles;
}

const QAndAContainer: React.FC<QAndAContainerPropsIF> = ({
  question,
  answer,
}) => {
  return (
    <div className="mt-1 py-4">
      <dt className="text-base font-semibold text-gray-600">{question}</dt>
      <dd className="text-base text-gray-600">{answer}</dd>
    </div>
  );
};

export default QAndAContainer;
