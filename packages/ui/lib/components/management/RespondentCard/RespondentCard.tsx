import { IRespondentInformation } from '@sikur/types';
import { FC, JSX } from 'react';
import {
  CardGrid,
  RespondentIdentifier,
  RespondentImage,
  RespondentInfo,
  RespondentName,
} from '@/components/management/RespondentCard/RespondentCard.styles';

export interface RespondentCardProps {
  firstName: IRespondentInformation['firstName'];
  lastName: IRespondentInformation['lastName'];
  personalIdentifier: IRespondentInformation['personalIdentifier'];
  avatarUrl: string;
  startComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
}

export const RespondentCard: FC<RespondentCardProps> = ({
  firstName,
  lastName,
  personalIdentifier,
  avatarUrl,
  startComponent,
  endComponent,
}): JSX.Element => (
  <CardGrid>
    {startComponent}
    <RespondentImage src={avatarUrl} />
    <RespondentInfo>
      <RespondentName>{`${firstName} ${lastName}`}</RespondentName>
      <RespondentIdentifier>{personalIdentifier}</RespondentIdentifier>
    </RespondentInfo>
    {endComponent}
  </CardGrid>
);
