export interface Client {
    id: number;
    name: string;
    contact_email?: string;
    website?: string;
    status?: string;
    client_type: 'company' | 'individual';
  }
  
  export interface Contact {
    title: string,
    id: number;
    client_id: number;
    contact_email?: string;
    contact_phone?: string;
    role?: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
    phone?: string;
    address?: string;
    dni: string;
  }
  
  export interface ProjectType {
    id: number;
    name: string;
  }
  
  export interface Project {
    id: number;
    title: string
    client_id: number;
    contact_id?: number;
    user_id?: number;
    description: string;
    status?: string;
    project_type_id?: number;
  }
  
  export interface CivilCase {
    id: number;
    project_id: number;
    court?: string;
    case_number: string;
    judge?: string;
  }
  
  export interface LaborCase {
    id: number;
    project_id: number;
    company_involved?: string;
    employee?: string;
    dispute_details?: string;
  }
  
  export interface ConsumerDefenseCase {
    id: number;
    project_id: number;
    company?: string;
    complaint_details?: string;
  }
  
  export interface MediationCase {
    id: number;
    project_id: number;
    mediator?: string;
    parties_involved?: string;
  }
  
  export interface CitizenshipCase {
    id: number;
    project_id: number;
    applicant_name?: string;
    country_of_origin?: string;
  }
  
  export interface ResidencyCase {
    id: number;
    project_id: number;
    applicant_name?: string;
    visa_type?: string;
  }
  
  export interface OtherCase {
    id: number;
    project_id: number;
    case_details?: string;
  }
  
  export interface Task {
    id: number;
    project_id?: number;
    creator_id: number;
    responsible_id: number;
    sub_responsible_id?: number;
    description: string;
    status?: string;
    deadline?: string;
  }
  