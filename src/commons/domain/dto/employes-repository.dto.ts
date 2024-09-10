export interface IEmpleyesRepositoryDto {
    position: string
    start_date: Date
    work_time: Date
    hours_per_day: number
    work_schedule: string
}

export interface IGetEmpleyesRepositoryDto extends IEmpleyesRepositoryDto {
    id: number
}