export interface INomination {
    id: number;
    nominator: string;
    nominator_los: string;
    team_name: string;
    project_name: string;
    is_team: boolean;
    is_individual: string;
    team_desc: string;
    team_notes: string;
    prime_adjst: string;
    sec_adjst: string;
    award_total: string;
    award_category: string;
    behaviors: string;
    is_current_audit_client: string;
    one_firm_metric: string;
    status: string;
    list_nominee: any[];
    list_leader_reviewer: any[];
    nominees: string;
    leader_reviewers: string;
}