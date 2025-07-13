import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpeningComponent } from '@/components/forms/OpeningComponent/OpeningComponent';

const meta: Meta<typeof OpeningComponent> = {
  title: 'Components/forms/OpeningComponent',
  component: OpeningComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof OpeningComponent>;

export const Default: Story = {
  args: {
    openingText: `
המערכת הסוציולוגית עורכת סקרים שנתיים בקבוצות בקרב אוכלוסיות שונות בחיל  
מתוך הבנה שבידינו מצוי מידע רב על המתרחש בחיל.

במסגרת הסקר הנוכחי אנו מבקשים ללמוד על עמדותיך לגבי תחומים הקשורים לשירותך.  
המידע שיתקבל מהשאלונים יעובד כך שכל מה שייכתב על ידך יישאר חסוי,  
והממצאים שיועברו למפקדים יהיו ממוצעים מסוכמים **ללא שימוש בפרטים מזהים**.  
בשאלון יש להתייחס לטייסת בה אתה משרת, ולראש הטייסת.

### תודה על שיתוף הפעולה  
#### משרד סוציולוגיה חילי
    `,
  },
};
