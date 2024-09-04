// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Book1, I24Support, MessageProgramming } from 'iconsax-react';

// types
import { NavItemType } from 'types/menu';

// icons
const icons = {
  page: Book1,
  maintenance: MessageProgramming,
  contactus: I24Support
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  icon: icons.page,
  children: [
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.maintenance,
      children: [
        {
          id: 'error-404',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/maintenance/404',
          target: true
        },
        {
          id: 'error-500',
          title: <FormattedMessage id="error-500" />,
          type: 'item',
          url: '/maintenance/500',
          target: true
        },
        {
          id: 'coming-soon-1',
          title: (
            <>
              <FormattedMessage id="coming-soon" />
            </>
          ),
          type: 'item',
          url: '/maintenance/coming-soon',
          target: true
        },
        {
          id: 'under-construction-1',
          title: (
            <>
              <FormattedMessage id="under-construction" />
            </>
          ),
          type: 'item',
          url: '/maintenance/under-construction',
          target: true
        }
      ]
    },
    {
      id: 'contact-us',
      title: <FormattedMessage id="contact-us" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.contactus,
      target: true
    }
  ]
};

export default pages;
