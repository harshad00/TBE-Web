import { FooterLinksContainerProps, WebinarModel } from '.';

export interface FooterNavigationDataProps extends FooterLinksContainerProps {
  id: string;
  isShow: boolean;
}

export type GetSEOMetaResponseType = {
  title: string;
  siteName: string;
  description: string;
  url: string;
  type: string;
  robots: string;
  image: string;
};

export type ProductLabelType =
  | 'Roadmaps'
  | 'Projects'
  | 'Shiksha'
  | 'Interview Prep'
  | 'Webinar'
  | 'Open Source'
  | 'Interview Prep'
  | 'Portfolio'
  | 'YouFocus'
  | 'UnSkilled';

export type CohortLabelType = 'Bring Your Idea';

export interface ProductDataProps {
  [key: string]: {
    label: ProductLabelType;
    slug: string;
    description: string;
  };
}

export interface CohortDataProps {
  [key: string]: {
    label: CohortLabelType;
    slug: string;
    description: string;
  };
}

export interface TopNavbarLinkProps {
  id: string;
  name: string;
  href: string;
  description?: string;
  target?: '_blank';
  isDevelopment?: boolean;
}

export interface TopNavbarContainerProps {
  user: TopNavbarLinkProps[];
  products: TopNavbarLinkProps[];
  cohorts: TopNavbarLinkProps[];
  links: TopNavbarLinkProps[];
}

export interface ServerSessionProp {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: Date;
}

export interface WebinarPageProps extends WebinarModel {
  bannerImageUrl: string;
  seoMeta: GetSEOMetaResponseType;
  date: string;
  time: string;
  isWebinarStarted: boolean;
  webinarId: string;
}

export type CertificateType = 'WEBINAR' | 'SHIKSHA';

const UserPointsActionType = [
  'ENROLL_COURSE',
  'ENROLL_SHEET',
  'ENROLL_PROJECT',
  'COMPLETE_COURSE_CHAPTER',
  'COMPLETE_PROJECT_CHAPTER',
  'COMPLETE_QUESTION',
  'COMPLETE_COURSE_CERTIFICATE',
  'STREAK',
  'REFER',
] as const;

export type UserPointsActionType = (typeof UserPointsActionType)[number];

export type NotificationType =
  | 'WEBINAR'
  | 'SHIKSHA'
  | 'PROJECT'
  | 'INTERVIEW PREP'
  | 'UPDATE';

export type UserRoleType = 'STUDENT' | 'WORKING_PROFESSIONAL';

export type PlatformUsageType =
  | 'LEARNING_TECH'
  | 'BUILDING_PROJECTS'
  | 'INTERVIEW_PREP'
  | 'JOB_SEARCH';

export type CountryCodeType =
  | '+1'
  | '+7'
  | '+20'
  | '+27'
  | '+30'
  | '+31'
  | '+32'
  | '+33'
  | '+34'
  | '+36'
  | '+39'
  | '+40'
  | '+41'
  | '+43'
  | '+44'
  | '+45'
  | '+46'
  | '+47'
  | '+48'
  | '+49'
  | '+51'
  | '+52'
  | '+53'
  | '+54'
  | '+55'
  | '+56'
  | '+57'
  | '+58'
  | '+60'
  | '+61'
  | '+62'
  | '+63'
  | '+64'
  | '+65'
  | '+66'
  | '+81'
  | '+82'
  | '+84'
  | '+86'
  | '+90'
  | '+91'
  | '+92'
  | '+93'
  | '+94'
  | '+95'
  | '+98'
  | '+211'
  | '+212'
  | '+213'
  | '+216'
  | '+218'
  | '+220'
  | '+221'
  | '+222'
  | '+223'
  | '+224'
  | '+225'
  | '+226'
  | '+227'
  | '+228'
  | '+229'
  | '+230'
  | '+231'
  | '+232'
  | '+233'
  | '+234'
  | '+235'
  | '+236'
  | '+237'
  | '+238'
  | '+239'
  | '+240'
  | '+241'
  | '+242'
  | '+243'
  | '+244'
  | '+245'
  | '+246'
  | '+247'
  | '+248'
  | '+249'
  | '+250'
  | '+251'
  | '+252'
  | '+253'
  | '+254'
  | '+255'
  | '+256'
  | '+257'
  | '+258'
  | '+260'
  | '+261'
  | '+262'
  | '+263'
  | '+264'
  | '+265'
  | '+266'
  | '+267'
  | '+268'
  | '+269'
  | '+290'
  | '+291'
  | '+297'
  | '+298'
  | '+299'
  | '+350'
  | '+351'
  | '+352'
  | '+353'
  | '+354'
  | '+355'
  | '+356'
  | '+357'
  | '+358'
  | '+359'
  | '+370'
  | '+371'
  | '+372'
  | '+373'
  | '+374'
  | '+375'
  | '+376'
  | '+377'
  | '+378'
  | '+379'
  | '+380'
  | '+381'
  | '+382'
  | '+383'
  | '+385'
  | '+386'
  | '+387'
  | '+389'
  | '+420'
  | '+421'
  | '+423'
  | '+500'
  | '+501'
  | '+502'
  | '+503'
  | '+504'
  | '+505'
  | '+506'
  | '+507'
  | '+508'
  | '+509'
  | '+590'
  | '+591'
  | '+592'
  | '+593'
  | '+594'
  | '+595'
  | '+596'
  | '+597'
  | '+598'
  | '+599'
  | '+670'
  | '+672'
  | '+673'
  | '+674'
  | '+675'
  | '+676'
  | '+677'
  | '+678'
  | '+679'
  | '+680'
  | '+681'
  | '+682'
  | '+683'
  | '+685'
  | '+686'
  | '+687'
  | '+688'
  | '+689'
  | '+690'
  | '+691'
  | '+692'
  | '+850'
  | '+852'
  | '+853'
  | '+855'
  | '+856'
  | '+880'
  | '+886'
  | '+960'
  | '+961'
  | '+962'
  | '+963'
  | '+964'
  | '+965'
  | '+966'
  | '+967'
  | '+968'
  | '+970'
  | '+971'
  | '+972'
  | '+973'
  | '+974'
  | '+975'
  | '+976'
  | '+977'
  | '+992'
  | '+993'
  | '+994'
  | '+995'
  | '+996'
  | '+998';

export type FormatDateType = {
  dateAndTime?: string;
  dateFormat?: Intl.DateTimeFormatOptions;
  timeFormat?: Intl.DateTimeFormatOptions;
};

export interface UpdateGamificationRecordBody {
  gamificationRecordId: UserPointsActionType;
}
