

export interface IEmployesRepositoryModel {
    id: number;
    position: string
    start_date: Date
    work_time: Date
    hours_per_day: number
    work_schedule: string
}

export type ISaveEmployesRepositoryModel = Omit<IEmployesRepositoryModel, 'id'>