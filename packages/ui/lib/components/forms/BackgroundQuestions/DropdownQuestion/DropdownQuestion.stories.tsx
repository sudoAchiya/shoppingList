import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownQuestion } from '@/components/forms/BackgroundQuestions/DropdownQuestion/DropdownQuestion';

const meta: Meta<typeof DropdownQuestion> = {
  title: 'Components/forms/DropdownQuestion',
  component: DropdownQuestion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fieldTitle: { control: 'text' },
    dropdownOptions: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownQuestion>;

export const Default: Story = {
  args: {
    fieldTitle: 'בחר אפשרות',
    dropdownOptions: ['אופציה 1', 'אופציה 2', 'אופציה 3'],
    ArrowIcon: () => (
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.68391 0.722972C0.912775 0.494107 1.27436 0.478849 1.52092 0.677199L1.5719 0.722972L5 4.15129L8.4281 0.722972C8.65696 0.494107 9.01855 0.478849 9.26511 0.677199L9.31609 0.722972C9.54496 0.951838 9.56021 1.31342 9.36186 1.55998L9.31609 1.61097L5.444 5.48306C5.21513 5.71193 4.85355 5.72718 4.60699 5.52883L4.556 5.48306L0.68391 1.61097C0.438697 1.36575 0.438697 0.968185 0.68391 0.722972Z"
          fill="#BFBFC0"
        />
      </svg>
    ),
    CheckIcon: () => (
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7949 2.54695L7.79492 14.547C7.6904 14.6518 7.56621 14.735 7.42947 14.7918C7.29272 14.8486 7.14611 14.8778 6.99804 14.8778C6.84998 14.8778 6.70337 14.8486 6.56662 14.7918C6.42988 14.735 6.30569 14.6518 6.20117 14.547L0.95117 9.29695C0.846523 9.19231 0.763512 9.06807 0.706878 8.93134C0.650243 8.79461 0.621094 8.64807 0.621094 8.50008C0.621094 8.35208 0.650243 8.20554 0.706878 8.06881C0.763512 7.93208 0.846523 7.80785 0.95117 7.7032C1.05582 7.59856 1.18005 7.51554 1.31678 7.45891C1.45351 7.40228 1.60005 7.37312 1.74805 7.37312C1.89604 7.37312 2.04258 7.40228 2.17931 7.45891C2.31604 7.51554 2.44027 7.59856 2.54492 7.7032L6.99898 12.1573L18.203 0.955076C18.4144 0.743732 18.701 0.625 18.9999 0.625C19.2988 0.625 19.5854 0.743732 19.7968 0.955076C20.0081 1.16642 20.1269 1.45307 20.1269 1.75195C20.1269 2.05084 20.0081 2.33748 19.7968 2.54883L19.7949 2.54695Z"
          fill="#5271FF"
        />
      </svg>
    ),
  },
};
