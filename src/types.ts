type UserSchema = {
  username: string;
  password: string;
  email: string;

  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  preferredPronouns: PreferredPronouns;
  profilePictureUrl: string;
  dateOfBirth: string;

  contactNumber: PhoneNumber | string;
  address: {
    addressLine: string;
    city: string;
    province?: Province;
    state?: StatesUS;
    postalCode: PostalCode;
    country: Country;
  };
  jobPosition: JobPosition;
  department: Department;
  storeLocation?: StoreLocation;
  emergencyContact: {
    fullName: string;
    contactNumber: PhoneNumber | string;
  };
  startDate: string;
  roles: UserRoles;
  active: boolean;

  completedSurveys: string[];
  isPrefersReducedMotion: boolean;
};

type UserDocument = UserSchema & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type User = UserDocument;

type UserRoles = ("Admin" | "Employee" | "Manager")[];
type UserRole = "admin" | "manager" | "employee";

type PreferredPronouns =
  | "He/Him"
  | "She/Her"
  | "They/Them"
  | "Other"
  | "Prefer not to say";

type Province =
  | "Alberta"
  | "British Columbia"
  | "Manitoba"
  | "New Brunswick"
  | "Newfoundland and Labrador"
  | "Northwest Territories"
  | "Nova Scotia"
  | "Nunavut"
  | "Ontario"
  | "Prince Edward Island"
  | "Quebec"
  | "Saskatchewan"
  | "Yukon";

type StatesUS =
  | "Alabama"
  | "Alaska"
  | "Arizona"
  | "Arkansas"
  | "California"
  | "Colorado"
  | "Connecticut"
  | "Delaware"
  | "Florida"
  | "Georgia"
  | "Hawaii"
  | "Idaho"
  | "Illinois"
  | "Indiana"
  | "Iowa"
  | "Kansas"
  | "Kentucky"
  | "Louisiana"
  | "Maine"
  | "Maryland"
  | "Massachusetts"
  | "Michigan"
  | "Minnesota"
  | "Mississippi"
  | "Missouri"
  | "Montana"
  | "Nebraska"
  | "Nevada"
  | "New Hampshire"
  | "New Jersey"
  | "New Mexico"
  | "New York"
  | "North Carolina"
  | "North Dakota"
  | "Ohio"
  | "Oklahoma"
  | "Oregon"
  | "Pennsylvania"
  | "Rhode Island"
  | "South Carolina"
  | "South Dakota"
  | "Tennessee"
  | "Texas"
  | "Utah"
  | "Vermont"
  | "Virginia"
  | "Washington"
  | "West Virginia"
  | "Wisconsin"
  | "Wyoming";

type CanadianPostalCode =
  `${string}${string}${string} ${string}${string}${string}`;
type USPostalCode = `${string}${string}${string}${string}${string}`;
type PostalCode = CanadianPostalCode | USPostalCode;

type PhoneNumber = string;

type Country = "Canada" | "United States";

type StoreLocation = "Calgary" | "Edmonton" | "Vancouver";

type Department =
  | "Executive Management"
  | "Store Administration"
  | "Office Administration"
  | "Accounting"
  | "Human Resources"
  | "Sales"
  | "Marketing"
  | "Information Technology"
  | "Repair Technicians"
  | "Field Service Technicians"
  | "Logistics and Inventory"
  | "Customer Service"
  | "Maintenance";

type ExecutiveManagement =
  | "Chief Executive Officer"
  | "Chief Operations Officer"
  | "Chief Financial Officer"
  | "Chief Technology Officer"
  | "Chief Marketing Officer"
  | "Chief Sales Officer"
  | "Chief Human Resources Officer";

type HumanResources =
  | "Human Resources Manager"
  | "Compensation and Benefits Specialist"
  | "Health and Safety Specialist"
  | "Training Specialist"
  | "Recruiting Specialist";

type StoreAdministration =
  | "Store Manager"
  | "Shift Supervisor"
  | "Office Manager";

type OfficeAdministration =
  | "Office Administrator"
  | "Receptionist"
  | "Data Entry Specialist";

type Accounting =
  | "Accounting Manager"
  | "Accounts Payable Clerk"
  | "Accounts Receivable Clerk"
  | "Financial Analyst";

type Sales =
  | "Sales Manager"
  | "Sales Representative"
  | "Business Development Specialist"
  | "Sales Support Specialist"
  | "Sales Operations Analyst";

type Marketing =
  | "Marketing Manager"
  | "Digital Marketing Specialist"
  | "Graphic Designer"
  | "Public Relations Specialist"
  | "Marketing Analyst";

type InformationTechnology =
  | "IT Manager"
  | "Systems Administrator"
  | "IT Support Specialist"
  | "Database Administrator"
  | "Web Developer"
  | "Software Developer"
  | "Software Engineer";

type RepairTechnicians =
  | "Repair Technicians Supervisor"
  | "Electronics Technician"
  | "Computer Technician"
  | "Smartphone Technician"
  | "Tablet Technician"
  | "Audio/Video Equipment Technician";

type FieldServiceTechnicians =
  | "Field Service Supervisor"
  | "On-Site Technician";

type LogisticsAndInventory =
  | "Warehouse Supervisor"
  | "Inventory Clerk"
  | "Delivery Driver"
  | "Parts and Materials Handler"
  | "Shipper/Receiver";

type CustomerService =
  | "Customer Service Supervisor"
  | "Customer Service Representative"
  | "Technical Support Specialist";

type Maintenance =
  | "Maintenance Supervisor"
  | "Maintenance Worker"
  | "Custodian";

type JobPosition =
  | ExecutiveManagement
  | StoreAdministration
  | OfficeAdministration
  | Sales
  | Marketing
  | InformationTechnology
  | RepairTechnicians
  | FieldServiceTechnicians
  | LogisticsAndInventory
  | CustomerService
  | HumanResources
  | Accounting
  | Maintenance;

type CheckboxRadioSelectData<Payload extends string = string> = Array<{
  label: string;
  value: Payload;
}>;

type ColorsSwatches = {
  dark: string[];
  gray: string[];
  red: string[];
  pink: string[];
  grape: string[];
  violet: string[];
  indigo: string[];
  blue: string[];
  cyan: string[];
  teal: string[];
  green: string[];
  lime: string[];
  yellow: string[];
  orange: string[];
};

export type {
  CanadianPostalCode,
  CheckboxRadioSelectData,
  ColorsSwatches,
  Country,
  Department,
  JobPosition,
  PhoneNumber,
  PostalCode,
  PreferredPronouns,
  Province,
  StatesUS,
  StoreLocation,
  User,
  UserDocument,
  UserRole,
  UserRoles,
  UserSchema,
  USPostalCode,
};
